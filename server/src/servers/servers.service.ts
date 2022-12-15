import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ServersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.server.findMany({});
  }
}
