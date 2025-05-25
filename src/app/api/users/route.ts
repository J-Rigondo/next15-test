import prisma from '@/shared/lib/prisma';
import { NextResponse } from 'next/server';
import { setUserSessionId } from '@/shared/lib/server-session';

export async function POST(request: Request) {
  const sessionId = await setUserSessionId();

  await prisma.user.create({
    data: {
      session: sessionId,
    },
  });

  return NextResponse.json('ok');
}
