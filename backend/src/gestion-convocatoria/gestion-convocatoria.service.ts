import { Injectable } from '@nestjs/common';
import { CreateGestionConvocatoriaDto } from './dto/create-gestion-convocatoria.dto';
import { UpdateGestionConvocatoriaDto } from './dto/update-gestion-convocatoria.dto';

@Injectable()
export class GestionConvocatoriaService {
  create(createGestionConvocatoriaDto: CreateGestionConvocatoriaDto) {
    return 'This action adds a new gestionConvocatoria';
  }

  findAll() {
    return `This action returns all gestionConvocatoria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gestionConvocatoria`;
  }

  update(id: number, updateGestionConvocatoriaDto: UpdateGestionConvocatoriaDto) {
    return `This action updates a #${id} gestionConvocatoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} gestionConvocatoria`;
  }
}
