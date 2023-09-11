import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class AdjuntarDto {
@ApiProperty({example:"PDF"})
@IsString()
"memoria-tecnica":string;

@ApiProperty({example:"PDF"})
@IsString()
"presupuesto":string;


@ApiProperty({example:"PDF"})
@IsString()
"formulario-solicitud":string;


@ApiProperty({example:"PDF"})
@IsString()
"otra-documentacion":string;
}

