/* // src/seed.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // Update the import path accordingly
import { ProyectosRegistrosService } from './proyectos-registros/proyectos-registros.service'; // Update the import path accordingly
import mongoose from 'mongoose';
import {faker} from '@faker-js/faker';

async function seedDatabase() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb+srv://southcaribbean:Qx0sf2vmsknbTxgC@cluster0.v1ttqqq.mongodb.net/');

    // Clear existing data
    const projectService = app.get(ProyectosRegistrosService);
    await projectService.deleteAll();

    // Generate and insert fake data
    const numProjects = 100; // Change this to the desired number of documents
    const projects = [];

    for (let i = 0; i < numProjects; i++) {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;

        const projectData = {
          "proyecto-nombre": faker.company.buzzPhrase(),
          "proyecto-codigo": `Factoria${faker.date.future().getFullYear()}${faker.date.future().getMonth() + 1}${faker.date.future().getDate()}`,
          "centro-gestor": faker.helpers.arrayElement([
            "Factoria F5 - People and culture",
            "Factoria F5 - Admin, contabilidad y finanzas",
            "Factoria F5 - Oficina soporte proyectos y calidad",
            "Factoría F5 - Dirección general",
          ]),
          "responsable": faker.person.fullName(),
          "proyecto-duracion": `${faker.number.int({ min: 1, max: 12 })} meses`,
          "proyecto-presupuesto": faker.number.float({ min: 1000, max: 10000 }),
          "factoria-presupuesto": faker.number.float({ min: 1000, max: 10000 }),
        };

      const createdProject = await projectService.create(projectData);
      projects.push(createdProject);
    }

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await app.close();
    mongoose.disconnect();
  }
}

seedDatabase();
 */