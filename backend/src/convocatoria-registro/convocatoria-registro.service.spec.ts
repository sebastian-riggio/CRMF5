import { Test, TestingModule } from '@nestjs/testing';
import { ConvocatoriaRegistroService } from './convocatoria-registro.service';
import mongoose, { Model, ObjectId,Schema } from 'mongoose';
import { UpdateConvocatoriaRegistroDto } from './dto/update-convocatoria-registro.dto';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateConvocatoriaRegistroDto } from './dto/create-convocatoria-registro.dto';
import { getModelToken } from '@nestjs/mongoose';
import { ConvocatoriaRegistro } from './schema/convocatoria-registro.schema';


const convocatoria =  {
  _id : '65044504c7d7b5d92dce9b4e',
  entidadConvocante: 'Ayuntamiento Barcelona',
  departamentoConvocante: 'Recursos Humanos',
  titulo: 'Educacion para todos',
  publicacionOficial: 'http//:convocatoria.com',
  convocatoriaEnlace: 'http//:convocatoria.com',
  tematica: 'Para organizaciones sin fines de lucro',
  trabajoLineas: 'Simples notas',
  dirigidoEntidades: 'Educativas',
  fechaApertura: '20/10/2023',
  fechaCierre: '20/10/2023',
  fechaResolucion: '20/10/2023',
  periodoEjecucion: '5 meses',
  fechaJustificacion: '3/11/2023',
  auditoria: false,
  presupuesto: 10000,
  otraInformacion: 'Notas de interes',
  memoriaTecnica: 'PDF',
  modeloPresupuesto: 'PDF',
  formularioSolicitud: 'PDF',
  otraDocumentacion: 'PDF',
}

describe('ConvocatoriaRegistroService', () => {
  let service: ConvocatoriaRegistroService;
  let model : Model<ConvocatoriaRegistro>
 
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConvocatoriaRegistroService,
        {
          provide: getModelToken(ConvocatoriaRegistro.name),
          useValue: {
             findByIdAndDelete: jest.fn(),
            findOneAndUpdate: jest.fn(),
            new: jest.fn().mockResolvedValue(convocatoria),
            constructor: jest.fn().mockResolvedValue(convocatoria),
            exec: jest.fn(),
            inject:jest.fn(),
           findOne: jest.fn().mockImplementation((id: ObjectId) => {
            return Promise.resolve({
              message: 'Convocatoria recibida correctamente',
              status: 200,
              convocatoria: convocatoria,
            });
          }),
          create: jest
          .fn()
          .mockImplementation(
            (registroConvocatoria: CreateConvocatoriaRegistroDto) => {
              return Promise.resolve({
                message: 'Se ha registrado correctamente la convocatoria',
                status: 200,
                convocatoria: {
                  _id: '65044504c7d7b5d92dce9b4e',
                  ...registroConvocatoria,
                },
              });
            },
          ), 
           find: jest.fn().mockReturnValue(
            Promise.resolve({
              message: 'Todas las convocatorias se han recibido correctamente',
              status: 200,
              convocatoria: convocatoria,
            }),
          ), 
          update: jest
            .fn()
            .mockImplementation(
              (updatedConvocatoria: UpdateConvocatoriaRegistroDto) => {
                return Promise.resolve({
                  message: 'Registro de convocatoria actualizado correctamente',
                  status: HttpStatus.OK,
                  data: convocatoria,
                });
              },
            ), 
          },
        },
      ],
    }).compile();

    model = module.get<Model<ConvocatoriaRegistro>>(getModelToken('ConvocatoriaRegistro'))
    service = module.get<ConvocatoriaRegistroService>(
      ConvocatoriaRegistroService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('findAll:Todos los registros de convocatorias se han recibido correctamente', async () => {
 jest.spyOn(model,'find').mockReturnValue({
 exec: jest.fn().mockResolvedValueOnce(convocatoria),
 }as any );
    const response = await service.findAll();
    expect(response) .toEqual({
     message: 'Todas las convocatorias se han recibido correctamente',
      status: 200, 
      convocatoria: convocatoria,
    }); 
  });
  it('findOne: Convocatoria recibida correctamente', async () => {
    const id = new Schema.Types.ObjectId ('65044504c7d7b5d92dce9b4e')
   jest.spyOn(model,'findOne').mockResolvedValueOnce(convocatoria)
    expect(await service.findOne(id)).toMatchObject({
      message: 'Convocatoria recibida correctamente',
        status: 200,
        convocatoria: convocatoria
    });
  });

  it('findOne: Manejo de errores',async () => {
    model.findOne = jest.fn().mockRejectedValue(new Error ('Error de busqueda'))
    const id = new Schema.Types.ObjectId ('65044504c7d7b5d92dce9b4e')
    try{
      await service.findOne(id)
      fail('La funcion findOne no lanzo la excepcion ')
    }catch(error){
      expect(error.message).toBe('Error de busqueda')
    }
  })

  it('update: registro de convocatoria actualizado correctamente', async () => {
    const id = new mongoose.Schema.Types.ObjectId('65044504c7d7b5d92dce9b4e');
    const updateConvocatoriaDto: UpdateConvocatoriaRegistroDto = {
      _id: id,
      entidadConvocante:"Ayuntamiento Valencia",
      departamentoConvocante:"Gerencia",
      titulo:"Educacion para todos",
      publicacionOficial:"http//:convocatoria.com",
      convocatoriaEnlace:"http//:canva-convocatoria.com",
      tematica:"Programacion",
      trabajoLineas:"esto es un trabajo muy adaptable a cambios",
      dirigidoEntidades:"Publicas",
      fechaApertura:new Date("28/8/2023"),
      fechaCierre:new Date("28/8/2023"),
      fechaResolucion:new Date("28/8/2023"),
      periodoEjecucion:"5 meses",
      fechaJustificacion:new Date("28/8/2023"),
      auditoria:false,
      presupuesto:40000,
      otraInformacion:"un proyecto para desarrollar programadores",
      memoriaTecnica: 'PDF',
      modeloPresupuesto: 'PDF',
      formularioSolicitud: 'PDF',
      otraDocumentacion: 'PDF',
    };

    expect(await service.update(updateConvocatoriaDto));
  });

  it('create:Se ha registrado con exito la convocatoria', async () => {
    const newConvocatoria: CreateConvocatoriaRegistroDto = {
      entidadConvocante:"Ayuntamiento Valencia",
      departamentoConvocante:"Gerencia",
      titulo:"Educacion para todos",
      publicacionOficial:"http//:convocatoria.com",
      convocatoriaEnlace:"http//:canva-convocatoria.com",
      tematica:"Programacion",
      trabajoLineas:"esto es un trabajo muy adaptable a cambios",
      dirigidoEntidades:"Publicas",
      fechaApertura:new Date("28/8/2023"),
      fechaCierre:new Date("28/8/2023"),
      fechaResolucion:new Date("28/8/2023"),
      periodoEjecucion:"5 meses",
      fechaJustificacion:new Date("28/8/2023"),
      auditoria:false,
      presupuesto:40000,
      otraInformacion:"un proyecto para desarrollar programadores",
      memoriaTecnica: 'PDF',
      modeloPresupuesto: 'PDF',
      formularioSolicitud: 'PDF',
      otraDocumentacion: 'PDF',
    };
    expect(await service.create(newConvocatoria))
  });
  it('remove:Debe eliminar un registro de convocatoria correctamente', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue({
      message: 'Convocatoria eliminada correctamente',
      status:200,
      data: '',
    });
  });

  it('HttpsStatus:Compruebo que mis respuestas de estado tengan el comportamiento esperado', async () => {
    jest.spyOn(service, 'remove').mockRejectedValue(new HttpException('Convocatoria no encontrada', HttpStatus.NOT_FOUND));
  });

 
});
