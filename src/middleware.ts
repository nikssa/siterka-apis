import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';
import { decrypt } from './utils/session';

const sessionName = process.env.JWT_NAME ?? 'session';

export default async function middleware(req: NextRequest) {
  // 1. Check if route is protected
  const protectedRoutes = [
    '/users',
    '/profiles',
    '/posts',
    '/add-post',
    '/edit-post'
  ];
  const currentPath = req.nextUrl.pathname;
  const isProtectedRoute =
    protectedRoutes.filter((route) => currentPath.startsWith(route)).length > 0;

  if (isProtectedRoute) {
    // 2. Check for valid session (JWT) - if user is logged in
    const cookie = cookies().get(sessionName)?.value;
    const session = cookie ? await decrypt(cookie) : null;
    // 3. Redirect unauthorized users to login page from certain routes
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // 4. Render route
  return NextResponse.next();
}

// Routes middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
