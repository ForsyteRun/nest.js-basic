import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleSchema } from './roles.schema';
import { Model } from 'mongoose';
import { CreateRoleDto } from './dto/create-role.dto';
import { HttpStatus } from '@nestjs/common/enums';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Roles')
@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private roleRepository: Model<Role>) {}

  @ApiOperation({
    summary: 'new role',
    description: 'allow to create new role if it do no exist',
  })
  async createRole(dto: CreateRoleDto): Promise<Role> {
    const isRoleExist = await this.roleRepository.exists({ value: dto.value });

    if (isRoleExist) {
      throw new HttpException('Role exist', HttpStatus.EXPECTATION_FAILED);
    }

    const role = await this.roleRepository.create(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ value }).exec();
    return role;
  }

  async getAllRoles(): Promise<Role[]> {
    return this.roleRepository.find({});
  }
}
