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
  const projectCounts = await this.ProyectosModel.count({
    where:{code: new RegExp(`^${year}-`)}
  });

  const code = `${year}${month}${day}-${projectCounts + 1}`;

  // Creo un nuevo objeto ProyectosRegistro con todos los campos asignados lo mismo que hize en la convocatoria de registros
  const project = new ProyectosRegistro();

  project['proyecto-nombre'] = createProyectosRegistroDto['proyecto-nombre'];
  project['proyecto-codigo'] = code;
  project['centro-gestor'] = createProyectosRegistroDto['centro-gestor'];
  project.responsable = createProyectosRegistroDto.responsable;
  project['proyecto-duracion'] = createProyectosRegistroDto['proyecto-duracion'];
  project['proyecto-presupuesto'] = createProyectosRegistroDto['proyecto-presupuesto'];
  project['factoria-presupuesto'] = createProyectosRegistroDto['factoria-presupuesto'];

  // Guardo el objeto project en la coleccion correspondiente de MongoDb
  return this.ProyectosModel.create(project);

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
