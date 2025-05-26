'use server';

import { cookies } from 'next/headers';
import {
  SESSION_COOKIE_MAX_AGE,
  SESSION_COOKIE_NAME,
} from '@/shared/lib/constant';
import { randomUUID } from 'node:crypto';

export async function getUserSessionId() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME);

  return session?.value;
}

/**
 * 서버 액션으로만 가능하며 api route에서 호출하면 쿠키 설정 불가
 * api route는 NextResponse에서 설정 필수
 */
export async function setUserSessionId() {
  const newSessionId = randomUUID();
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE_NAME, newSessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_COOKIE_MAX_AGE,
  });

  return newSessionId;
}
