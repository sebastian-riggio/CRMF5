import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class EtapaResolucionDto {
@ApiProperty({example:"20/9/2023"})
@IsString()
"fecha-resolucion":string;

@ApiProperty({example:"24/9/2023"})
@IsString()
"fecha-limite-entrega":string

@ApiProperty({example:"28/9/2023"})
@IsString()
"fecha-real-entrega":string;

@ApiProperty({example:"30/9/2023"})
@IsString()
"fecha-limite-responder":string;

@ApiProperty({example:"31/9/2023"})
@IsString()
"fecha-real-respuesta":string;

@ApiProperty({example:"PDF"})
@IsString()
"adjuntar-resolucion":string;

}