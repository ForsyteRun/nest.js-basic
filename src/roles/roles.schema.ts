import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

interface UserRole {
  value: 'admin' | 'user' | 'boss';
  description: string;
}

@Schema()
export class Role implements UserRole {
  @ApiProperty({ example: '1', description: 'role' })
  @Prop()
  roleId: number;

  @ApiProperty({ example: 'admin', description: 'administrator role' })
  @Prop({ required: true })
  value: 'admin' | 'user';

  @ApiProperty({
    example: 'for administrator only',
    description: 'Description of the admin role',
  })
  @Prop({ required: true })
  description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
