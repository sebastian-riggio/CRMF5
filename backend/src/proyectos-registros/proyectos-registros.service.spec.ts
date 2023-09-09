import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosRegistrosService } from './proyectos-registros.service';

describe('ProyectosRegistrosService', () => {
  let service: ProyectosRegistrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectosRegistrosService],
    }).compile();

    service = module.get<ProyectosRegistrosService>(ProyectosRegistrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
