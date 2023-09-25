import { PartialType } from '@nestjs/swagger';
import { CreateConvocatoriaRegistroDto } from './create-convocatoria-registro.dto';
import {
  IsBoolean,
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ObjectId } from 'mongoose';

export class UpdateConvocatoriaRegistroDto extends PartialType(
  CreateConvocatoriaRegistroDto,
) {
  @IsNotEmpty()
  @IsMongoId()
  _id: ObjectId;

  @IsString()
  entidadConvocante: string;

  @IsString()
  departamentoConvocante: string;

  @IsString()
  titulo: string;

  @IsString()
  publicacionOficial: string;

  @IsString()
  convocatoriaEnlace: string;

  @IsString()
  tematica: string;

  @IsString()
  trabajoLineas: string;

  @IsString()
  dirigidoEntidades: string;

  @IsString()
  fechaApertura: Date;

  @IsDate()
  fechaCierre: Date;

  @IsDate()
  fechaResolucion: Date;

  @IsString()
  periodoEjecucion: string;

  @IsDate()
  fechaJustificacion:Date;

  @IsBoolean()
  auditoria: boolean;

  @IsNumber()
  presupuesto: number;

  @IsString()
  otraInformacion: string;

  @IsString()
  memoriaTecnica: string;

  @IsString()
  modeloPresupuesto: string;

  @IsString()
  formularioSolicitud: string;

  @IsString()
  otraDocumentacion: string;
}
