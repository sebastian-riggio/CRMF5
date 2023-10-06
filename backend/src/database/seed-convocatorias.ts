import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module'; // Update the import path accordingly
import { ProyectosRegistrosService } from '../proyectos-registros/proyectos-registros.service'; // Update the import path accordingly
import { ConvocatoriaRegistroService } from '../convocatoria-registro/convocatoria-registro.service';
import mongoose from 'mongoose';
import {faker} from '@faker-js/faker';

async function seedConvocatorias() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb+srv://southcaribbean:Qx0sf2vmsknbTxgC@cluster0.v1ttqqq.mongodb.net/');

    // Clear existing data
    const convocatoriaService = app.get(ConvocatoriaRegistroService);
    await convocatoriaService.deleteAll();

    // Generate and insert fake data
    const numProjects = 100; // Change this to the desired number of documents
    const projects = [];

    for (let i = 0; i < numProjects; i++) {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;

        const ConvocatoriaData = {
          "entidadConvocante": faker.commerce.department(),
          "titulo": faker.company.buzzPhrase(),
          "departamentoConvocante": faker.commerce.department(),
          "publicacionOficial": faker.internet.url(),
          "convocatoriaEnlace": faker.internet.url(),
          "tematica": faker.company.buzzVerb(),
          "trabajoLineas": faker.company.buzzNoun(),
          "dirigidoEntidades": faker.company.buzzPhrase(),
           "fechaApertura": faker.date.anytime(),
           "fechaCierre": faker.date.future(),
           "fechaResolucion": faker.date.future(),
           "periodoEjecucion": `${faker.number.int({min: 1, max: 24})} meses`,
           "fechaJustificacion": faker.date.future(),
           "auditoria": faker.datatype.boolean(),
           "presupuesto": faker.number.float({ min: 1000, max: 10000 }),
           "otraInformacion": faker.lorem.lines(2),
           "memoriaTecnica": null,
           "modeloPresupuesto": null,
           "formularioSolicitud": null,
           "otraDocumentacion": null,
        };

      const createdConvocatoria = await convocatoriaService.create(ConvocatoriaData);
      projects.push(createdConvocatoria);
    }

    console.log('Database convocatorias seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await app.close();
    mongoose.disconnect();
  }
}

seedConvocatorias();
