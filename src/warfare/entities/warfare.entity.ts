import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, IsInt } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class Warfare {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;
  @ApiProperty()
  @IsString()
  description: string;
  @ApiProperty()
  @IsInt()
  userId: number;
  @ApiProperty()
  user: User;
}
