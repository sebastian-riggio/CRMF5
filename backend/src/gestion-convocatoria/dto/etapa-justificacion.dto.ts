import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class EtapaJustificacionDto {
@ApiProperty({example:"20/10/2023"})
@IsString()
fechaEntrega:string;

@ApiProperty({example:"25/10/2023"})
@IsString()
fechaLimitePrimerRequerimiento:string;

@ApiProperty({example:"28/10/2023"})
@IsString()
fechaRespuestaRequerimientoPrimero:string;

@ApiProperty({example:"30/10/2023"})
@IsString()
fechaLimiteSegundoRequerimiento:string;

@ApiProperty({example:"1/11/2023"})
@IsString()
fechaRespuestaRequerimientoSegundo:string;

@ApiProperty({example:"Solo son notas de seguimientos de estado del proyecto"})
@IsString()
notas:string;

}