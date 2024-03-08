import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(userDto: UserDto): Promise<User> {
    const newUser = new this.userModel(userDto);
    await newUser.save();
    return newUser;
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
