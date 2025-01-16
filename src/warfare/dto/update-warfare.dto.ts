import { PartialType } from '@nestjs/swagger';
import { CreateWarfareDto } from './create-warfare.dto';

export class UpdateWarfareDto extends PartialType(CreateWarfareDto) {}
