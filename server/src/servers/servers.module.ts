import { Module } from '@nestjs/common';
import { ServersService } from './servers.service';
import { ServersController } from './servers.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ServersController],
  providers: [ServersService, PrismaService],
})
export class ServersModule {}
