import { Module } from '@nestjs/common';
import { ConvocatoriaRegistroService } from './convocatoria-registro.service';
import { ConvocatoriaRegistroController } from './convocatoria-registro.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConvocatoriaRegistro, ConvocatoriaRegistroSchema } from './schema/convocatoria-registro.schema';
import { FinanciadoresRegistro, FinanciadoresRegistroSchema } from 'src/financiadores-registro/schema/financiadores-registro.schema';

@Module({
imports:[
MongooseModule.forFeature([
  {
  name: ConvocatoriaRegistro.name,
  schema: ConvocatoriaRegistroSchema
  },
{
  name: FinanciadoresRegistro.name,
  schema: FinanciadoresRegistroSchema
}

])
],

  controllers: [ConvocatoriaRegistroController],
  providers: [ConvocatoriaRegistroService],
})
export class ConvocatoriaRegistroModule {}
