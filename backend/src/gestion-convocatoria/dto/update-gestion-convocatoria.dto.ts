import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateGestionConvocatoriaDto } from "./create-gestion-convocatoria.dto";
import { EtapaSolicitudDto } from "./etapa-solicitud.dto";
import { EtapaResolucionDto } from "./etapa-resolucion.dto";
import { EtapaOtorgamientoDto } from "./etapa-otorgamiento.dto";
import { EtapaJustificacionDto } from "./etapa-justificacion.dto";
import { EtapaCierreDto } from "./etapa-cierre.dto";
import { IsArray, IsDate, IsNumber, IsString} from "class-validator";

export class UpdateGestionConvocatoriaDto extends PartialType(
  CreateGestionConvocatoriaDto
) {

 

@ApiProperty({example:"Jesus Rivera"})
@IsString()
responsable:string

@ApiProperty({example:"20/9/2023"})
@IsDate()
fechaPropuesta:Date;

@ApiProperty({example:"12345"})
@IsString()
numeroTramite:string;

@ApiProperty({example:"f459239"})
@IsString()
numeroExpediente:string;

@ApiProperty({example:"PDF"})
@IsString()
reciboOficial:string;

  @ApiProperty({ example: "Etapa Resolucion" })
  @IsArray()
  etapaResolucion: EtapaResolucionDto;

  @ApiProperty({ example: "Etapa Otorgamiento" })
  @IsArray()
  etapaOtorgamiento: EtapaOtorgamientoDto;

  @ApiProperty({ example: "Etapa Justificaciòn" })
  @IsArray()
  etapaJustificacion: EtapaJustificacionDto;

  @ApiProperty({ example: "Etapa Cierre" })
  @IsArray()
  etapaCierre: EtapaCierreDto;

}
