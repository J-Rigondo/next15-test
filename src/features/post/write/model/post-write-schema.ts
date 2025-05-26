import { z } from 'zod';

export const postWriteSchema = z.object({
  type: z
    .string()
    .min(3, { message: 'type must be at least 3 characters' })
    .max(20, { message: 'type must not be longer 20 characters' }),
  title: z
    .string()
    .min(3, { message: 'type must be at least 3 characters' })
    .max(30, { message: 'type must not be longer 20 characters' }),
  content: z
    .string()
    .min(3, { message: 'type must be at least 3 characters' })
    .max(200, { message: 'type must not be longer 20 characters' }),
  isPublished: z.boolean(),
});

export type PostWriteSchema = z.infer<typeof postWriteSchema>;
