import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { RolesService } from 'src/roles/roles.service';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly rolesRepository: RolesService,
  ) {}

  async createUser(userDto: UserDto): Promise<User> {
    try {
      const newUser = new this.userModel(userDto);
      const role = await this.rolesRepository.getRoleByValue(userDto.role);

      if (role) newUser.role = [role];

      await newUser.save();
      return newUser;
    } catch (error) {
      throw new HttpException(
        'errro create new user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find({});
  }

  async getUserById(id: string) {
    return await this.userModel.findById(id);
  }

  async updateUser(id: string, body: UserDto) {
    return await this.userModel.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });
  }
}
