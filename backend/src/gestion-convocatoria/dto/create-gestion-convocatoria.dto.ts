import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDate, IsEnum, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { ProyectosRegistro } from "../../proyectos-registros/schema/proyectos-registro.schema";
import { EtapaOtorgamientoDto } from "./etapa-otorgamiento.dto";
import { EtapaResolucionDto } from "./etapa-resolucion.dto";
import { EtapaJustificacionDto } from "./etapa-justificacion.dto";
import { EtapaCierreDto } from "./etapa-cierre.dto";
import { ConvocatoriaRegistro } from "../../convocatoria-registro/schema/convocatoria-registro.schema";

export enum Estados {
    SOLICITUD = 'solicitud',
   NEGOCIACION = 'negociacion',
    OTORGAMIENTO = 'otorgamiento',
    JUSTIFICACION = 'justificacion',
    CIERRE = 'cierre',
}

export class CreateGestionConvocatoriaDto {
@ApiProperty({example:"financiacion patra cursos educativos online"})
@IsObject()
convocatoria:ConvocatoriaRegistro


@ApiProperty({example:"Ayuntamiento Barcelona"})
@IsObject()
financiador:ConvocatoriaRegistro


@ApiProperty({ example: "Proyecto Factoria" })
@IsObject()
proyecto: ProyectosRegistro; 

@ApiProperty({example:"R-0001-20230912"})
@IsString()
codigoInterno:string;


@ApiProperty({example:"Jesus Rivera"})
@IsString()
responsable:string

@ApiProperty({example:"20/9/2023"})
@IsDate()
fechaPropuesta:Date;

@ApiProperty({example:"12345"})
@IsNumber()
numeroTramite:number;

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

@ApiProperty({example:"Etapa Justificaciòn"})
@IsArray()
etapaJustificacion:EtapaJustificacionDto;


@ApiProperty({example:"Etapa Cierre"})
@IsArray()
etapaCierre:EtapaCierreDto; 

@ApiProperty({example:'solicitud'})
@IsEnum(Estados)
estado:Estados
}
