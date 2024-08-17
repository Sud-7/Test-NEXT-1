import { NextResponse } from "next/server";

export default function middleware(request) {
  //   console.log("Middleware");

  //   if (request.nextUrl.pathname! = '/login') {

  return NextResponse.redirect(new URL("/login", request.url));
  //   }
}
export const config = {
  matcher: ["/about/:path*", "/student/:path*"],
};
