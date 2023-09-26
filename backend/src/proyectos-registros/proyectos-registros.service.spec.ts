import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosRegistrosService } from './proyectos-registros.service';
import { getModelToken } from '@nestjs/mongoose';
import { ProyectosRegistro } from './schema/proyectos-registro.schema';
import mongoose, { Model, ObjectId, Schema } from 'mongoose';
import { HttpException, HttpStatus } from '@nestjs/common';
import { UpdateProyectosRegistroDto } from './dto/update-proyectos-registro.dto';
import { CreateProyectosRegistroDto } from './dto/create-proyectos-registro.dto';

const proyecto = {
  _id:"65044504c7d7b5d92dce9b4e",
  proyectoNombre: 'P8 Mixta',
  centroGestor: "Factoria F5 - Admin, contabilidad y finanzas",
  responsable: "Jesus Rivera",
  proyectoDuracion:"6 meses",
  proyectoPresupuesto:23000,
  factoriaPresupuesto:15000,
  fechaInicio:new Date("28/8/2023"),
  fechaCierre:new Date("28/8/2023")
}

describe('ProyectosRegistrosService', () => {
  let service: ProyectosRegistrosService;
  let model : Model<ProyectosRegistro>

  findAll:jest.fn().mockReturnValue(Promise.resolve({
    message: 'Todos los proyectos se han recibido correctamente',
    status:200,
    proyectos:proyecto
  })),




  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectosRegistrosService,
        { provide:getModelToken(ProyectosRegistro.name),
          useValue:{
            find: jest.fn().mockReturnValue(
              Promise.resolve({
                message: 'Todos las proyectos se han recibido correctamente',
                status: 200,
                proyectos: proyecto,
              }),
            ),
            create: jest
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
    findOne: jest.fn().mockImplementation((id: ObjectId) => {
      return Promise.resolve({
        message: 'Proyecto recibido correctamente',
        status: 200,
        proyecto:proyecto,
      });
    }),
            findByIdAndDelete: jest.fn(),
            findOneAndUpdate: jest.fn(),
            new: jest.fn(),
            constructor: jest.fn(),
            exec: jest.fn(),
            countDocuments:jest.fn(),
            inject:jest.fn()
          },}
        ],
    }).compile();

    service = module.get<ProyectosRegistrosService>(
      ProyectosRegistrosService);
      model = module.get<Model<ProyectosRegistro>>(getModelToken('ProyectosRegistro'))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('findAll:Devuelve una lista de proyectos', async () => {
  jest.spyOn(model,'find').mockReturnValue({
    exec:jest.fn().mockResolvedValueOnce(proyecto)
  }as any)
  const response = await service.findAll()
  expect(response).toEqual({
    message: 'Todos las proyectos se han recibido correctamente',
    status: 200,
    proyectos: proyecto,
  })
  });


  it ('findOne: Proyecto recibido correctamente', async () => {
    const id = new Schema.Types.ObjectId('65044504c7d7b5d92dce9b4e');
    jest.spyOn(model,'findOne').mockResolvedValueOnce(proyecto)
    expect(await service.findOne(id)).toMatchObject({
      message: 'Proyecto recibido correctamente',
      status: 200,
      proyecto:proyecto,
    })
  });

  it('findOne:Manejo de errores', async () => {
    model.findOne = jest.fn().mockResolvedValue(new Error('Error de busqueda de proyecto'))
    const id = new Schema.Types.ObjectId('65044504c7d7b5d92dce9b4e')
    try {
    await service.findOne(id)
    }catch(error){
      expect(error.message).toBe('Error de busqueda de proyecto')
    }
  })


  it('update: Proyecto actualizado correctamente', async () => {
    const id = new mongoose.Schema.Types.ObjectId('65044504c7d7b5d92dce9b4e');
    const updateProyectoDto: UpdateProyectosRegistroDto = {
      _id: id, 
      proyectoNombre: 'P8 Mixta',
      centroGestor: "Factoria F5 - Admin, contabilidad y finanzas",
      responsable: "Jesus Rivera",
      proyectoDuracion:"6 meses",
      proyectoPresupuesto:23000,
      factoriaPresupuesto:15000,
      fechaInicio:new Date("28/8/2023"),
      fechaCierre:new Date("28/8/2023")
      
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

  it('create:Proyecto registrado correctamente',async () => {
    const newProject : CreateProyectosRegistroDto = {
      proyectoNombre: 'P8 Mixta',
      centroGestor: "Factoria F5 - Admin, contabilidad y finanzas",
      responsable: "Jesus Rivera",
      proyectoDuracion:"6 meses",
      proyectoPresupuesto:23000,
      factoriaPresupuesto:15000,
      fechaInicio:new Date("28/8/2023"),
      fechaCierre:new Date("28/8/2023")
    };
    expect(await service.create(newProject))
  })

})
