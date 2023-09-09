import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosRegistrosController } from './proyectos-registros.controller';
import { ProyectosRegistrosService } from './proyectos-registros.service';

describe('ProyectosRegistrosController', () => {
  let controller: ProyectosRegistrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProyectosRegistrosController],
      providers: [ProyectosRegistrosService],
    }).compile();

    controller = module.get<ProyectosRegistrosController>(ProyectosRegistrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
