import { Test, TestingModule } from '@nestjs/testing';
import { GestionConvocatoriaService } from './gestion-convocatoria.service';

describe('GestionConvocatoriaService', () => {
  let service: GestionConvocatoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GestionConvocatoriaService],
    }).compile();

    service = module.get<GestionConvocatoriaService>(GestionConvocatoriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
