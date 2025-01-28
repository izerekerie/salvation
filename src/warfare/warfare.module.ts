import { Module } from '@nestjs/common';
import { WarfareService } from './warfare.service';
import { WarfareController } from './warfare.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [WarfareController],
  providers: [WarfareService, PrismaService],
})
export class WarfareModule {}
