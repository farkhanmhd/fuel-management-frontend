import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { verifyTokenCached } from "./lib/auth";

// Consider using an array to future-proof for /signup, /reset-password, etc.
const publicRoutes = ["/login"];

export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);

  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value || "";

  // 1. If there's no token AND they aren't on a public route, kick them to login
  if (!(token || isPublicRoute)) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 2. If there is a token, verify its integrity
  let isValidToken = false;
  if (token) {
    isValidToken = await verifyTokenCached(token);
  }

  // 3. If they have an invalid token and are trying to access a protected route
  if (!(isValidToken || isPublicRoute)) {
    // Optional: You might want to clear the invalid cookie here before redirecting
    cookieStore.delete("auth-token");
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 4. If they are successfully authenticated but trying to hit a public route (like /login)
  if (isPublicRoute && isValidToken) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  // 5. Otherwise, let the request pass
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
