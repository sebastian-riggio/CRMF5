import { Test, TestingModule } from '@nestjs/testing';
import { GestionConvocatoriaController } from './gestion-convocatoria.controller';
import { GestionConvocatoriaService } from './gestion-convocatoria.service';

describe('GestionConvocatoriaController', () => {
  let controller: GestionConvocatoriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestionConvocatoriaController],
      providers: [GestionConvocatoriaService],
    }).compile();

    controller = module.get<GestionConvocatoriaController>(GestionConvocatoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
