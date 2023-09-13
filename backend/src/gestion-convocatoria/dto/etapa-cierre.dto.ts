import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";


export class EtapaCierreDto{
@ApiProperty({example:"2/11/2023"})
@IsString()
"fecha-aprobacion-oficial":string;

@ApiProperty({example:"aprobada"})
@IsString()
"estado-resolucion":string;

@ApiProperty({example:"23/11/2023"})
@IsString()
"fecha-recepcion-pago-final":string;

@ApiProperty({example:"18000"})
@IsNumber()
"monto-total-recibido":number;

@ApiProperty({example:"20%"})
@IsNumber()
"ultimo-pago-porcentaje":number;

@ApiProperty({example:"PDF"})
@IsString()
"documento-cierre":string;





}