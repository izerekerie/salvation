import { Module } from '@nestjs/common';
import { WarfareService } from './warfare.service';
import { WarfareController } from './warfare.controller';

@Module({
  controllers: [WarfareController],
  providers: [WarfareService],
})
export class WarfareModule {}
