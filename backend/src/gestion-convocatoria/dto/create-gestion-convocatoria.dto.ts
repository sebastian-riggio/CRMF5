import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";
import { ProyectosRegistro } from "../../proyectos-registros/schema/proyectos-registro.schema";
import { EtapaSolicitudDto } from "./etapa-solicitud.dto";
import { EtapaOtorgamientoDto } from "./etapa-otorgamiento.dto";
import { EtapaResolucionDto } from "./etapa-resolucion.dto";
import { EtapaJustificacionDto } from "./etapa-justificacion.dto";
import { EtapaCierreDto } from "./etapa-cierre.dto";
import { ConvocatoriaRegistro } from "../../convocatoria-registro/schema/convocatoria-registro.schema";

export class CreateGestionConvocatoriaDto {
@ApiProperty({example:"financiacion patra cursos educativos online"})
@IsString()
convocatoria:string;


@ApiProperty({example:"Ayuntamiento Barcelona"})
@IsString()
financiador:ConvocatoriaRegistro


@ApiProperty({ example: "Proyecto Factoria" })
@IsString()
proyecto: ProyectosRegistro;

@ApiProperty({example:"20/4/2023"})
@IsString()
fechaApertura:ConvocatoriaRegistro

@ApiProperty({example:"R-0001-20230912"})
@IsString()
codigoInterno:string;

@ApiProperty({ example: "Etapa Solicitud" })
@IsArray()
etapaSolicitud: EtapaSolicitudDto;

@ApiProperty({ example: "Etapa Resolucion" })
@IsArray()
etapaResolucion: EtapaResolucionDto;

@ApiProperty({ example: "Etapa Otorgamiento" })
@IsArray()
etapaOtorgamiento: EtapaOtorgamientoDto;

@ApiProperty({example:"Etapa Justificaciòn"})
@IsArray()
etapaJustificacion:EtapaJustificacionDto;


@ApiProperty({example:"Etapa Cierre"})
@IsArray()
etapaCierre:EtapaCierreDto;  
}
