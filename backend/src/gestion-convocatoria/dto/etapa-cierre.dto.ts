import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";


export class EtapaCierreDto{
@ApiProperty({example:"2/11/2023"})
@IsString()
fechaAprobacionOficial:string;

@ApiProperty({example:"aprobada"})
@IsString()
estadoResolucion:string;

@ApiProperty({example:"23/11/2023"})
@IsString()
fechaRecepcionPagoFinal:string;

@ApiProperty({example:"18000"})
@IsNumber()
montoTotalRecibido:number;

@ApiProperty({example:"20%"})
@IsNumber()
ultimoPagoPorcentaje:number;

@ApiProperty({example:"PDF"})
@IsString()
documentoCierre:string;





}