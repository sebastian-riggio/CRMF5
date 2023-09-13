import { Injectable } from '@nestjs/common';
import { CreateProyectosRegistroDto } from './dto/create-proyectos-registro.dto';
import { UpdateProyectosRegistroDto } from './dto/update-proyectos-registro.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ProyectosRegistro } from './schema/proyectos-registro.schema';
import { Model } from 'mongoose';
import { autoGenerateCode } from 'src/utils/autoGenrateCode';

@Injectable()
export class ProyectosRegistrosService {
constructor(
@InjectModel(ProyectosRegistro.name)
private ProyectosModel : Model <ProyectosRegistro>

){}

 async create(createProyectosRegistroDto: CreateProyectosRegistroDto): Promise<ProyectosRegistro> {

  const totalRegistros = await this.ProyectosModel.countDocuments({}).exec();
  const nuevoCodigoRegistro = `R${(totalRegistros + 1).toString().padStart(6, '0')}`;
  const proyectoCodigoConFecha = `${nuevoCodigoRegistro}${autoGenerateCode()}`;
  const project = new this.ProyectosModel({
    'proyecto-nombre': createProyectosRegistroDto['proyecto-nombre'],
    'proyecto-codigo': proyectoCodigoConFecha,
    'centro-gestor': createProyectosRegistroDto['centro-gestor'],
    responsable: createProyectosRegistroDto.responsable,
    'proyecto-duracion': createProyectosRegistroDto['proyecto-duracion'],
    'proyecto-presupuesto': createProyectosRegistroDto['proyecto-presupuesto'],
    'factoria-presupuesto': createProyectosRegistroDto['factoria-presupuesto'],
  });
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
