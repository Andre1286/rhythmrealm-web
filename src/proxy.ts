import { NextResponse, type NextRequest } from "next/server";

const ROOT_DOMAIN = "rhythmrealm.net";
const WWW_DOMAIN = "www.rhythmrealm.net";
const VERCEL_PRODUCTION_DOMAIN = "rhythmrealm-web.vercel.app";

export function proxy(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();

  if (hostname !== ROOT_DOMAIN && hostname !== VERCEL_PRODUCTION_DOMAIN) {
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
