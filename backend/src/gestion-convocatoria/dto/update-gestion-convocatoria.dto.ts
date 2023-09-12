import { PartialType } from '@nestjs/swagger';
import { CreateGestionConvocatoriaDto } from './create-gestion-convocatoria.dto';

export class UpdateGestionConvocatoriaDto extends PartialType(CreateGestionConvocatoriaDto) {}
