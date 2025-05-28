'use server';

import prisma from '@/shared/lib/prisma';
import { CreatePostDto } from './types';
import { getUserSessionId } from '@/shared/lib/server-session';

export async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return prisma.post.findMany({
    // relationLoadStrategy: 'join',
    take: 10,
    orderBy: { createdAt: 'desc' },
    include: { author: { select: { username: true } } },
  });
}

export async function createPost(request: CreatePostDto) {
  const { type, title, content, isPublished } = request;
  const sessionId = await getUserSessionId();
  if (!sessionId) {
    throw new Error('No sessionId provided');
  }

  await prisma.post.create({
    data: {
      type,
      title,
      content,
      published: isPublished,
      author: {
        connect: {
          session: sessionId,
        },
      },
    },
  });
}
