import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";

enum EstadoSolicitud {
    aprobada = "aprobada",
    denegada = "denegada"
}

export class EtapaOtorgamientoDto {
 @ApiProperty({example:"4/9/2023"})
@IsString()
fechaResolucionFinal:string;

@ApiProperty({example:"aprobada/denegada"})
@IsEnum(EstadoSolicitud)
@IsString()
estadoSolicitud:string; 

@ApiProperty({example:"20000"})
@IsNumber()
montoConcedido:number;

 @ApiProperty({example:"21/9/2023"})
@IsString()
fechaPrimerDesembolso:string;

@ApiProperty({example:"23/9/23"})
@IsString()
fechaRecepcionDesembolso:string; 

@ApiProperty({example:"10000"})
@IsNumber()
montoPrimerDesembolso:number;

@ApiProperty({example:"20%"})
@IsNumber()
porcientoPrimerDesembolso:number;

 @ApiProperty({example:"26/9/2023"})
@IsString()
fechaInicioGastos:string;

@ApiProperty({example:"28/9/2023"})
@IsString()
fechaFinalizacionGastos:string;

@ApiProperty({example:"1/10/2023"})
@IsString()
fechaPrimerSeguimiento:string;

@ApiProperty({example:"3/10/2023"})
@IsString()
fechaLimiteInformeFinalTecnico:string;

@ApiProperty({example:"6/10/2023"})
@IsString()
fechaLimiteInformeFinalEconomico:string;

@ApiProperty({example:"(mensual, trimestral, semestral, anual, solo informe final)"})
@IsString()
seguimientoInformes:string;

@ApiProperty({example:"PDF"})
@IsString()
adjuntarResolucionOtorgamiento:string; 

}