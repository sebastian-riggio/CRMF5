import { Module } from '@nestjs/common';
import { GestionConvocatoriaService } from './gestion-convocatoria.service';
import { GestionConvocatoriaController } from './gestion-convocatoria.controller';

@Module({
  controllers: [GestionConvocatoriaController],
  providers: [GestionConvocatoriaService],
})
export class GestionConvocatoriaModule {}
