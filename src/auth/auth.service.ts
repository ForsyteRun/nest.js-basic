import {
  Injectable,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
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
  async login(userDto: UserDto) {
    const user = await this.validateUser(userDto);
    return this.genarateToken(user[0]);
  }

  @ApiOperation({ description: 'registration' })
  async registration(userDto: UserDto) {
    const user = await this.usersService.getUserByName(userDto.name);

    if (user.length) {
      throw new HttpException('user exist', HttpStatus.FORBIDDEN);
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);

    const newUser = await this.usersService.createUser({
      ...userDto,
      password: hashPassword,
    });
    return this.genarateToken(newUser);
  }

  private async genarateToken(user: User) {
    const payload = { age: user.age, role: user.role, password: user.password };

    const token = await this.jwtService.signAsync(payload);

    return { token };
  }

  private async validateUser(data: UserDto) {
    const user = await this.usersService.getUserByName(data.name);
    const isEqualPassword = await bcrypt.compare(
      data.password,
      user[0].password,
    );

    if (user && isEqualPassword) {
      return user;
    }

    throw new UnauthorizedException('wrong login or password');
  }
}
