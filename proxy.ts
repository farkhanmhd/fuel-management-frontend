import { getIronSession } from "iron-session";
import { type NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";
import { type SessionData, sessionOptions } from "./lib/auth/session";

// Consider using an array to future-proof for /signup, /reset-password, etc.
const publicRoutes = ["/login"];
const REVALIDATE_INTERVAL = 60 * 15;

export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  const res = NextResponse.next();
  const session = await getIronSession<SessionData>(req, res, sessionOptions);

  // 1. No session - not logged in
  if (!session.isLoggedIn) {
    if (isPublicRoute) {
      return res;
    }

    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 2. Logged in but on a public route
  if (isPublicRoute || path === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  // 3. Check if session needs re-verification
  const now = Math.floor(Date.now() / 1000);
  const isStale = now - session.lastVerifiedAt > REVALIDATE_INTERVAL;

  if (isStale) {
    const isValid = await verifyToken(session.accessToken);
    console.log(isValid);

    if (!isValid) {
      session.destroy();
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
    session.lastVerifiedAt = now;
    await session.save();
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.webp|.*\\.ico).*)",
  ],
};
