import type { PrismaService } from '@/prisma';

export type User = NonNullable<
  Awaited<ReturnType<PrismaService['user']['findFirst']>>
>;
