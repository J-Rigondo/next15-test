import { NextRequest, NextResponse, userAgent } from 'next/server';
import { getSessionFromRequest } from '@/shared/lib/session';
import {
  SESSION_COOKIE_MAX_AGE,
  SESSION_COOKIE_NAME,
} from '@/shared/lib/constant';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const method = request.method;
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  // const ua = request.headers.get('user-agent') ?? 'unknown';
  const referer = request.headers.get('referer') ?? 'direct';
  const visitAt = new Date().toISOString();
  const { device, browser, isBot, os, ua } = userAgent(request);

  // device.type can be: 'mobile', 'tablet', 'console', 'smarttv',
  // 'wearable', 'embedded', or undefined (for desktop browsers)
  const viewport = device.type || 'desktop';

  console.log('========================================');
  // console.log(Object.fromEntries(request.headers.entries()));

  console.log(`pathname=${pathname}`);
  console.log(`method=${method}`);
  console.log(`ip=${ip}`);
  console.log(`ua=${ua}`);
  console.log(`referer=${referer}`);
  console.log(`visitAt=${visitAt}`);
  console.log(`viewport=${viewport}`);
  console.log(`browser=${browser.name} ${browser.major} ${browser.version}`);
  console.log(`isBot=${isBot}`);
  console.log(`os=${os.name}`);

  console.log('========================================');

  const response = NextResponse.next();

  const session = getSessionFromRequest(request);
  if (!session) {
    // call api route
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
