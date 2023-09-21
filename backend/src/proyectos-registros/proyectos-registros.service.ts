import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProyectosRegistroDto } from './dto/create-proyectos-registro.dto';
import { UpdateProyectosRegistroDto } from './dto/update-proyectos-registro.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ProyectosRegistro } from './schema/proyectos-registro.schema';
import { Model, ObjectId } from 'mongoose';
import { autoGenerateCode } from '../utils/autoGenerateCode';

@Injectable()
export class ProyectosRegistrosService {
constructor(
@InjectModel(ProyectosRegistro.name)
private readonly ProyectosModel : Model <ProyectosRegistro>

){} 

 async create(createProyectosRegistroDto: CreateProyectosRegistroDto){

  const totalRegistros = await this.ProyectosModel.countDocuments({});
  const nuevoCodigoRegistro = `R${(totalRegistros + 1).toString().padStart(6, '0')}`;
  const proyectoCodigoConFecha = `${nuevoCodigoRegistro}${autoGenerateCode()}`;
  const project = await this.ProyectosModel.create({
  ...createProyectosRegistroDto,
    proyectoCodigo: proyectoCodigoConFecha,
  });
  return {
  message:'Proyecto creado con exito',
  status:200,
  proyecto:project
  
  }
  
  }
 async findAll() {
  try {
    const allProjects = await this.ProyectosModel.find().exec()
    return {
      message: 'Todos las proyectos se han recibido correctamente',
      status:200,
     proyectos:allProjects
     };
  }catch(error){
    throw error
  } 
    
  }

 async findOne(id:ObjectId) {
    try {
      const proyecto = await this.ProyectosModel.findOne({_id:id})
      return {
        message: 'Proyecto recibido correctamente',
        status: 200,
        proyecto:proyecto
      }
    }catch(error){
      throw error
    }
  }

 async update(updateProyectosRegistroDto: UpdateProyectosRegistroDto) {
try {
  const updatedProjects = await this.ProyectosModel.findOneAndUpdate({_id:updateProyectosRegistroDto},
    {
       ...updateProyectosRegistroDto
    });

    return {
      message: "Proyecto actualizado correctamente",
      status:200,
      proyectos:updatedProjects
    }
}catch(error){
  throw error
}
  }

 async remove(id: ObjectId) {
try {
  const findAndDelete = await this.ProyectosModel.findByIdAndDelete(id);
  if(!findAndDelete) throw new HttpException('Proyecto no encontrado',HttpStatus.NOT_FOUND)
 return {
    message: 'Proyecto eliminado correctamente',
    status:200,
    data:""
  }
}catch(error){
  throw error
}

  }

  async deleteAll(): Promise<void> {
    await this.ProyectosModel.deleteMany({}).exec();
  }

}
