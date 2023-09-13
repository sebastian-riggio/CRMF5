import { Module } from '@nestjs/common';
import { ConvocatoriaRegistroService } from './convocatoria-registro.service';
import { ConvocatoriaRegistroController } from './convocatoria-registro.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConvocatoriaRegistro, ConvocatoriaRegistroSchema } from './schema/convocatoria-registro.schema';


@Module({
imports:[
MongooseModule.forFeature([
  {
  name: ConvocatoriaRegistro.name,
  schema: ConvocatoriaRegistroSchema
  },

])
],

  controllers: [ConvocatoriaRegistroController],
  providers: [ConvocatoriaRegistroService],
})
export class ConvocatoriaRegistroModule {}
