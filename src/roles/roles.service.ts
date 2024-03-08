import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleSchema } from './roles.schema';
import { Model } from 'mongoose';
import { User } from 'src/users/users.schema';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private roleRepository: Model<Role>) {}

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.find({ value }).exec();
    return role;
  }

  // async updateRoles() {
  //   return this.userRole
  //     .aggregate([
  //       {
  //         $lookup: {
  //           from: 'users',
  //           localField: '_id',
  //           foreignField: 'role',
  //           as: 'usersWithRole',
  //         },
  //       },
  //     ])
  //     .exec();
  // }
}
