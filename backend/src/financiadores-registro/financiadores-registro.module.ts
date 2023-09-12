import { Module } from '@nestjs/common';
import { FinanciadoresRegistroService } from './financiadores-registro.service';
import { FinanciadoresRegistroController } from './financiadores-registro.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FinanciadoresRegistro, FinanciadoresRegistroSchema } from './schema/financiadores-registro.schema';

@Module({
  imports:[
  MongooseModule.forFeature([
    {
      name: FinanciadoresRegistro.name,
      schema: FinanciadoresRegistroSchema
    }
  ])
  ],
  controllers: [FinanciadoresRegistroController],
  providers: [FinanciadoresRegistroService],
  exports:[FinanciadoresRegistroService]
})
export class FinanciadoresRegistroModule {}
