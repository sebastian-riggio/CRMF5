import { Injectable } from '@nestjs/common';
import { CreateConvocatoriaRegistroDto } from './dto/create-convocatoria-registro.dto';
import { UpdateConvocatoriaRegistroDto } from './dto/update-convocatoria-registro.dto';

@Injectable()
export class ConvocatoriaRegistroService {
  create(createConvocatoriaRegistroDto: CreateConvocatoriaRegistroDto) {
    return 'This action adds a new convocatoriaRegistro';
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
