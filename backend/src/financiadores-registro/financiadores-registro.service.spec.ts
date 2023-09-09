import { Test, TestingModule } from '@nestjs/testing';
import { FinanciadoresRegistroService } from './financiadores-registro.service';

describe('FinanciadoresRegistroService', () => {
  let service: FinanciadoresRegistroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinanciadoresRegistroService],
    }).compile();

    service = module.get<FinanciadoresRegistroService>(FinanciadoresRegistroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
