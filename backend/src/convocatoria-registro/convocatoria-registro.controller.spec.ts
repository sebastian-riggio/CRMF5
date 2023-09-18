import { Test, TestingModule } from '@nestjs/testing';
import { ConvocatoriaRegistroController } from './convocatoria-registro.controller';
import { ConvocatoriaRegistroService } from './convocatoria-registro.service';
import mongoose, { ObjectId, Schema, Types } from 'mongoose';
import { HttpStatus } from '@nestjs/common';
import { UpdateConvocatoriaRegistroDto } from './dto/update-convocatoria-registro.dto';
import { AdjuntarDto } from './dto/adjuntarDto';
import { CreateConvocatoriaRegistroDto } from './dto/create-convocatoria-registro.dto';



const convocatoria = {
_id:"65044504c7d7b5d92dce9b4e",
entidad_convocante: "Ayuntamiento Barcelona",
departamento_convocante: "Recursos Humanos",
titulo: "Educacion para todos",
publicacion_oficial:"http//:convocatoria.com",
convocatoria_enlace: "http//:convocatoria.com",
tematica: "Para organizaciones sin fines de lucro",
trabajo_lineas: "Simples notas",
dirigido_entidades:"Educativas",
fecha_apertura:"20/10/2023",
fecha_cierre:"20/10/2023",
fecha_resolucion:"20/10/2023",
periodo_ejecucion:"5 meses",
fecha_justificacion:"3/11/2023",
auditoria:false,
presupuesto:10000,
otra_informacion:"Notas de interes",

documentacion:{
memoria_tecnica:"PDF",
presupuesto:"PDF",
formulario_solicitud:"PDF",
otra_documentacion:"PDF"
}
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
    'entidad-convocante': 'Ayuntamiento',
    'departamento-convocante': 'Recursos Humanos',
    titulo: "Educación para todos",
    'publicacion-oficial': 'http://public/ayuntamiento.com',
    'convocatoria-enlace': 'http://public/ayuntamiento.com',
    tematica: 'educación para todos',
    'trabajo-lineas': 'notas simples',
    'dirigido-entidades': 'educativas sin fines de lucro',
    'fecha-apertura': '20/10/2023',
    'fecha-cierre': '20/10/2023',
    'fecha-resolucion': '20/10/2023',
    'periodo-ejecucion': '5 meses',
    'fecha-justificacion': '20/10/2023',
    auditoria: false,
    presupuesto: 0,
    'otra-informacion': 'otras notas',
    documentacion: new AdjuntarDto(),
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
  
    'entidad-convocante': 'Ayuntamiento',
    'departamento-convocante': 'Recursos Humanos',
    titulo: "Educación para todos",
    'publicacion-oficial': 'http://public/ayuntamiento.com',
    'convocatoria-enlace': 'http://public/ayuntamiento.com',
    tematica: 'educación para todos',
    'trabajo-lineas': 'notas simples',
    'dirigido-entidades': 'educativas sin fines de lucro',
    'fecha-apertura': '20/10/2023',
    'fecha-cierre': '20/10/2023',
    'fecha-resolucion': '20/10/2023',
    'periodo-ejecucion': '5 meses',
    'fecha-justificacion': '20/10/2023',
    auditoria: false,
    presupuesto: 0,
    'otra-informacion': 'otras notas',
    documentacion: new AdjuntarDto(),
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
