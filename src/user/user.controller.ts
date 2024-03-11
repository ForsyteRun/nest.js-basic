import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auths.guard';

@Controller('users')
export class UserController {
  @UseGuards(AuthGuard)
  @Get()
  getAllUsers() {
    return { msg: 'all users' };
  }
}
