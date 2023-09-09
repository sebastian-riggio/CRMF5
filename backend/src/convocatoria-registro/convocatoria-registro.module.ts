import { Module } from '@nestjs/common';
import { ConvocatoriaRegistroService } from './convocatoria-registro.service';
import { ConvocatoriaRegistroController } from './convocatoria-registro.controller';

@Module({
  controllers: [ConvocatoriaRegistroController],
  providers: [ConvocatoriaRegistroService],
})
export class ConvocatoriaRegistroModule {}
