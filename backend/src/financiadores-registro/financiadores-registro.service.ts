import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFinanciadoresRegistroDto } from './dto/create-financiadores-registro.dto';
import { UpdateFinanciadoresRegistroDto } from './dto/update-financiadores-registro.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FinanciadoresRegistro } from './schema/financiadores-registro.schema';
import { Model, ObjectId } from 'mongoose';

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


 async findAll() {
  try{
    const allFinanciadores = await this.FinanciadoresModel.find().exec()
    return {
      message: 'Todos los financiadores se han recibido correctamente',
      status:200,
      financiadores:allFinanciadores
     };
  }catch(error){
    throw error
  }  
  }

 async findOne(id:ObjectId) {
  try{
    const financiador = await this.FinanciadoresModel.findOne({_id:id})
    return {
      message: 'financiador recibido correctamente',
      status: 200,
      financiador: financiador
    };
  }catch(error){
    throw error
  }
  }


async  update(updateFinanciadoresRegistroDto: UpdateFinanciadoresRegistroDto) {
   try {
    const updatedFinanciador = await this.FinanciadoresModel.findOneAndUpdate({_id:updateFinanciadoresRegistroDto},
      
      {
        ...updateFinanciadoresRegistroDto
      });
      return {
        message: "Financiador actualizado correctamente",
        status:200,
        financiador:updatedFinanciador
      }
   }catch(error){
    throw error 
  }
  }
  
 async remove(id:ObjectId) {
  try {
    const findAndDelete = await this.FinanciadoresModel.findByIdAndDelete(id);
    if(!findAndDelete) throw new HttpException('Financiador no encontrado',HttpStatus.NOT_FOUND);
    return {
      message: 'Financiador eliminado',
      status: HttpStatus.OK,
      data: ''
    };
  } catch(error){
    throw error
  }

  }
}
