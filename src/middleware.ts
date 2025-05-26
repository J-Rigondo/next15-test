import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest } from '@/shared/lib/session';
import {
  SESSION_COOKIE_MAX_AGE,
  SESSION_COOKIE_NAME,
} from '@/shared/lib/constant';

export async function middleware(request: NextRequest) {
  // todo Server Action 요청이면 무시
  if (request.method === 'POST' && request.nextUrl.pathname === '/_actions') {
    return NextResponse.next();
  }

  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  const userAgent = request.headers.get('user-agent') ?? 'unknown';
  const referer = request.headers.get('referer') ?? 'direct';
  const visitAt = new Date().toISOString();

  console.log('========================================');
  console.log(Object.fromEntries(request.headers.entries()));

  console.log(ip);
  console.log(userAgent);
  console.log(referer);
  console.log(visitAt);
  console.log('========================================');

  const response = NextResponse.next();

  const session = getSessionFromRequest(request);
  if (!session) {
    // call api
    const apiResult = await fetch(`${request.nextUrl.origin}/api/users`, {
      method: 'POST',
    });
    const { sessionId } = await apiResult.json();
    response.cookies.set(SESSION_COOKIE_NAME, sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: SESSION_COOKIE_MAX_AGE,
    });
  }

  return response;
}

export const config = {
  // matcher solution for public, api, assets and _next exclusion
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
