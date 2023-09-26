import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";


export class EtapaResolucionDto {
@ApiProperty({example:"20/9/2023"})
@IsDate()
fechaResolucion:Date;

@ApiProperty({example:"24/9/2023"})
@IsDate()
fechaLimiteEntrega:Date;

@ApiProperty({example:"28/9/2023"})
@IsDate()
fechaRealEntrega:Date;

@ApiProperty({example:"30/9/2023"})
@IsDate()
fechaLimiteResponder:Date;

@ApiProperty({example:"31/9/2023"})
@IsDate()
fechaRealRespuesta:Date;

@ApiProperty({example:"Notas del proceso"})
@IsString()
notas:string;

@ApiProperty({example:"PDF"})
@IsString()
adjuntarResolucion:string;

}