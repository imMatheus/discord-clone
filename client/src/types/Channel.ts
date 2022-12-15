import type { PrismaService } from '@/prisma';

export type Channel = NonNullable<
  Awaited<ReturnType<PrismaService['channel']['findFirst']>>
>;
