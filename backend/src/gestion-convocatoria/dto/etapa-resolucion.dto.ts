import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class EtapaResolucionDto {
@ApiProperty({example:"20/9/2023"})
@IsString()
fechaResolucion:string;

@ApiProperty({example:"24/9/2023"})
@IsString()
fechaLimiteEntrega:string

@ApiProperty({example:"28/9/2023"})
@IsString()
fechaRealEntrega:string;

@ApiProperty({example:"30/9/2023"})
@IsString()
fechaLimiteResponder:string;

@ApiProperty({example:"31/9/2023"})
@IsString()
fechaRealRespuesta:string;

@ApiProperty({example:"Notas del proceso"})
@IsString()
notas:string;

@ApiProperty({example:"PDF"})
@IsString()
adjuntarResolucion:string;

}