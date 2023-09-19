import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosRegistrosController } from './proyectos-registros.controller';
import { ProyectosRegistrosService } from './proyectos-registros.service';
import { ProyectosRegistro } from './schema/proyectos-registro.schema';
import { getModelToken } from '@nestjs/mongoose';

describe('ProyectosRegistrosController', () => {
  let controller: ProyectosRegistrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProyectosRegistrosController],
      providers: [ProyectosRegistrosService, { provide:getModelToken(ProyectosRegistro.name), useValue: jest.fn() }],
    }).compile();

    controller = module.get<ProyectosRegistrosController>(ProyectosRegistrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
