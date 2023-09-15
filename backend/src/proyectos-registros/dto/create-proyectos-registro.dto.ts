import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProyectosRegistroDto {
  @ApiProperty({ example: 'P8 Mixta' })
  @IsString()
  'proyecto-nombre': string;

  @ApiProperty({ example: 'Factoria F5 - Dirección general ' })
  @IsString()
  'centro-gestor': string;

  @ApiProperty({ example: 'Jesús Rivera' })
  @IsString()
  'responsable': string;

  @ApiProperty({ example: '6 meses' })
  @IsString()
  'proyecto-duracion': string;

  @ApiProperty({ example: 23000 })
  @IsNumber()
  'proyecto-presupuesto': number;

  @ApiProperty({ example: 15000 })
  @IsNumber()
  'factoria-presupuesto': number;
}
