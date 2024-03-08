import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

interface IUser {
  name: string;
  age: number;
}
@Schema()
export class User implements IUser {
  @ApiProperty({ example: 'Ivam', description: 'user name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 'Ivam', description: 'user name' })
  @Prop({ required: true })
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
