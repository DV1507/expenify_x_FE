import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt")?.value;
  console.log(
    token,
    "==================================token==========================================="
  );
  const path = request.nextUrl.pathname;

  const isAuthPage = path === "/" || path === "/register";
  const isProtectedPage = ["/dashboard", "/expense"].some((p) =>
    path.startsWith(p)
  );
  console.log(
    isAuthPage,
    isProtectedPage,
    "==================================isProtectedPage==========================================="
  );

  // ✅ Case 1: User is logged in and tries to access login/register/home → redirect to /dashboard
  if (token && isAuthPage) {
    console.log(
      "==================================indisde auth page with token==========================================="
    );
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // ✅ Case 2: User is NOT logged in and tries to access protected route → redirect to /login
  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ✅ Allow access to all other pages
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/", // home page
    "/register",
    "/dashboard/:path*",
    "/expense/:path*",
  ],
};
