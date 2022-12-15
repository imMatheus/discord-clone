import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MessageModule } from './message/message.module';
import { AuthModule } from './auth/auth.module';
import { ServersModule } from './servers/servers.module';

@Module({
  imports: [UsersModule, MessageModule, AuthModule, ServersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
