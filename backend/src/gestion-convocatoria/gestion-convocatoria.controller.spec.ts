import { Test, TestingModule } from '@nestjs/testing';
import { GestionConvocatoriaController } from './gestion-convocatoria.controller';
import { GestionConvocatoriaService } from './gestion-convocatoria.service';
import mongoose, { ObjectId, Schema, Types } from 'mongoose';
import { UpdateGestionConvocatoriaDto } from './dto/update-gestion-convocatoria.dto';
import { CreateGestionConvocatoriaDto } from './dto/create-gestion-convocatoria.dto';
import { EtapaSolicitudDto } from './dto/etapa-solicitud.dto';
import { EtapaResolucionDto } from './dto/etapa-resolucion.dto';
import { EtapaOtorgamientoDto } from './dto/etapa-otorgamiento.dto';
import { EtapaJustificacionDto } from './dto/etapa-justificacion.dto';
import { EtapaCierreDto } from './dto/etapa-cierre.dto';



const createConvocatoria = {
  
    "convocatoria": "financiacion patra cursos educativos online",
    "financiador": "Ayuntamiento Barcelona",
    "proyecto": "monetize wireless supply-chains",
    "etapa-solicitud": "Etapa Solicitud",
    "etapa-resolucion": "Etapa Resolucion",
    "etapa-otorgamiento": "Etapa Otorgamiento",
    "etapa-justificacion": "Etapa Justificaciòn",
    "etapa-cierre": "Etapa Cierre"
  
}

const gestionConvocatoria = {
  "message": "Todas las gestiones de convocatorias se han recibido correctamente",
  "status": 200,
  "gestiones": [
    {
      "_id": "6508a6c4a8a7690ab7ccd8a7",
      "convocatoria": "financiacion patra cursos educativos online",
      "financiador": "Ayuntamiento Barcelona",
      "proyecto": "monetize wireless supply-chains",
      "codigo-interno": "R000001-20230918",
      "etapa-solicitud": {
        "responsable": "Jesus Rivera",
        "fecha-propuesta": "23/9/2023",
        "numero-tramite": 123456,
        "numero-expediente": "fr2345",
        "recibo-oficial": "PDF"
      },
      "etapa-resolucion": {
        "fecha-resolucion": "20/9/2023",
        "fecha-limite-entrega": "24/9/2023",
        "fecha-real-entrega": "28/9/2023",
        "fecha-limite-responder": "31/9/2023",
        "fecha-real-respuesta": "4/10/2023",
        "notas": "Notas del proceso",
        "adjuntar-resolucion": "PDF"
      },
      "etapa-otorgamiento": {
        "fecha-resolucion-final": "",
        "estado-solicitud": "aprobada",
        "monto-concedido": 23000,
        "fecha-primer-desembolso": "23/9/2023",
        "fecha-recepcion-desembolso": "25/9/2023",
        "monto-primer-desembolso": 16400,
        "porciento-primer-desembolso": 71,
        "fecha-inicio-gastos": "26/9/2023",
        "fecha-finalizacion-gastos": "28/9/2023",
        "fecha-primer-seguimiento": "1/10/2023",
        "fecha-limite-informe-final-tecnico": "3/10/2023",
        "fecha-limite-informe-final-economico": "6/10/2023",
        "seguimiento-informes": "mensual",
        "adjuntar-resolucion-otorgamiento": "PDF"
      },
      "etapa-justificacion": {
        "fecha-entrega": "23/10/2023",
        "fecha-limite-primer-requerimiento": "26/10/2023",
        "fecha-respuesta-requerimiento-primero": "28/10/2023",
        "fecha-limite-segundo-requerimiento": "1/10/2023",
        "fecha-respuesta-requerimiento-segundo": "4/10/2023",
        "notas": "Solo son notas de seguimientos de estado del proyecto"
      },
      "etapa-cierre": {
        "fecha-aprobacion-oficial": "20/11/2023",
        "estado-resolucion": "23/11/2023",
        "fecha-recepcion-pago-final": "27/11/2023",
        "monto-total-recibido": 15000,
        "ultimo-pago-porcentaje": 15,
        "documento-cierre": "PDF"
      },
      "__v": 0
    },
    {
      "_id": "6508a6daa8a7690ab7ccd8ac",
      "convocatoria": "financiacion patra cursos educativos online",
      "financiador": "Ayuntamiento Madrid",
      "proyecto": "monetize wireless supply-chains",
      "codigo-interno": "R000002-20230918",
      "etapa-solicitud": {
        "responsable": "Jesus Rivera",
        "fecha-propuesta": "23/9/2023",
        "numero-tramite": 123456,
        "numero-expediente": "fr2345",
        "recibo-oficial": "PDF"
      },
      "etapa-resolucion": {
        "fecha-resolucion": "20/9/2023",
        "fecha-limite-entrega": "24/9/2023",
        "fecha-real-entrega": "28/9/2023",
        "fecha-limite-responder": "31/9/2023",
        "fecha-real-respuesta": "4/10/2023",
        "notas": "Notas del proceso",
        "adjuntar-resolucion": "PDF"
      },
      "etapa-otorgamiento": {
        "fecha-resolucion-final": "",
        "estado-solicitud": "aprobada",
        "monto-concedido": 23000,
        "fecha-primer-desembolso": "23/9/2023",
        "fecha-recepcion-desembolso": "25/9/2023",
        "monto-primer-desembolso": 16400,
        "porciento-primer-desembolso": 71,
        "fecha-inicio-gastos": "26/9/2023",
        "fecha-finalizacion-gastos": "28/9/2023",
        "fecha-primer-seguimiento": "1/10/2023",
        "fecha-limite-informe-final-tecnico": "3/10/2023",
        "fecha-limite-informe-final-economico": "6/10/2023",
        "seguimiento-informes": "mensual",
        "adjuntar-resolucion-otorgamiento": "PDF"
      },
      "etapa-justificacion": {
        "fecha-entrega": "23/10/2023",
        "fecha-limite-primer-requerimiento": "26/10/2023",
        "fecha-respuesta-requerimiento-primero": "28/10/2023",
        "fecha-limite-segundo-requerimiento": "1/10/2023",
        "fecha-respuesta-requerimiento-segundo": "4/10/2023",
        "notas": "Solo son notas de seguimientos de estado del proyecto"
      },
      "etapa-cierre": {
        "fecha-aprobacion-oficial": "20/11/2023",
        "estado-resolucion": "23/11/2023",
        "fecha-recepcion-pago-final": "27/11/2023",
        "monto-total-recibido": 15000,
        "ultimo-pago-porcentaje": 15,
        "documento-cierre": "PDF"
      },
      "__v": 0
    }
  ]
}


describe('GestionConvocatoriaController', () => {
  let controller: GestionConvocatoriaController;
  let service: GestionConvocatoriaService;
  const mockGestionConvocatoriaService = {
    findAll:
    jest.fn().mockImplementation(()=>{
      return Promise.resolve({
      ...gestionConvocatoria
      })
    }),

    findOne: jest.fn().mockImplementation((id: ObjectId) => {
      return Promise.resolve({
        message: 'Gestion de convocatoria recibida correctamente',
        status: 200,
        data:gestionConvocatoria
      });
    }),

    update: jest.fn().mockImplementation((updatedGestionConvocatoria:UpdateGestionConvocatoriaDto) => {
      return Promise.resolve({
        message: 'Gestion actualizada correctamente',
        status: 200,
        data:gestionConvocatoria
      });
    }),

   remove: jest.fn().mockResolvedValue({
      message:'Gestion de convocatoria eliminida correctamente',
      status: 200,
      data:''
  }),


  create:jest.fn().mockImplementation((registroGestionConvocatoria:CreateGestionConvocatoriaDto) => {
    return Promise.resolve(
      {
        "convocatoria": "financiacion patra cursos educativos online",
        "financiador": "Ayuntamiento Barcelona",
        "proyecto": "monetize wireless supply-chains",
        "etapa-solicitud": "Etapa Solicitud",
        "etapa-resolucion": "Etapa Resolucion",
        "etapa-otorgamiento": "Etapa Otorgamiento",
        "etapa-justificacion": "Etapa Justificaciòn",
        "etapa-cierre": "Etapa Cierre",
        "_id": "6509a5e59caab8599d04d92d",
        "__v": 0
      }
    )
  })

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestionConvocatoriaController],
      providers: [GestionConvocatoriaService],
    })
    .overrideProvider(GestionConvocatoriaService)
    .useValue(mockGestionConvocatoriaService)
    .compile();

    controller = module.get<GestionConvocatoriaController>(GestionConvocatoriaController);
    service = module.get<GestionConvocatoriaService>(GestionConvocatoriaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  

  it('findAll:Todas las Gestiones de convocatorias se han recibido correctament', async () => {
    const result:any = gestionConvocatoria;
    expect(await controller.findAll()).toStrictEqual(result);
  });

  it('Crear Nueva Gestión de convocatoria', async () => {
    const nuevaGestion:any = gestionConvocatoria;
    expect (await controller.create(nuevaGestion)).toMatchObject(
    createConvocatoria
    );
  });

  it ('Actualizar una gestion de convocatoria', async () => {
    const id = new mongoose.Schema.Types.ObjectId('65044504c7d7b5d92dce9b4e');
    const updateGestionConvocatoriaDto: UpdateGestionConvocatoriaDto = {
      
      'etapa-solicitud': new EtapaSolicitudDto,
      'etapa-resolucion': new EtapaResolucionDto,
      'etapa-otorgamiento': new EtapaOtorgamientoDto,
      'etapa-justificacion': new EtapaJustificacionDto,
      'etapa-cierre': new EtapaCierreDto
    };

    expect(await service.update(updateGestionConvocatoriaDto)).toMatchObject({
      message: 'Gestion actualizada correctamente',
      status: 200,
      data:gestionConvocatoria

    });

  })
it('Deberia borrar una gestión de convocatoria', async () => {
  expect(await controller.remove(expect.any(Types.ObjectId))).toMatchObject({
    message:'Gestion de convocatoria eliminida correctamente',
    status:200,
    data:''
  })

});
it('Gestion de convocatoria recibida correctamente', async () => {
  const id = new Schema.Types.ObjectId('65044504c7d7b5d92dce9b4e');
  expect( await controller.findOne(id)).toMatchObject({
    message: 'Gestion de convocatoria recibida correctamente',
    status: 200,
   data:gestionConvocatoria

  })
})


})
