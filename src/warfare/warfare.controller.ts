import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WarfareService } from './warfare.service';
import { CreateWarfareDto } from './dto/create-warfare.dto';
import { UpdateWarfareDto } from './dto/update-warfare.dto';

@Controller('warfare')
export class WarfareController {
  constructor(private readonly warfareService: WarfareService) {}

  @Post()
  create(@Body() createWarfareDto: CreateWarfareDto) {
    return this.warfareService.create(createWarfareDto);
  }

  @Get()
  findAll() {
    return this.warfareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.warfareService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWarfareDto: UpdateWarfareDto) {
    return this.warfareService.update(+id, updateWarfareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.warfareService.remove(+id);
  }
}
