import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateConvocatoriaRegistroDto } from './dto/create-convocatoria-registro.dto';
import { UpdateConvocatoriaRegistroDto } from './dto/update-convocatoria-registro.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ConvocatoriaRegistro } from './schema/convocatoria-registro.schema';
import { Model, ObjectId } from 'mongoose';



@Injectable()
export class ConvocatoriaRegistroService {

constructor(
@InjectModel(ConvocatoriaRegistro.name)
private readonly  ConvocatoriaModel : Model <ConvocatoriaRegistro>,

){}
 async create(createConvocatoriaRegistroDto: CreateConvocatoriaRegistroDto) {
 
const newConvocatoria = new this.ConvocatoriaModel({
  "entidad-convocante":createConvocatoriaRegistroDto['entidad-convocante'],
  "departamento-convocante":createConvocatoriaRegistroDto['departamento-convocante'],
  titulo:createConvocatoriaRegistroDto.titulo,
  "publicacion-oficial":createConvocatoriaRegistroDto['publicacion-oficial'],
  "convocatoria-enlace":createConvocatoriaRegistroDto['convocatoria-enlace'],
  tematica:createConvocatoriaRegistroDto.tematica,
  "trabajo-lineas":createConvocatoriaRegistroDto['trabajo-lineas'],
  "dirigido-entidades":createConvocatoriaRegistroDto['dirigido-entidades'],
  "fecha-apertura":createConvocatoriaRegistroDto['fecha-apertura'],
  "fecha-cierre":createConvocatoriaRegistroDto['fecha-cierre'],
  "fecha-resolucion":createConvocatoriaRegistroDto['fecha-resolucion'],
  "periodo-ejecucion":createConvocatoriaRegistroDto['periodo-ejecucion'],
  "fecha-justificacion":createConvocatoriaRegistroDto['fecha-justificacion'],
  auditoria:createConvocatoriaRegistroDto.auditoria,
  presupuesto:createConvocatoriaRegistroDto.presupuesto,
  "otra-informacion":createConvocatoriaRegistroDto['otra-informacion'],
  documentacion:createConvocatoriaRegistroDto.documentacion


});
return {
  message: 'Se ha registrado correctamente la convocatoria',
  status:200,
  convocatoria:newConvocatoria
  .save()
} 

  }


 async findAll() {
    try{
      const AllConvocatorias = await this.ConvocatoriaModel.find()
      return {
        message: 'Todas las convocatorias se han recibido correctamente',
        status:200,
        convocatoria:AllConvocatorias
       };
    }catch(error){
      throw error
    }
    
  }

 async findOne(id:ObjectId) {
    try{
      const convocatoria = await this.ConvocatoriaModel.findOne({_id:id})
      return {
        message: 'Convocatoria recibida correctamente',
        status: 200,
        convocatoria:convocatoria
      };
    }catch(error){
      throw error
    }
    
  }


 async update(updateConvocatoriaRegistroDto: UpdateConvocatoriaRegistroDto) {
    try {
      const updatedConvocatoria = await this.ConvocatoriaModel.findOneAndUpdate({_id:updateConvocatoriaRegistroDto},
        
        {
        ...updateConvocatoriaRegistroDto
        });

        return {
          message: "Convocatoria actualizada correctamente",
          status:200,
          convocatoria:updatedConvocatoria
        }

    }catch(error){
      throw error
    }
  
  }


async remove(id:ObjectId) {
    try {
      const findAndDelete = await this.ConvocatoriaModel.findByIdAndDelete(id);
      if(!findAndDelete) throw new HttpException('Convocatoria no encontrada',HttpStatus.NOT_FOUND)
    return {
           message: 'Convocatoria eliminada correctamente',
           status:HttpStatus.OK,
           data:''
    } 
    
    }catch(error){
      throw error 
    }
  }
}
