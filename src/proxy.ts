import { NextResponse, type NextRequest } from "next/server";

const ROOT_DOMAIN = "rhythmrealm.net";
const WWW_DOMAIN = "www.rhythmrealm.net";

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname.toLowerCase() !== ROOT_DOMAIN) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = WWW_DOMAIN;
  url.port = "";

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/:path*"],
};
