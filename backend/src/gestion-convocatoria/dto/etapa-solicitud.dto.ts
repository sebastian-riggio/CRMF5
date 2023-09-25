import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class EtapaSolicitudDto {


@ApiProperty({example:"Jesus Rivera"})
@IsString()
responsable:string

@ApiProperty({example:"20/9/2023"})
@IsString()
fechaPropuesta:string;

@ApiProperty({example:"12345"})
@IsNumber()
numeroTramite:number;

@ApiProperty({example:"f459239"})
@IsString()
numeroExpediente:string;

@ApiProperty({example:"PDF"})
@IsString()
reciboOficial:string;

}