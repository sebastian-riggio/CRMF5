import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateConvocatoriaRegistroDto } from './dto/create-convocatoria-registro.dto';
import { UpdateConvocatoriaRegistroDto } from './dto/update-convocatoria-registro.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ConvocatoriaRegistro } from './schema/convocatoria-registro.schema';
import { Model } from 'mongoose';


@Injectable()
export class ConvocatoriaRegistroService {

constructor(
@InjectModel(ConvocatoriaRegistro.name)
private  ConvocatoriaModel : Model <ConvocatoriaRegistro>,

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
return newConvocatoria.save()

  }

  findAll() {
    return `This action returns all convocatoriaRegistro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} convocatoriaRegistro`;
  }

  update(id: number, updateConvocatoriaRegistroDto: UpdateConvocatoriaRegistroDto) {
    return `This action updates a #${id} convocatoriaRegistro`;
  }

  remove(id: number) {
    return `This action removes a #${id} convocatoriaRegistro`;
  }
}
