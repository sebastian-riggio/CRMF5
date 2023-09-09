import { Module } from '@nestjs/common';
import { ProyectosRegistrosService } from './proyectos-registros.service';
import { ProyectosRegistrosController } from './proyectos-registros.controller';

@Module({
  controllers: [ProyectosRegistrosController],
  providers: [ProyectosRegistrosService],
})
export class ProyectosRegistrosModule {}
