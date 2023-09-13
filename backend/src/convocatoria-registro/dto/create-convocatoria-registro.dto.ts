import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean,IsNumber, IsString } from "class-validator";
import { AdjuntarDto } from "./adjuntarDto";




export class CreateConvocatoriaRegistroDto {

@ApiProperty({example:"Factoria F5"})
@IsString()
"entidad-convocante":string;

@ApiProperty({example:"Recursos Humanos"})
@IsString()
"departamento-convocante":string;

@ApiProperty({example:"Formacìon P8"})
@IsString()
"titulo":string;

@ApiProperty({example:"http//:factoriaf5.com"})
@IsString()
"publicacion-oficial":string;

@ApiProperty({example:"http//:factoria-convocatoria.com"})
@IsString()
"convocatoria-enlace":string;

@ApiProperty({example:"Programacíon"})
@IsString()
"tematica":string;

@ApiProperty({example:"Palabras claves o texto???"})
@IsString()
"trabajo-lineas":string;

@ApiProperty({example:["Sin animo de lucro","Financieras","Impacto Social"]})
@IsString()
"dirigido-entidades":string;

@ApiProperty({example:"20/10/2023"})
@IsString()
"fecha-apertura":string;

@ApiProperty({example:"20/10/2023"})
@IsString()
"fecha-cierre":string;

@ApiProperty({example:"20/10/2023"})
@IsString()
"fecha-resolucion":string;

@ApiProperty({example:"5 meses"})
@IsString()
"periodo-ejecucion":string;

@ApiProperty({example:"20/10/2023"})
@IsString()
"fecha-justificacion":string;

@ApiProperty({example:["si","no"]})
@IsBoolean()
"auditoria":boolean;

@ApiProperty({example:"40000 euros"})
@IsNumber()
"presupuesto":number;


@ApiProperty({example:"palabras claves etc.."})
@IsString()
"otra-informacion":string;

@ApiProperty({example:"PDF"})
@IsString()
"documentacion":AdjuntarDto;
}
