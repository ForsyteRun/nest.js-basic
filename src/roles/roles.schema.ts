import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

interface UserRole {
  role: 'admin' | 'user';
  description: string;
}

export class Role implements UserRole {
  @ApiProperty({ example: 'admin', description: 'administrator role' })
  @Prop({ required: true })
  role: 'admin' | 'user';

  @ApiProperty({
    example: 'for administrator only',
    description: 'Description of the admin role',
  })
  @Prop({ required: true })
  description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
