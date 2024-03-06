import { Controller, Get, Res, Param, Body, Put } from '@nestjs/common';
import { Response } from 'express';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  @Get(':id')
  async getAll(@Body() userDto: UserDto) {
    return userDto;
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() userDto: UserDto) {
    return `This action updates a #${id} cat`;
  }
}
