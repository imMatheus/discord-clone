import { Controller, Get } from '@nestjs/common';
import { ServersService } from './servers.service';

@Controller('servers')
export class ServersController {
  constructor(private readonly serversService: ServersService) {}

  @Get()
  findAll() {
    return this.serversService.findAll();
  }
}
