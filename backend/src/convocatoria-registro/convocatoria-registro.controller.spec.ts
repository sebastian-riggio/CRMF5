import { Test, TestingModule } from '@nestjs/testing';
import { ConvocatoriaRegistroController } from './convocatoria-registro.controller';
import { ConvocatoriaRegistroService } from './convocatoria-registro.service';
import mongoose, { ObjectId, Schema, Types } from 'mongoose';
import { HttpStatus } from '@nestjs/common';
import { UpdateConvocatoriaRegistroDto } from './dto/update-convocatoria-registro.dto';
import { CreateConvocatoriaRegistroDto } from './dto/create-convocatoria-registro.dto';



const convocatoria = {
_id:"65044504c7d7b5d92dce9b4e",
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
presupuesto:40000,
otraInformacion:"un proyecto para desarrollar programadores",
memoriaTecnica:"PDF",
modeloPresupuesto:"PDF",
formularioSolicitud: "PDF",
otraDocumentacion:"PDF"
}
describe('ConvocatoriaRegistroController', () => {
  let controller: ConvocatoriaRegistroController;
const mockConvocatoriaService = {
  findAll: 
  jest.fn().mockImplementation(()=>{
    return Promise.resolve({
      message:'Todas las convocatorias se han recibido correctamente',
      status:200,
      data:convocatoria

    })
  }),

  findOne: jest.fn().mockImplementation((id: ObjectId) => {
    return Promise.resolve({
      message: 'Convocatoria recibida correctamente',
      status: HttpStatus.OK,
      data:convocatoria
    });
  }),

  
  update: jest.fn().mockImplementation((updatedConvocatoria:UpdateConvocatoriaRegistroDto) => {
    return Promise.resolve({
      message: 'Registro de convocatoria actualizado correctamente',
      status: HttpStatus.OK,
      data:convocatoria
    });
  }),

remove: jest.fn().mockResolvedValue({
    message:'Convocatoria eliminada correctamente',
    status:HttpStatus.OK,
    data:''
}),

create:jest.fn().mockImplementation((registroConvocatoria:CreateConvocatoriaRegistroDto) => {
  return Promise.resolve({
    message: 'Se ha registrado correctamente la convocatoria',
    status:200,
    convocatoria: {
      _id:"65044504c7d7b5d92dce9b4e",
      ...registroConvocatoria,
    }
 
  
  })
})

}


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvocatoriaRegistroController],
      providers: [ConvocatoriaRegistroService],
    })
    .overrideProvider(ConvocatoriaRegistroService)
    .useValue(mockConvocatoriaService)
    .compile();

    controller = module.get<ConvocatoriaRegistroController>(ConvocatoriaRegistroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

it(' findAll:Todas las convocatorias se han recibido correctamente',async () => {
  expect((await controller.findAll()))
});

it('findOne:Se ha recibido la convocatoria correctamente',async () => {
  const id = new Schema.Types.ObjectId('65044504c7d7b5d92dce9b4e')
  expect((await controller.findOne(id)))
});

it('update: Actualizar un registro de convocatoria', async () => {
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
memoriaTecnica:"PDF",
modeloPresupuesto:"PDF",
formularioSolicitud: "PDF",
otraDocumentacion:"PDF"
  
  };

  expect(await controller.update(updateConvocatoriaDto)).toMatchObject({
    message: 'Registro de convocatoria actualizado correctamente',
    status: HttpStatus.OK,
    data: convocatoria
  });
});
it('remove: Eliminar un registro de convocatoria', async () => {
  expect(await controller.remove(expect.any(Types.ObjectId))).toMatchObject({
    message: 'Convocatoria eliminada correctamente',
    status:HttpStatus.OK,
    data:''
  });

});  

it('create:Se ha registrado con exito la convocatoria',async () => {
 const newConvocatoria : CreateConvocatoriaRegistroDto = {
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
  fechaResolucion: new Date("28/8/2023"),
  periodoEjecucion:"5 meses",
  fechaJustificacion:new Date("28/8/2023"),
  auditoria:false,
  presupuesto:40000,
  otraInformacion:"un proyecto para desarrollar programadores",
  memoriaTecnica:"PDF",
  modeloPresupuesto:"PDF",
  formularioSolicitud: "PDF",
  otraDocumentacion:"PDF"
  };
  expect(await controller.create(newConvocatoria)).toMatchObject({
    message: 'Se ha registrado correctamente la convocatoria',
    status:200,
    convocatoria:{
      _id:expect.any(String)
    }
  })
})

});
