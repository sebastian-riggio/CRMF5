import { Injectable } from '@nestjs/common';
import { CreateFinanciadoresRegistroDto } from './dto/create-financiadores-registro.dto';
import { UpdateFinanciadoresRegistroDto } from './dto/update-financiadores-registro.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FinanciadoresRegistro } from './schema/financiadores-registro.schema';
import { Model } from 'mongoose';

@Injectable()
export class FinanciadoresRegistroService {

  constructor(
    @InjectModel(FinanciadoresRegistro.name)
     private  FinanciadoresModel: Model<FinanciadoresRegistro>
  ){}


 async create(createFinanciadoresRegistroDto: CreateFinanciadoresRegistroDto): Promise <FinanciadoresRegistro> {

    // Cuento el último registro en la base de datos
  const ultimoRegistro = await this.FinanciadoresModel.countDocuments({}).exec()
console.log(ultimoRegistro)
  // Determinar el número de registro a asignar
  const numeroRegistro = `R-${(ultimoRegistro + 1).toString().padStart(4,'0')}`
console.log(numeroRegistro)
   const registro = new this.FinanciadoresModel({
   "nombre-entidad":createFinanciadoresRegistroDto['nombre-entidad'],
    "codigo-registro":numeroRegistro,
    CIF:createFinanciadoresRegistroDto.CIF,
    entidad:createFinanciadoresRegistroDto.entidad,
    "sociedad-tipo":createFinanciadoresRegistroDto['sociedad-tipo'],
    "sitio-web":createFinanciadoresRegistroDto['sitio-web'],
     relacion:createFinanciadoresRegistroDto.relacion,
    "direccion-principal":createFinanciadoresRegistroDto['direccion-principal'],
    "telefono-principal":createFinanciadoresRegistroDto['telefono-principal'],
    email:createFinanciadoresRegistroDto.email,
    "persona-contacto":createFinanciadoresRegistroDto['persona-contacto'],  
   });

   return registro.save();
 }
  

  findAll() {
    return `This action returns all financiadoresRegistro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financiadoresRegistro`;
  }

  update(id: number, updateFinanciadoresRegistroDto: UpdateFinanciadoresRegistroDto) {
    return `This action updates a #${id} financiadoresRegistro`;
  }

  remove(id: number) {
    return `This action removes a #${id} financiadoresRegistro`;
  }
}
