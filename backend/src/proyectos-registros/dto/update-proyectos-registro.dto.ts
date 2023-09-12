import { PartialType } from '@nestjs/swagger';
import { CreateProyectosRegistroDto } from './create-proyectos-registro.dto';

export class UpdateProyectosRegistroDto extends PartialType(CreateProyectosRegistroDto) {}
