import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

interface IUser {
  name: string;
  age: number;
  role: string;
}
@Schema()
export class User implements IUser {
  @ApiProperty({ example: 'Ivam', description: 'user name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 'Ivam', description: 'user name' })
  @Prop({ required: true })
  age: number;

  @ApiProperty({ example: 'Admin', description: 'user role' })
  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
