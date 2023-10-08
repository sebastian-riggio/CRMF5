
  // src/seed.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module'; // Update the import path accordingly
import { GestionConvocatoriaService } from '../gestion-convocatoria/gestion-convocatoria.service'; // Update the import path accordingly
import { ProyectosRegistrosService } from '../proyectos-registros/proyectos-registros.service';
import { ConvocatoriaRegistroService } from '../convocatoria-registro/convocatoria-registro.service';
import mongoose from 'mongoose';
import {faker} from '@faker-js/faker';

async function seedGestion() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb+srv://southcaribbean:Qx0sf2vmsknbTxgC@cluster0.v1ttqqq.mongodb.net/');

    const proyectos = await app.get(ProyectosRegistrosService).findAll()
    const convocatorias = await app.get(ConvocatoriaRegistroService).findAll()
    
    // Clear existing data
    const gestionService = app.get(GestionConvocatoriaService);
    await gestionService.deleteAll();

    // Generate and insert fake data
    const numProjects = 2; // Change this to the desired number of documents
    const projects = [];

    for (let i = 0; i < numProjects; i++) {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;

        const fechaDesde = '2020-01-01T00:00:00.000Z';
        const fechaHasta = '2030-01-01T00:00:00.000Z';

         enum Estados {
          SOLICITUD = 'solicitud',
         NEGOCIACION = 'negociacion',
          OTORGAMIENTO = 'otorgamiento',
          JUSTIFICACION = 'justificacion',
          CIERRE = 'cierre',
      }

        const gestionData = {
          "convocatoria": faker.helpers.arrayElement(convocatorias.convocatoria),
          "financiador": faker.helpers.arrayElement(convocatorias.convocatoria),
          "proyecto": faker.helpers.arrayElement(proyectos.proyectos),
          "codigoInterno": faker.lorem.word(),
          "responsable": faker.person.fullName(),
          "fechaPropuesta": faker.date.anytime(),
          "numeroTramite": faker.string.uuid(),
          "numeroExpediente": faker.string.uuid(),
          "reciboOficial": null,
          "etapaResolucion": {
            fechaResolucion: faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' }),
            fechaLimiteEntrega: faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' }),
            fechaRealEntrega: faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' }),
            fechaLimiteResponder: faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' }),
            fechaRealRespuesta: faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' }),
            notas: faker.lorem.words(5), // Genera un texto ficticio de 5 palabras
            adjuntarResolucion: faker.lorem.word(), // Genera una palabra aleatoria
          },
         "etapaOtorgamiento": {
          fechaResolucionFinal: faker.date.between({from:fechaDesde, to:fechaHasta}),
          estadoSolicitud: faker.datatype.boolean(),
          montoConcedido: faker.number.int({ min: 1000, max: 50000 }),
          fechaPrimerDesembolso: faker.date.between({from:fechaDesde,to: fechaHasta}),
          fechaRecepcionDesembolso: faker.date.between({from: fechaDesde, to: fechaHasta}),
          montoPrimerDesembolso: faker.number.int({ min: 1000, max: 20000 }),
          porcientoPrimerDesembolso: faker.number.int({ min: 10, max: 50 }),
          fechaInicioGastos: faker.date.between({from:fechaDesde, to: fechaHasta}),
          fechaFinalizacionGastos: faker.date.between({from:fechaDesde, to:fechaHasta}),
          fechaPrimerSeguimiento: faker.date.between({from: fechaDesde, to: fechaHasta}),
          fechaLimiteInformeFinalTecnico: faker.date.between({from: fechaDesde,to: fechaHasta}),
          fechaLimiteInformeFinalEconomico: faker.date.between({from:fechaDesde,to: fechaHasta}),
          seguimientoInformes: faker.helpers.arrayElement(['mensual', 'trimestral', 'semestral', 'anual', 'solo informe final']),
          adjuntarResolucionOtorgamiento: null,
        },
        "etapaJustificacion": {
          fechaEntrega: faker.date.between({from:'2023-10-20', to: '2023-10-20'}),
          fechaLimitePrimerRequerimiento: faker.date.between({from:'2023-10-20', to:'2023-10-25'}),
          fechaRespuestaRequerimientoPrimero: faker.date.between({from:'2023-10-20', to:'2023-10-28'}),
          fechaLimiteSegundoRequerimiento: faker.date.between({from:'2023-10-20', to:'2023-10-30'}),
          fechaRespuestaRequerimientoSegundo: faker.date.between({from:'2023-10-20', to:'2023-11-01'}),
          notas: faker.lorem.sentence(), // Genera una oración ficticia
        },
        "etapaCierre": {
          fechaAprobacionOficial: faker.date.between({from:'2023-11-02', to:'2023-11-02'}),
          estadoResolucion: 'cerrado', // Valor fijo para el ejemplo
          fechaRecepcionPagoFinal: faker.date.between({from:'2023-11-02', to: '2023-11-23'}),
          montoTotalRecibido: faker.number.int({ min: 1000, max: 50000 }),
          ultimoPagoPorcentaje: faker.number.int({ min: 10, max: 50 }),
          documentoCierre: 'PDF', // Valor fijo para el ejemplo
        },
        "estado": faker.helpers.enumValue(Estados) 
        };

        console.log(gestionData)
      const createdGestion = await gestionService.create(gestionData);
      projects.push(createdGestion);
    }

    console.log('Database gestion seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await app.close();
    mongoose.disconnect();
  }
}

seedGestion();
