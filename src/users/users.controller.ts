import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UsersProvider } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private usersProvider: UsersProvider) {}

  @Get()
  @HttpCode(505)
  async getAllUsers(): Promise<User[]> {
    return this.usersProvider.getAll();
  }

  @Post()
  async createUser(@Body() user: User) {
    this.usersProvider.addUser(user);
  }
}
