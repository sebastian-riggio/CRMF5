import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateProyectosRegistroDto {
  @ApiProperty({ example: 'P8 Mixta' })
  @IsString()
  proyectoNombre: string;

  @ApiProperty({ example: 'Factoria F5 - Dirección general ' })
  @IsString()
  centroGestor: string;

  @ApiProperty({ example: 'Jesús Rivera' })
  @IsString()
  responsable: string;

  @ApiProperty({ example: '6 meses' })
  @IsString()
  proyectoDuracion: string;

  @ApiProperty({ example: 23000 })
  @IsNumber()
  proyectoPresupuesto: number;

  @ApiProperty({ example: 15000 })
  @IsNumber()
  factoriaPresupuesto: number;

  @ApiProperty({example:"20/3/2023"})
  @IsDate()
  fechaInicio:Date;
  
  @ApiProperty({example:"20/3/2023"})
  @IsDate()
  fechaCierre:Date;

}
