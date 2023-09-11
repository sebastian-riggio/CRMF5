import { Injectable } from '@nestjs/common';
import { CreateProyectosRegistroDto } from './dto/create-proyectos-registro.dto';
import { UpdateProyectosRegistroDto } from './dto/update-proyectos-registro.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ProyectosRegistro } from './schema/proyectos-registro.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProyectosRegistrosService {
constructor(
@InjectModel(ProyectosRegistro.name)
private ProyectosModel : Model <ProyectosRegistro>

){}

 async create(createProyectosRegistroDto: CreateProyectosRegistroDto): Promise<ProyectosRegistro> {
  const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0'); 
    
 // Cuento todos los registros existentes,da la cantidad actual de registros en mi BD el countDocuments 
 const totalRegistros = await this.ProyectosModel.countDocuments({}).exec();

 // Determino el nuevo valor para 'proyecto-codigo'
 const nuevoCodigoRegistro = `R${(totalRegistros + 1).toString().padStart(6, '0')}`;

 // Agrego la fecha al código de registro
 const proyectoCodigoConFecha = `${nuevoCodigoRegistro}-${year}${month}${day}`;

//console.log(nuevoCodigoRegistro)

  // Creo un nuevo objeto ProyectosRegistro con todos los campos asignados lo mismo que hize en la convocatoria de registros
  const project = new this.ProyectosModel({
    'proyecto-nombre': createProyectosRegistroDto['proyecto-nombre'],
    'proyecto-codigo': proyectoCodigoConFecha,
    'centro-gestor': createProyectosRegistroDto['centro-gestor'],
    responsable: createProyectosRegistroDto.responsable,
    'proyecto-duracion': createProyectosRegistroDto['proyecto-duracion'],
    'proyecto-presupuesto': createProyectosRegistroDto['proyecto-presupuesto'],
    'factoria-presupuesto': createProyectosRegistroDto['factoria-presupuesto'],
  });

  // Guardo el objeto project en la colección correspondiente de MongoDB
  return project.save();

  }

  findAll() {
    return `This action returns all proyectosRegistros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proyectosRegistro`;
  }

  update(id: number, updateProyectosRegistroDto: UpdateProyectosRegistroDto) {
    return `This action updates a #${id} proyectosRegistro`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyectosRegistro`;
  }
}
