import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/roles/roles.schema';

interface IUser {
  name: string;
  age: number;
  role: Role[];
}
@Schema()
export class User implements IUser {
  @ApiProperty({ example: 'Ivam', description: 'user name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 'Ivam', description: 'user name' })
  @Prop({ required: true })
  age: number;

  @ApiProperty({ example: '12345', description: 'user password' })
  @Prop()
  password: string;

  @ApiProperty({ example: 'Admin', description: 'user role' })
  @Prop()
  role: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
