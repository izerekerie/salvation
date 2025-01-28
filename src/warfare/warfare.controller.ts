import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { WarfareService } from './warfare.service';
import { CreateWarfareDto } from './dto/create-warfare.dto';
import { UpdateWarfareDto } from './dto/update-warfare.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('warfare')
export class WarfareController {
  constructor(private readonly warfareService: WarfareService) {}
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  @ApiBearerAuth()
  async create(@Body() createWarfareDto: CreateWarfareDto) {
    return await this.warfareService.create(createWarfareDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.warfareService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findOne(@Param('id') id: string) {
    return await this.warfareService.findOne(id);
  }
  @Get(':userId')
  @Roles('CUSTOMER', 'ADMIN')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RoleGuard)
  async findMany(@Param('userId') userId: number) {
    await this.warfareService.findManyByUser(+userId);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWarfareDto: UpdateWarfareDto,
  ) {
    return await this.warfareService.update(id, updateWarfareDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.warfareService.delete(id);
  }
}
