import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  getAll(@Res() response: Response) {
    return response.send({ name: 'ivan' });
  }
}
