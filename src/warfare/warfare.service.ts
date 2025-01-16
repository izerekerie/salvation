import { Injectable } from '@nestjs/common';
import { CreateWarfareDto } from './dto/create-warfare.dto';
import { UpdateWarfareDto } from './dto/update-warfare.dto';

@Injectable()
export class WarfareService {
  create(createWarfareDto: CreateWarfareDto) {
    return 'This action adds a new warfare';
  }

  findAll() {
    return `This action returns all warfare`;
  }

  findOne(id: number) {
    return `This action returns a #${id} warfare`;
  }

  update(id: number, updateWarfareDto: UpdateWarfareDto) {
    return `This action updates a #${id} warfare`;
  }

  remove(id: number) {
    return `This action removes a #${id} warfare`;
  }
}
