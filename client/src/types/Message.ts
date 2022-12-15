import type { PrismaService } from '@/prisma';
import type { User } from './User';

export type Message = NonNullable<
  Awaited<ReturnType<PrismaService['message']['findFirst']>>
>;
export type MessageWithUser = Message & {
  user: Pick<User, 'name' | 'avatar_url' | 'id' | 'hash'>;
};
