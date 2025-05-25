import { SESSION_COOKIE_NAME } from '@/shared/lib/constant';
import { NextRequest } from 'next/server';

export function getSessionFromRequest(req: NextRequest) {
  return req.cookies.get(SESSION_COOKIE_NAME)?.value;
}
