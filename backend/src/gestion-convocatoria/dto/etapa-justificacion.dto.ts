import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class EtapaJustificacionDto {
@ApiProperty({example:"20/10/2023"})
@IsString()
"fecha-entrega":string;

@ApiProperty({example:"25/10/2023"})
@IsString()
"fecha-limite-primer-requerimiento":string;

@ApiProperty({example:"28/10/2023"})
@IsString()
"fecha-respuesta-requerimiento-primero":string;

@ApiProperty({example:"30/10/2023"})
@IsString()
"fecha-limite-segundo-requerimiento":string;

@ApiProperty({example:"1/11/2023"})
@IsString()
"fecha-respuesta-requerimiento-segundo":string;

@ApiProperty({example:"Solo son notas de seguimientos de estado del proyecto"})
@IsString()
"notas":string;







}