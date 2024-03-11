import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/roles/roles.schema';

export class UserDto {
  @ApiProperty({ example: 'Ivam', description: 'user name' })
  name: string;

  @ApiProperty({ example: 100, description: 'age count' })
  age: number;

  @ApiProperty({ example: 1234, description: 'password' })
  password: string;

  @ApiProperty({ example: 'Admin', description: 'user role' })
  role: Role[];
}
