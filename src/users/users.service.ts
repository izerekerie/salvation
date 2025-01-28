import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { use } from 'passport';
import { UpdateUserDto } from './dto/update-user.dto';
import { isEmpty } from 'class-validator';
import { error } from 'console';
import { Role } from '@prisma/client';

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
      throw new BadRequestException('Passwords does not match');
    }
    const hashedPass = await bcrypt.hash(user.password, 10);
    return this.prisma.user.create({
      data: {
        username: user.username,
        email: user.email,
        password: hashedPass,
        roles: user.roles,
      },
    });
  }
  async updateUser(id: number, updatedUser: Partial<UpdateUserDto>) {
    return this.prisma.user.update({
      where: { id },
      data: updatedUser,
    });
  }
  async addRoleTousers() {
    try {
      const updatedUsers = await this.prisma.user.updateMany({
        where: {
          OR: [
            { roles: { equals: [] } }, // empty array
            { roles: { equals: null } }, // null roles
          ],
        },
        data: {
          roles: { set: [Role.CUSTOMER] },
        },
      });

      return updatedUsers;
    } catch (err) {
      throw error;
    }
  }
}
