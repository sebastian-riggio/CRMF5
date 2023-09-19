import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosRegistrosService } from './proyectos-registros.service';
import { getModelToken } from '@nestjs/mongoose';
import { ProyectosRegistro } from './schema/proyectos-registro.schema';
import mongoose, { ObjectId, Schema } from 'mongoose';
import { HttpException, HttpStatus } from '@nestjs/common';
import { UpdateProyectosRegistroDto } from './dto/update-proyectos-registro.dto';
import { CreateProyectosRegistroDto } from './dto/create-proyectos-registro.dto';

const proyecto = {
  _id:"65044504c7d7b5d92dce9b4e",
  'proyecto-nombre': 'P8 Mixta',
  'centro-gestor': 'Factoria F5 - Dirección general ',
  'responsable': 'Jesús Rivera',
  'proyecto-duracion':'6 meses',
  'proyecto-presupuesto': 23000,
  'factoria-presupuesto': 15000
}

describe('ProyectosRegistrosService', () => {
  let service: ProyectosRegistrosService;

  const mockProyectoRegistro = {
    findOne: jest.fn().mockImplementation((id: ObjectId) => {
      return Promise.resolve({
        message: 'Proyecto recibido correctamente',
        status: 200,
        proyecto: proyecto,
      });
    }),
    findAll: jest.fn().mockReturnValue(
      Promise.resolve({
        message: 'Todos las proyectos se han recibido correctamente',
        status: 200,
        proyecto: proyecto,
      }),
    ),
    update: jest
      .fn()
      .mockImplementation(
        (updatedProyecto: UpdateProyectosRegistroDto) => {
          return Promise.resolve({
            message: 'Proyecto actualizado correctamente',
            status: HttpStatus.OK,
            data: proyecto,
          });
        },
      ),
/*     create: jest
      .fn()
      .mockImplementation(
        (registroProyecto: CreateProyectosRegistroDto) => {
          return Promise.resolve({
            message: '',
            status: 200,
            convocatoria: {
              _id: '65044504c7d7b5d92dce9b4e',
              ...registroProyecto,
            },
          });
        },
      ), */
  };






  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectosRegistrosService,
        { provide:getModelToken(ProyectosRegistro.name),
          useValue:{
            mockProyectoRegistro,
            find: jest.fn(),
            findOne: jest.fn(),
            findByIdAndDelete: jest.fn(),
            findOneAndUpdate: jest.fn(),
            new: jest.fn(),
            constructor: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
            inject:jest.fn()
          },}
        ],
    }).compile();

    service = module.get<ProyectosRegistrosService>(
      ProyectosRegistrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it ('findALl:Todos las proyectos se han recibido correctamente', async () => {
    const register = await service.findAll();
    expect(register).toBeDefined();
  });

  it ('findOne: Proyecto recibido correctamente', async () => {
    const id = new Schema.Types.ObjectId('65044504c7d7b5d92dce9b4e');
    expect(await service.findOne(id))
  });

  it('update: Proyecto actualizado correctamente', async () => {
    const id = new mongoose.Schema.Types.ObjectId('65044504c7d7b5d92dce9b4e');
    const updateProyectoDto: UpdateProyectosRegistroDto = {
      _id: id, 
  "proyecto-nombre": "P8 Mixta",
  "centro-gestor": "Factoria F5 - Dirección general",
  "responsable": "Jesús Rivera",
  "proyecto-duracion": "6 meses",
  "proyecto-presupuesto": 23000,
  "factoria-presupuesto": 15000
      
    };

    expect(await service.update(updateProyectoDto));
  });

  it('remove:Debe eliminar un proyecto correctamente', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue({
      message: 'Proyecto eliminado correctamente',
      status: HttpStatus.OK,
      data: '',
    });
  });

  it('HttpsStatus:Compruebo que mis respuestas de estado tengan el comportamiento esperado', async () => {
    jest.spyOn(service, 'remove').mockRejectedValue(new HttpException('Convocatoria no encontrada', HttpStatus.NOT_FOUND));
  });


})
