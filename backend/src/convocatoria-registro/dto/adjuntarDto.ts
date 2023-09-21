import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class AdjuntarDto {
@ApiProperty({example:"PDF"})
@IsString()
memoriaTecnica:string;

/* @ApiProperty({example:"PDF"})
@IsString()
modeloPresupuesto:string;


@ApiProperty({example:"PDF"})
@IsString()
formularioSolicitud:string;


@ApiProperty({example:"PDF"})
@IsString()
otraDocumentacion:string; */
}

