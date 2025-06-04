import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest } from '@/shared/lib/session';
import { MiddlewareContext } from '@/shared/lib/middleware/types';
import {
  SESSION_COOKIE_MAX_AGE,
  SESSION_COOKIE_NAME,
} from '@/shared/lib/constant';

export async function sessionMiddleware(
  request: NextRequest,
  context?: MiddlewareContext,
) {
  const response = NextResponse.next();

  const sessionId = getSessionFromRequest(request);

  if (!sessionId) {
    const apiResult = await fetch(`${request.nextUrl.origin}/api/session`, {
      method: 'GET',
    });
    const { sessionId } = await apiResult.json();

    context!.sessionId = sessionId;
    context!.response.cookies.set(SESSION_COOKIE_NAME, sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: SESSION_COOKIE_MAX_AGE,
    });
  }

  return response;
}
