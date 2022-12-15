import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ServersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.server.findMany({
      include: {
        channels: {
          select: {
            id: true,
            name: true,
          },
          take: 1,
          orderBy: {
            name: 'asc',
          },
        },
      },
    });
  }

  findChannels(id: string) {
    return this.prisma.channel.findMany({
      where: {
        serverId: id,
      },
    });
  }
}
