import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean,IsDate,IsNumber, IsString } from "class-validator";


export class CreateConvocatoriaRegistroDto {

@ApiProperty({example:"Factoria F5"})
@IsString()
entidadConvocante:string;

@ApiProperty({example:"Recursos Humanos"})
@IsString()
departamentoConvocante:string;

@ApiProperty({example:"Formacìon P8"})
@IsString()
titulo:string;

@ApiProperty({example:"http//:factoriaf5.com"})
@IsString()
publicacionOficial:string;

@ApiProperty({example:"http//:factoria-convocatoria.com"})
@IsString()
convocatoriaEnlace:string;

@ApiProperty({example:"Programacíon"})
@IsString()
tematica:string;

@ApiProperty({example:"Palabras claves o texto???"})
@IsString()
trabajoLineas:string;

@ApiProperty({example:["Sin animo de lucro","Financieras","Impacto Social"]})
@IsString()
dirigidoEntidades:string;

@ApiProperty({example:"20/10/2023"})
@IsDate()
fechaApertura:Date;

@ApiProperty({example:"20/10/2023"})
@IsDate()
fechaCierre:Date;

@ApiProperty({example:"20/10/2023"})
@IsDate()
fechaResolucion:Date;

@ApiProperty({example:"5 meses"})
@IsString()
periodoEjecucion:string;

@ApiProperty({example:"20/10/2023"})
@IsDate()
fechaJustificacion:Date;

@ApiProperty({example:["si","no"]})
@IsBoolean()
auditoria:boolean;

@ApiProperty({example:"40000 euros"})
@IsNumber()
presupuesto:number;


@ApiProperty({example:"palabras claves etc.."})
@IsString()
otraInformacion:string;

@ApiProperty({example:"PDF"})
@IsString()
memoriaTecnica: string;

 @ApiProperty({example:"PDF"})
@IsString()
modeloPresupuesto:string;


@ApiProperty({example:"PDF"})
@IsString()
formularioSolicitud:string;


@ApiProperty({example:"PDF"})
@IsString()
otraDocumentacion:string; 
}
