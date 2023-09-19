import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosRegistrosService } from './proyectos-registros.service';
import { ProyectosRegistro } from './schema/proyectos-registro.schema';
import { getModelToken } from '@nestjs/mongoose';


const proyecto = {
  _id:'65044504c7d7b5d92dce9b4e',
  'proyecto-nombre': 'P8 Mixta',
  'centro-gestor': 'Factoria F5 - Dirección general ',
  'responsable': 'Jesús Rivera',
  'proyecto-duracion':'6 meses',
  'proyecto-presupuesto': 23000,
  'factoria-presupuesto': 15000
}

describe('ProyectosRegistrosService', () => {
  let service: ProyectosRegistrosService;

  findAll:jest.fn().mockReturnValue(Promise.resolve({
    message: 'Todos los proyectos se han recibido correctamente',
    status:200,
    proyectos:proyecto
  })),




  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectosRegistrosService, { provide:getModelToken(ProyectosRegistro.name), useValue: jest.fn() }],
    }).compile();

    service = module.get<ProyectosRegistrosService>(ProyectosRegistrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll: Todos los proyectos se han recibido correctamente',async () =>{
    expect(await service.findAll())
      
    })
  });
