import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersProvider } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersProvider],
})
export class UsersModule {}
