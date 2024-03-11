import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auths.guard';

@Controller('users')
export class UserController {
  @Get()
  @UseGuards(AuthGuard)
  getAllUsers() {
    return { msg: 'all users' };
  }

  @Get(':id')
  getUser() {
    return { msg: 'single user' };
  }
}
