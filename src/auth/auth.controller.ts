import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserDto } from 'src/users/dto/user.dto';
import { AuthService } from './auth.service';

@ApiTags('authorisation')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ description: 'auth' })
  @Post('login')
  login(@Body() userDto: UserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({ description: 'registration' })
  @Post('registration')
  register(@Body() userDto: UserDto) {
    return this.authService.registration(userDto);
  }
}
