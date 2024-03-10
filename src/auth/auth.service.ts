import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/users.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  @ApiOperation({ description: 'auth' })
  async login(userDto: UserDto) {}

  @ApiOperation({ description: 'registration' })
  async registration(userDto: UserDto) {
    const user = await this.usersService.getUserByName(userDto.name);

    console.log(user);

    if (user.length) {
      throw new HttpException('user exist', HttpStatus.FORBIDDEN);
    }

    const hashAge = await bcrypt.hash(String(userDto.age), 5);

    const newUser = await this.usersService.createUser(userDto);
    return this.genarateToken(newUser);
  }

  async genarateToken(user: User) {
    const payload = { age: user.age, role: user.role };

    const token = this.jwtService.sign(payload);

    return token;
  }
}
