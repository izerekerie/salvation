import { Test, TestingModule } from '@nestjs/testing';
import { WarfareController } from './warfare.controller';
import { WarfareService } from './warfare.service';

describe('WarfareController', () => {
  let controller: WarfareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarfareController],
      providers: [WarfareService],
    }).compile();

    controller = module.get<WarfareController>(WarfareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
