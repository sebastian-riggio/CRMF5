import { Test, TestingModule } from '@nestjs/testing';
import { GestionConvocatoriaService } from './gestion-convocatoria.service';
import { GestionConvocatoria } from './schema/gestion-convocatoria.schema';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { CreateGestionConvocatoriaDto } from './dto/create-gestion-convocatoria.dto';
import { ProyectosRegistro } from 'src/proyectos-registros/schema/proyectos-registro.schema';

const createConvocatoria = {
  convocatoria: 'financiacion patra cursos educativos online',
  financiador: 'Ayuntamiento Barcelona',
  proyecto: 'monetize wireless supply-chains',
  'etapa-solicitud': 'Etapa Solicitud',
  'etapa-resolucion': 'Etapa Resolucion',
  'etapa-otorgamiento': 'Etapa Otorgamiento',
  'etapa-justificacion': 'Etapa Justificaciòn',
  'etapa-cierre': 'Etapa Cierre',
};

const convocatoria = {
  message: 'Todas las gestiones de convocatorias se han recibido correctamente',
  status: 200,
  gestiones: [
    {
      _id: '6508a6c4a8a7690ab7ccd8a7',
      convocatoria: 'financiacion patra cursos educativos online',
      financiador: 'Ayuntamiento Barcelona',
      proyecto: 'monetize wireless supply-chains',
      'codigo-interno': 'R000001-20230918',
      'etapa-solicitud': {
        responsable: 'Jesus Rivera',
        'fecha-propuesta': '23/9/2023',
        'numero-tramite': 123456,
        'numero-expediente': 'fr2345',
        'recibo-oficial': 'PDF',
      },
      'etapa-resolucion': {
        'fecha-resolucion': '20/9/2023',
        'fecha-limite-entrega': '24/9/2023',
        'fecha-real-entrega': '28/9/2023',
        'fecha-limite-responder': '31/9/2023',
        'fecha-real-respuesta': '4/10/2023',
        notas: 'Notas del proceso',
        'adjuntar-resolucion': 'PDF',
      },
      'etapa-otorgamiento': {
        'fecha-resolucion-final': '',
        'estado-solicitud': 'aprobada',
        'monto-concedido': 23000,
        'fecha-primer-desembolso': '23/9/2023',
        'fecha-recepcion-desembolso': '25/9/2023',
        'monto-primer-desembolso': 16400,
        'porciento-primer-desembolso': 71,
        'fecha-inicio-gastos': '26/9/2023',
        'fecha-finalizacion-gastos': '28/9/2023',
        'fecha-primer-seguimiento': '1/10/2023',
        'fecha-limite-informe-final-tecnico': '3/10/2023',
        'fecha-limite-informe-final-economico': '6/10/2023',
        'seguimiento-informes': 'mensual',
        'adjuntar-resolucion-otorgamiento': 'PDF',
      },
      'etapa-justificacion': {
        'fecha-entrega': '23/10/2023',
        'fecha-limite-primer-requerimiento': '26/10/2023',
        'fecha-respuesta-requerimiento-primero': '28/10/2023',
        'fecha-limite-segundo-requerimiento': '1/10/2023',
        'fecha-respuesta-requerimiento-segundo': '4/10/2023',
        notas: 'Solo son notas de seguimientos de estado del proyecto',
      },
      'etapa-cierre': {
        'fecha-aprobacion-oficial': '20/11/2023',
        'estado-resolucion': '23/11/2023',
        'fecha-recepcion-pago-final': '27/11/2023',
        'monto-total-recibido': 15000,
        'ultimo-pago-porcentaje': 15,
        'documento-cierre': 'PDF',
      },
      __v: 0,
    },
    
  ],
};

describe('GestionConvocatoriaService', () => {
  let service: GestionConvocatoriaService;
  let model: Model<GestionConvocatoria>;
  let modelProyecto: Model<ProyectosRegistro>
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GestionConvocatoriaService,
        {
          provide: getModelToken(GestionConvocatoria.name),
          useValue: {
            find: jest.fn().mockReturnValue(
              Promise.resolve({
                message:
                  'Todas las gestiones de convocatorias se han recibido correctamente',
                status: 200,
                gestiones: convocatoria,
              })
            ),

            create: jest
            .fn()
            .mockImplementation(
              (createGestionConvocatoria: CreateGestionConvocatoriaDto) => {
                return Promise.resolve({
                  gestiones: {
                    _id: '65044504c7d7b5d92dce9b4e',
                    ...createGestionConvocatoria,
                  },
                });
              },
            ),


          },
        },
      ],
    }).compile();

    service = module.get<GestionConvocatoriaService>(
      GestionConvocatoriaService
    );
    model = module.get<Model<GestionConvocatoria>>(
      getModelToken('GestionConvocatoria')
    );
    modelProyecto = module.get<Model<ProyectosRegistro>>(
      getModelToken('ProyectosRegistro')

    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Debería traerme todas las gestiones de convocatorias', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(convocatoria),
    } as any);
    const response = await service.findAll();
    expect(response).toEqual({
      message:
        'Todas las gestiones de convocatorias se han recibido correctamente',
      status: 200,
      gestiones: convocatoria,
    });
  });

  /* it('Deberia crear uan gestion de convocatoria correctamente', async () => {
   const newGestionConvocatoria: CreateGestionConvocatoriaDto = {


    convocatoria: 'financiacion patra cursos educativos online',
      financiador: 'Ayuntamiento Barcelona',
      proyecto:<modelProyecto>
      'codigo-interno': 'R000001-20230918',
      'etapa-solicitud': {
        responsable: 'Jesus Rivera',
        'fecha-propuesta': '23/9/2023',
        'numero-tramite': 123456,
        'numero-expediente': 'fr2345',
        'recibo-oficial': 'PDF',
      },
      'etapa-resolucion': {
        'fecha-resolucion': '20/9/2023',
        'fecha-limite-entrega': '24/9/2023',
        'fecha-real-entrega': '28/9/2023',
        'fecha-limite-responder': '31/9/2023',
        'fecha-real-respuesta': '4/10/2023',
        notas: 'Notas del proceso',
        'adjuntar-resolucion': 'PDF',
      },
      'etapa-otorgamiento': {
        'fecha-resolucion-final': '',
        'estado-solicitud': 'aprobada',
        'monto-concedido': 23000,
        'fecha-primer-desembolso': '23/9/2023',
        'fecha-recepcion-desembolso': '25/9/2023',
        'monto-primer-desembolso': 16400,
        'porciento-primer-desembolso': 71,
        'fecha-inicio-gastos': '26/9/2023',
        'fecha-finalizacion-gastos': '28/9/2023',
        'fecha-primer-seguimiento': '1/10/2023',
        'fecha-limite-informe-final-tecnico': '3/10/2023',
        'fecha-limite-informe-final-economico': '6/10/2023',
        'seguimiento-informes': 'mensual',
        'adjuntar-resolucion-otorgamiento': 'PDF',
      },
      'etapa-justificacion': {
        'fecha-entrega': '23/10/2023',
        'fecha-limite-primer-requerimiento': '26/10/2023',
        'fecha-respuesta-requerimiento-primero': '28/10/2023',
        'fecha-limite-segundo-requerimiento': '1/10/2023',
        'fecha-respuesta-requerimiento-segundo': '4/10/2023',
        notas: 'Solo son notas de seguimientos de estado del proyecto',
      },
      'etapa-cierre': {
        'fecha-aprobacion-oficial': '20/11/2023',
        'estado-resolucion': '23/11/2023',
        'fecha-recepcion-pago-final': '27/11/2023',
        'monto-total-recibido': 15000,
        'ultimo-pago-porcentaje': 15,
        'documento-cierre': 'PDF',
      },
    
     
    

     
};
expect(await service.create(newGestionConvocatoria))
  }) */
});
