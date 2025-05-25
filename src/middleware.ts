import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest } from '@/shared/lib/session';

export function middleware(request: NextRequest, response: NextResponse) {
  // todo Server Action 요청이면 무시
  if (request.method === 'POST' && request.nextUrl.pathname === '/_actions') {
    return NextResponse.next();
  }

  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  const userAgent = request.headers.get('user-agent') ?? 'unknown';
  const referer = request.headers.get('referer') ?? 'direct';
  const visitAt = new Date().toISOString();

  console.log('========================================');
  console.log(request.headers.entries());

  console.log(ip);
  console.log(userAgent);
  console.log(referer);
  console.log(visitAt);
  console.log('========================================');

  const session = getSessionFromRequest(request);
  if (!session) {
    // call api
    fetch(`${request.nextUrl.origin}/api/users`, {
      method: 'POST',
    });
  }

  return NextResponse.next();
}

export const config = {
  // matcher solution for public, api, assets and _next exclusion
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
