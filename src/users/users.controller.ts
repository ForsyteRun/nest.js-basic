import { Controller, Get, Post, Param, Body, Put, Patch } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() userDto: UserDto) {
    return userDto;
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.usersService.updateUser(id, userDto);
  }
}
