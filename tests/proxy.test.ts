import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import { NextRequest, NextResponse } from "next/server.js";
import ts from "typescript";

// Exercise the actual proxy with real Next.js objects, using the same
// TypeScript compilation approach as the existing signup route tests.
const source = readFileSync(new URL("../src/proxy.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const proxyModule = {
  exports: {} as { proxy: (request: NextRequest) => NextResponse },
};
new Function("require", "module", "exports", compiled)(
  createRequire(import.meta.url),
  proxyModule,
  proxyModule.exports,
);
const { proxy } = proxyModule.exports;

const redirects = [
  ["https://rhythmrealm-web.vercel.app/", "https://www.rhythmrealm.net/"],
  ["https://rhythmrealm-web.vercel.app/do-you-ever-wonder", "https://www.rhythmrealm.net/do-you-ever-wonder"],
  ["https://rhythmrealm-web.vercel.app/lyrics/do-you-ever-wonder", "https://www.rhythmrealm.net/lyrics/do-you-ever-wonder"],
  ["https://rhythmrealm-web.vercel.app/blog/example?utm_source=test", "https://www.rhythmrealm.net/blog/example?utm_source=test"],
  ["https://rhythmrealm.net/do-you-ever-wonder?ref=test", "https://www.rhythmrealm.net/do-you-ever-wonder?ref=test"],
  ["http://rhythmrealm-web.vercel.app:8080/blog/a%20b?ref=a%2Fb&ref=two", "https://www.rhythmrealm.net/blog/a%20b?ref=a%2Fb&ref=two"],
  ["https://RHYTHMREALM-WEB.VERCEL.APP/music", "https://www.rhythmrealm.net/music"],
] as const;

for (const [input, destination] of redirects) {
  test(`308 redirect: ${input}`, () => {
    const request = new NextRequest(input);
    const originalUrl = request.nextUrl.toString();
    const response = proxy(request);
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), destination);
    assert.equal(request.nextUrl.toString(), originalUrl);
    assert.equal(proxy(new NextRequest(destination)).headers.get("location"), null);
  });
}

const unchanged = [
  "https://www.rhythmrealm.net/do-you-ever-wonder",
  "https://rhythmrealm-web-test-andre-dee-washingtons-projects.vercel.app/music",
  "https://rhythmrealm-web-git-main-andre-dee-washingtons-projects.vercel.app/",
  "https://rhythmrealm-rbn2avvqo-andre-dee-washingtons-projects.vercel.app/",
  "https://rhythmrealm-web.vercel.app.example.com/",
  "http://localhost:3000/",
] as const;

for (const input of unchanged) {
  test(`pass through: ${input}`, () => {
    const response = proxy(new NextRequest(input));
    assert.equal(response.headers.get("location"), null);
    assert.equal(response.headers.get("x-middleware-next"), "1");
  });
}
