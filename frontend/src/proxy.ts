import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) 
{
    const token = request.cookies.get("auth_token");
    const { pathname } = request.nextUrl;

    // if (token && (pathname === '/sign-in' || pathname === '/sign-up')) {
    //   return NextResponse.redirect(new URL("/", request.url));
    // }

    // if(!token && pathname === '/')
    // {
    //   return NextResponse.redirect(new URL("/sign-in", request.url));
    // }

    return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/sign-in",
    "/sign-up",
  ],
};