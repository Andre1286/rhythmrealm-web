/* Local-only integration check. Start the production server on port 3210.
 * Run: node tests/signup-browser.mjs <path-to-playwright> [screenshot-path]
 * Uses an existing Playwright installation; does not add dependencies.
 */
import assert from "node:assert/strict";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
const { chromium } = await import(process.argv[2]
  ? pathToFileURL(resolve(process.argv[2], "index.mjs")).href
  : "playwright");
const base = "http://127.0.0.1:3210";

(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: "block" });
    let reply = { status: 200, body: { ok: true } };
    const submissions = [];
    let release;
    await context.route("**/*", async (route) => {
      const url = new URL(route.request().url());
      if (url.origin !== base) return route.abort();
      if (url.pathname === "/api/signup") {
        submissions.push(route.request().postDataJSON());
        if (reply.delay) await new Promise((resolve) => { release = resolve; });
        if (reply.abort) return route.abort();
        return route.fulfill({ status: reply.status, contentType: "application/json", body: JSON.stringify(reply.body) });
      }
      if (url.pathname.startsWith("/_vercel/")) return route.fulfill({ contentType: "application/javascript", body: "" });
      return route.continue();
    });
    await context.addInitScript(() => {
      window.signupEvents = [];
      let beforeSend = (event) => event;
      window.va = (type, data) => {
        if (type === "beforeSend") beforeSend = data;
        if (type === "event") {
          window.signupEvents.push({ ...data, envelope: beforeSend({ type: "event", url: location.href }) });
        }
      };
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(`${base}/?utm_source=campaign&utm_campaign=listener%40example.com#signup`);
    const form = page.locator("#signup form");
    const email = page.getByRole("textbox", { name: "Email address" });
    const button = form.getByRole("button");
    const status = page.locator("#signup [role=status]");
    const alert = page.locator("#signup [role=alert]");
    await email.fill("invalid");
    await button.click();
    await page.waitForFunction(() => document.querySelector('[role=alert]').textContent.includes("valid email"));
    assert.equal(await email.getAttribute("aria-invalid"), "true");
    assert.equal(submissions.length, 0);
    assert.equal(await email.evaluate((el) => document.activeElement === el), true);
    const description = await email.getAttribute("aria-describedby");
    assert.ok(description.includes(await alert.getAttribute("id")));
    assert.equal((await page.evaluate(() => window.signupEvents)).length, 0);

    await email.fill("listener@example.com");
    await email.press("Tab");
    assert.equal(await button.evaluate((el) => document.activeElement === el), true);
    reply = { status: 200, body: { ok: true }, delay: true };
    await button.press("Enter");
    await page.waitForFunction(() => document.querySelector("#signup form").getAttribute("aria-busy") === "true");
    assert.equal(await button.isDisabled(), true);
    assert.match(await status.innerText(), /Submitting/);
    await form.evaluate((el) => el.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true })));
    await page.waitForTimeout(50);
    assert.equal(submissions.length, 1);
    release();
    await page.waitForFunction(() => document.querySelector('[role=status]').textContent.includes("accepted"));
    assert.equal(await email.inputValue(), "");
    assert.deepEqual(Object.keys(submissions[0]).sort(), ["email", "startedAt", "website"]);
    assert.ok(page.url().includes("utm_source=campaign"));
    assert.deepEqual(await page.evaluate(() => window.signupEvents.map(({ name, data, envelope }) => ({ name, data, envelope }))), [{
      name: "insiders_signup_completed",
      data: { signup_page: "/", referring_page: "unknown" },
      envelope: { type: "event", url: `${base}/` },
    }]);
    const inputBox = await email.boundingBox();
    const buttonBox = await button.boundingBox();
    assert.ok(buttonBox.y >= inputBox.y + inputBox.height);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    if (process.argv[3]) await page.locator("#signup").screenshot({ path: process.argv[3] });

    for (const failure of [
      { status: 400, body: { ok: false, message: "Please enter a valid email address." } },
      { status: 500, body: { ok: false, message: "private upstream detail" } },
      { status: 200, body: null },
      { status: 200, body: { ok: "true" } },
      { abort: true },
    ]) {
      reply = failure;
      await email.fill("listener@example.com");
      await button.click();
      await page.waitForFunction(() => document.querySelector('[role=alert]').textContent.length > 0);
      assert.equal(await button.isEnabled(), true);
      assert.equal(await email.inputValue(), "listener@example.com");
      assert.equal((await page.evaluate(() => window.signupEvents)).length, 1);
      assert.equal((await alert.innerText()).includes("private upstream"), false);
    }
    reply = { status: 200, body: { ok: true } };
    await button.click();
    await page.waitForFunction(() => document.querySelector('[role=status]').textContent.includes("already joined"));
    assert.equal((await page.evaluate(() => window.signupEvents)).length, 2);

    // Missing/unsupported analytics and a throwing analytics runtime must not
    // change accepted signup feedback or prevent another submission.
    for (const mode of ["missing", "throwing"]) {
      await page.evaluate((mode) => {
        window.va = mode === "missing" ? undefined : () => { throw new Error("Analytics unavailable"); };
      }, mode);
      await email.fill("listener@example.com");
      await button.click();
      await page.waitForFunction(() => document.querySelector('[role=status]').textContent.includes("accepted"));
      assert.equal(await alert.innerText(), "");
      assert.equal(await button.isEnabled(), true);
    }

    // Existing comic CTA preserves recognized referring content at completion.
    await page.goto(`${base}/comics/the-artist-nobody-heard/issue-3`);
    assert.equal(await page.locator('img[alt^="Comic page"]').count(), 8);
    await page.getByRole("link", { name: "Join the Insider List", exact: true }).click();
    await page.waitForURL(`${base}/#signup`);
    await email.fill("listener@example.com");
    await button.click();
    await page.waitForFunction(() => window.signupEvents.length === 1);
    assert.equal((await page.evaluate(() => window.signupEvents))[0].data.referring_page, "/comics/the-artist-nobody-heard/issue-3");

    await page.setViewportSize({ width: 1440, height: 1000 });
    for (const path of ["/blog/coming-over-yesterday", "/music", "/do-you-ever-wonder", "/lyrics/do-you-ever-wonder", "/trying-to-let-you-go", "/lyrics/trying-to-let-you-go", "/contact"]) {
      const response = await page.goto(`${base}${path}`);
      assert.equal(response.status(), 200, path);
      assert.ok((await page.locator("h1").innerText()).length > 0, path);
      assert.ok(await page.locator("#signup").count() <= 1, path);
    }
    assert.equal(await page.locator("#licensing").count(), 1);
    assert.ok(await page.locator('a[href^="mailto:"]').count() > 0);
    assert.deepEqual(errors, []);
    console.log("PASS: local browser signup states, keyboard/mobile, completion payload, campaign URL, comic referral, and content routes. All signup requests mocked; external requests blocked.");
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
