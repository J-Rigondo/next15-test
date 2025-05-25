import { PrismaClient } from '../../../prisma/generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const isDev = process.env.NODE_ENV !== 'production';
const prismaInstance = isDev
  ? new PrismaClient({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'stdout',
          level: 'error',
        },
        {
          emit: 'stdout',
          level: 'info',
        },
        {
          emit: 'stdout',
          level: 'warn',
        },
      ],
    })
  : new PrismaClient({ log: ['error'] });

if (isDev) {
  prismaInstance.$on('query', (e) => {
    console.log('Query: ' + e.query);
    console.log('Params: ' + e.params);
    console.log('Duration: ' + e.duration + 'ms');
  });
}

const prisma =
  globalForPrisma.prisma || prismaInstance.$extends(withAccelerate());

if (isDev) globalForPrisma.prisma = prisma;

export default prisma;
