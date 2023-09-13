import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";




export class EtapaSolicitudDto {


@ApiProperty({example:"Jesus Rivera"})
@IsString()
"responsable":string

@ApiProperty({example:"20/9/2023"})
@IsString()
"fecha-propuesta":string;

@ApiProperty({example:"12345"})
@IsNumber()
"numero-tramite":number;

@ApiProperty({example:"f459239"})
@IsString()
"numero-expediente":string;

@ApiProperty({example:"PDF"})
@IsString()
"recibo-oficial":string;

}