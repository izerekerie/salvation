import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class User {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  @IsEmail({}, { message: 'Invalid Email' })
  email?: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  @MinLength(6, { message: 'Password must be atlest 6 character long' })
  password: string;
  @ApiProperty()
  @MinLength(6, { message: 'Confirm Passowrd must be atlest 6 character long' })
  confirmPassword: string;
  @ApiProperty({ isArray: true, enum: Role })
  roles: Role[];
}
