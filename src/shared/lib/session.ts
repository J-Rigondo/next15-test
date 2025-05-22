import { cookies } from 'next/headers';
import { COOKIE_MAX_AGE, COOKIE_NAME } from '@/shared/lib/constant';
import { randomUUID } from 'node:crypto';

export async function getUserSessionId() {
  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAME);

  return session?.value;
}

export async function setUserSessionId() {
  const newSessionId = randomUUID();
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, newSessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: COOKIE_MAX_AGE,
  });

  return newSessionId;
}
