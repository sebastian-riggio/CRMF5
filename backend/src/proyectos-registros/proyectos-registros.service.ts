import { Injectable } from '@nestjs/common';
import { CreateProyectosRegistroDto } from './dto/create-proyectos-registro.dto';
import { UpdateProyectosRegistroDto } from './dto/update-proyectos-registro.dto';

@Injectable()
export class ProyectosRegistrosService {
  create(createProyectosRegistroDto: CreateProyectosRegistroDto) {
    return 'This action adds a new proyectosRegistro';
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
