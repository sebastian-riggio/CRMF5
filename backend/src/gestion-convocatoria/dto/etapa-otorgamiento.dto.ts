import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsEnum, IsNumber, IsString } from "class-validator";

enum EstadoSolicitud {
    aprobada = "aprobada",
    denegada = "denegada"
}

export class EtapaOtorgamientoDto {
@ApiProperty({example:"4/9/2023"})
@IsDate()
fechaResolucionFinal:Date;

@ApiProperty({example:"aprobada/denegada"})
@IsEnum(EstadoSolicitud)
@IsBoolean()
estadoSolicitud:boolean; 

@ApiProperty({example:"20000"})
@IsNumber()
montoConcedido:number;

@ApiProperty({example:"21/9/2023"})
@IsDate()
fechaPrimerDesembolso:Date;

@ApiProperty({example:"23/9/23"})
@IsString()
fechaRecepcionDesembolso:Date;

@ApiProperty({example:"10000"})
@IsNumber()
montoPrimerDesembolso:number;

@ApiProperty({example:"20%"})
@IsNumber()
porcientoPrimerDesembolso:number;

@ApiProperty({example:"26/9/2023"})
@IsDate()
fechaInicioGastos:Date;

@ApiProperty({example:"28/9/2023"})
@IsDate()
fechaFinalizacionGastos:Date;

@ApiProperty({example:"1/10/2023"})
@IsDate()
fechaPrimerSeguimiento:Date;

@ApiProperty({example:"3/10/2023"})
@IsDate()
fechaLimiteInformeFinalTecnico:Date;

@ApiProperty({example:"6/10/2023"})
@IsDate()
fechaLimiteInformeFinalEconomico:string;

@ApiProperty({example:"(mensual, trimestral, semestral, anual, solo informe final)"})
@IsString()
seguimientoInformes:string;

@ApiProperty({example:"PDF"})
@IsString()
adjuntarResolucionOtorgamiento:string; 

}