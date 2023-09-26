import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";


export class EtapaJustificacionDto {
@ApiProperty({example:"20/10/2023"})
@IsDate()
fechaEntrega:Date;

@ApiProperty({example:"25/10/2023"})
@IsDate()
fechaLimitePrimerRequerimiento:Date;

@ApiProperty({example:"28/10/2023"})
@IsDate()
fechaRespuestaRequerimientoPrimero:Date;

@ApiProperty({example:"30/10/2023"})
@IsDate()
fechaLimiteSegundoRequerimiento:Date;

@ApiProperty({example:"1/11/2023"})
@IsDate()
fechaRespuestaRequerimientoSegundo:Date;

@ApiProperty({example:"Solo son notas de seguimientos de estado del proyecto"})
@IsString()
notas:string;

}