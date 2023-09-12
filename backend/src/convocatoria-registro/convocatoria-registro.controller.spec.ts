import { Test, TestingModule } from '@nestjs/testing';
import { ConvocatoriaRegistroController } from './convocatoria-registro.controller';
import { ConvocatoriaRegistroService } from './convocatoria-registro.service';

describe('ConvocatoriaRegistroController', () => {
  let controller: ConvocatoriaRegistroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvocatoriaRegistroController],
      providers: [ConvocatoriaRegistroService],
    }).compile();

    controller = module.get<ConvocatoriaRegistroController>(ConvocatoriaRegistroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
