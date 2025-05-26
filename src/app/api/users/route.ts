import prisma from '@/shared/lib/prisma';
import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from 'unique-names-generator';

export async function POST(request: Request) {
  const sessionId = randomUUID();
  const username = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    separator: '',
    style: 'capital',
    length: 2,
  });

  await prisma.user.create({
    data: {
      username,
      session: sessionId,
    },
  });

  return NextResponse.json({ sessionId });
}
