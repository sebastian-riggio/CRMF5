import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosRegistrosService } from './proyectos-registros.service';
import { getModelToken } from '@nestjs/mongoose';
import { ProyectosRegistro } from './schema/proyectos-registro.schema';

describe('ProyectosRegistrosService', () => {
  let service: ProyectosRegistrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectosRegistrosService,
        { provide:getModelToken(ProyectosRegistro.name),useValue: jest.fn()}]
    }).compile();

    service = module.get<ProyectosRegistrosService>(ProyectosRegistrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

})
