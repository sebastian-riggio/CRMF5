import { Module } from '@nestjs/common';
import { GestionConvocatoriaService } from './gestion-convocatoria.service';
import { GestionConvocatoriaController } from './gestion-convocatoria.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GestionConvocatoria, GestionSchema } from './schema/gestion-convocatoria.schema';
import { ProyectosRegistro, ProyectosRegistroSchema } from 'src/proyectos-registros/schema/proyectos-registro.schema';

@Module({
imports:[
MongooseModule.forFeature([

  {
    name:GestionConvocatoria.name,
    schema:GestionSchema
  },
  {
    name: ProyectosRegistro.name,
    schema: ProyectosRegistroSchema
  }
])


],


  controllers: [GestionConvocatoriaController],
  providers: [GestionConvocatoriaService],
})
export class GestionConvocatoriaModule {}
