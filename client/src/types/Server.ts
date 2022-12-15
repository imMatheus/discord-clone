import type { PrismaService } from '@/prisma';
import type { Channel } from './Channel';

export type Server = NonNullable<
  Awaited<ReturnType<PrismaService['server']['findFirst']>>
>;

export type ServerWithOneChannel = Server & {
  channels: Channel[];
};
