import { type NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  // 1. Check if route is protected
  // 2. Check for valid session (JWT) - if user is logged in
  // 3. Redirect unauthorized users to login page from certain routes
  // 4. Render route
}

// Routes middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
