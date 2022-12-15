import { Controller, Get, Param } from '@nestjs/common';
import { ServersService } from './servers.service';

@Controller('servers')
export class ServersController {
  constructor(private readonly serversService: ServersService) {}

  @Get()
  findAll() {
    return this.serversService.findAll();
  }

  @Get(':id/channels')
  findOne(@Param('id') id: string) {
    return this.serversService.findChannels(id);
  }
}
