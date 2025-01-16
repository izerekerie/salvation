import { Test, TestingModule } from '@nestjs/testing';
import { WarfareService } from './warfare.service';

describe('WarfareService', () => {
  let service: WarfareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarfareService],
    }).compile();

    service = module.get<WarfareService>(WarfareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
