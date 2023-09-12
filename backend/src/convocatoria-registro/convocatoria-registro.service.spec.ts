import { Test, TestingModule } from '@nestjs/testing';
import { ConvocatoriaRegistroService } from './convocatoria-registro.service';

describe('ConvocatoriaRegistroService', () => {
  let service: ConvocatoriaRegistroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvocatoriaRegistroService],
    }).compile();

    service = module.get<ConvocatoriaRegistroService>(ConvocatoriaRegistroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
