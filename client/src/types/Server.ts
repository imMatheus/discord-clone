import type { PrismaService } from '@/prisma';

export type Server = NonNullable<
  Awaited<ReturnType<PrismaService['server']['findFirst']>>
>;
