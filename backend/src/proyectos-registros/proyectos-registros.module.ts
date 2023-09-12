import { Module } from '@nestjs/common';
import { ProyectosRegistrosService } from './proyectos-registros.service';
import { ProyectosRegistrosController } from './proyectos-registros.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProyectosRegistro, ProyectosRegistroSchema } from './schema/proyectos-registro.schema';

@Module({
imports:[
  MongooseModule.forFeature([
    {
      name: ProyectosRegistro.name,
      schema: ProyectosRegistroSchema
    }
  ])
],

  controllers: [ProyectosRegistrosController],
  providers: [ProyectosRegistrosService],
})
export class ProyectosRegistrosModule {}
