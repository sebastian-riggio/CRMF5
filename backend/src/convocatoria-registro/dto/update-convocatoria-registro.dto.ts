import { PartialType } from '@nestjs/swagger';
import { CreateConvocatoriaRegistroDto } from './create-convocatoria-registro.dto';

export class UpdateConvocatoriaRegistroDto extends PartialType(CreateConvocatoriaRegistroDto) {}
