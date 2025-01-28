import { Injectable } from '@nestjs/common';
import { CreateWarfareDto } from './dto/create-warfare.dto';
import { UpdateWarfareDto } from './dto/update-warfare.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WarfareService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createWarfareDto: CreateWarfareDto) {
    return await this.prisma.walfare.create({
      data: {
        title: createWarfareDto.title,
        description: createWarfareDto.description,
        user: {
          connect: { id: createWarfareDto.userId },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.walfare.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.walfare.findFirst({
      where: {
        id,
      },
    });
  }

  async findManyByUser(userId: number) {
    return await this.prisma.walfare.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async update(id: string, updateWarfareDto: UpdateWarfareDto) {
    return await this.prisma.walfare.update({
      where: { id },
      data: {
        description: updateWarfareDto.description,
        title: updateWarfareDto.title,
      },
    });
  }

  async delete(id: string) {
    await this.prisma.walfare.delete({ where: { id } });
  }
}
