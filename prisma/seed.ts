import { Prisma, PrismaClient } from './generated/prisma';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function init() {
  const posts: Prisma.PostCreateInput[] = [];
  for (let i = 0; i < 20; i++) {
    posts.push({
      author: {
        connect: {
          id: 1,
        },
      },
      content: faker.lorem.paragraphs(5),
      title: faker.lorem.sentence({ min: 5, max: 10 }),
      type: faker.lorem.sentence({ min: 3, max: 5 }).toUpperCase(),
    });
  }

  for (const post of posts) {
    await prisma.post.create({ data: post });
  }
}

init();
