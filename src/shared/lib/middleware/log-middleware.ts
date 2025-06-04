import { NextRequest, NextResponse, userAgent } from 'next/server';
import { MiddlewareContext } from '@/shared/lib/middleware/types';
import { getSessionFromRequest } from '@/shared/lib/session';

export async function logMiddleware(
  request: NextRequest,
  context?: MiddlewareContext,
) {
  const { pathname } = request.nextUrl;
  const method = request.method;
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  const referer = request.headers.get('referer') ?? 'direct';
  const { device, browser, os, ua } = userAgent(request);
  const viewport = device.type || 'desktop';

  const sessionId = context?.sessionId ?? getSessionFromRequest(request);

  fetch(`${request.nextUrl.origin}/api/users/log`, {
    method: 'POST',
    body: JSON.stringify({
      sessionId,
      ip,
      path: pathname,
      httpMethod: method,
      useragent: ua,
      referer,
      deviceType: viewport,
      os: os.name,
      browser: `${browser.major},${browser.name},${browser.version}`,
    }),
  });

  return NextResponse.next();
}
