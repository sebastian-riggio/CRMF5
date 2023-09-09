import { PartialType } from '@nestjs/swagger';
import { CreateFinanciadoresRegistroDto } from './create-financiadores-registro.dto';

export class UpdateFinanciadoresRegistroDto extends PartialType(CreateFinanciadoresRegistroDto) {}
