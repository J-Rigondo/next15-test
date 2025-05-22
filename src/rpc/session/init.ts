'use server';

import { getUserSessionId, setUserSessionId } from '@/shared/lib/session';
import prisma from '@/shared/lib/prisma';

export async function initSession() {
  const sessionId = await getUserSessionId();

  if (!sessionId) {
    const newSessionId = await setUserSessionId();

    await prisma.user.create({
      data: { session: newSessionId },
    });
  }
}
