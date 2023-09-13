import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";

enum EstadoSolicitud {
    aprobada = "aprobada",
    denegada = "denegada"
}

export class EtapaOtorgamientoDto {
/* @ApiProperty({example:"4/9/2023"})
@IsString()
"fecha-resolucion-final":string;

@ApiProperty({example:"aprobada/denegada"})
@IsEnum(EstadoSolicitud)
@IsString()
"estado-solicitud":string; */

@ApiProperty({example:"20000"})
@IsNumber()
"monto-concedido":number;

/* @ApiProperty({example:"21/9/2023"})
@IsString()
"fecha-primer-desembolso":string;

@ApiProperty({example:"23/9/23"})
@IsString()
"fecha-recepcion-desembolso":string; */

@ApiProperty({example:"10000"})
@IsNumber()
"monto-primer-desembolso":number;

@ApiProperty({example:"20%"})
@IsNumber()
"porciento-primer-desembolso":number;

/* @ApiProperty({example:"26/9/2023"})
@IsString()
"fecha-inicio-gastos":string;

@ApiProperty({example:"28/9/2023"})
@IsString()
"fecha-finalizacion-gastos":string;

@ApiProperty({example:"1/10/2023"})
@IsString()
"fecha-primer-seguimiento":string;

@ApiProperty({example:"3/10/2023"})
@IsString()
"fecha-limite-informe-final-tecnico":string;

@ApiProperty({example:"6/10/2023"})
@IsString()
"fecha-limite-informe-final-economico":string;

@ApiProperty({example:"(mensual, trimestral, semestral, anual, solo informe final)"})
@IsString()
"seguimiento-informes":string;

@ApiProperty({example:"PDF"})
@IsString()
"adjuntar-resolucion-otorgamiento":string; */

}