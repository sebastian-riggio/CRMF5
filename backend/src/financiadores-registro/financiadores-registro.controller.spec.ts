import { Test, TestingModule } from '@nestjs/testing';
import { FinanciadoresRegistroController } from './financiadores-registro.controller';
import { FinanciadoresRegistroService } from './financiadores-registro.service';

describe('FinanciadoresRegistroController', () => {
  let controller: FinanciadoresRegistroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinanciadoresRegistroController],
      providers: [FinanciadoresRegistroService],
    }).compile();

    controller = module.get<FinanciadoresRegistroController>(FinanciadoresRegistroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
