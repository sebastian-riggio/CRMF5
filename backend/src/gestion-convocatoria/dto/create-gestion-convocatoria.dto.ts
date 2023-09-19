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
"convocatoria":string;


@ApiProperty({example:"Ayuntamiento Barcelona"})
@IsString()
"financiador":ConvocatoriaRegistro


@ApiProperty({ example: "Proyecto Factoria" })
@IsString()
"proyecto": ProyectosRegistro;

@ApiProperty({example:"R-0001-20230912"})
@IsString()
"codigo-interno":string;

@ApiProperty({ example: "Etapa Solicitud" })
@IsArray()
"etapa-solicitud": EtapaSolicitudDto;

@ApiProperty({ example: "Etapa Resolucion" })
@IsArray()
"etapa-resolucion": EtapaResolucionDto;

@ApiProperty({ example: "Etapa Otorgamiento" })
@IsArray()
"etapa-otorgamiento": EtapaOtorgamientoDto;

@ApiProperty({example:"Etapa Justificaciòn"})
@IsArray()
"etapa-justificacion":EtapaJustificacionDto;


@ApiProperty({example:"Etapa Cierre"})
@IsArray()
"etapa-cierre":EtapaCierreDto;  
}
