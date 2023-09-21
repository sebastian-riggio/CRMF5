import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateGestionConvocatoriaDto } from "./create-gestion-convocatoria.dto";
import { EtapaSolicitudDto } from "./etapa-solicitud.dto";
import { EtapaResolucionDto } from "./etapa-resolucion.dto";
import { EtapaOtorgamientoDto } from "./etapa-otorgamiento.dto";
import { EtapaJustificacionDto } from "./etapa-justificacion.dto";
import { EtapaCierreDto } from "./etapa-cierre.dto";
import { IsArray, IsString } from "class-validator";

export class UpdateGestionConvocatoriaDto extends PartialType(
  CreateGestionConvocatoriaDto
) {


  @ApiProperty({ example: "Etapa Solicitud" })
  @IsArray()
  "etapa-solicitud": EtapaSolicitudDto;

  @ApiProperty({ example: "Etapa Resolucion" })
  @IsArray()
  "etapa-resolucion": EtapaResolucionDto;

  @ApiProperty({ example: "Etapa Otorgamiento" })
  @IsArray()
  "etapa-otorgamiento": EtapaOtorgamientoDto;

  @ApiProperty({ example: "Etapa Justificaciòn" })
  @IsArray()
  "etapa-justificacion": EtapaJustificacionDto;

  @ApiProperty({ example: "Etapa Cierre" })
  @IsArray()
  "etapa-cierre": EtapaCierreDto;
}
