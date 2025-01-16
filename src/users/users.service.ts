import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async findOne(email: string, pass: string) {
    if (email && pass) {
      return await this.prisma.user.findUnique({
        where: { email },
      });
    }
    return new UnauthorizedException('Invalid credentials');
  }
  async findAllUsers() {
    return await this.prisma.user.findMany();
  }
  async createUser(user: Partial<CreateUserDto>) {
    if (user.password !== user.confirmPassword) {
      throw new BadRequestException('Passwords doe not match');
    }
    const hashedPass = await bcrypt.hash(user.password, 10);
    return this.prisma.user.create({
      data: {
        username: user.username,
        email: user.email,
        password: hashedPass,
      },
    });
  }
}
