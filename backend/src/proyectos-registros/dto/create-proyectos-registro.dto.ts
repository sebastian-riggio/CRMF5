import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";

export enum Gestor {
    people = "Factoria F5 - People and culture",
    admin = "Factoria F5 - Admin, contabilidad y finanzas",
    oficina = "Factoria F5 - Oficina soporte proyectos y calidad",
    direccion = "Factoría F5 - Dirección general "

}


export class CreateProyectosRegistroDto {
 
 @ApiProperty({example:"P8 Mixta"})
 @IsString()
 "proyecto-nombre":string;

 @ApiProperty({example:"Factoria F5 - Dirección general "})
 @IsEnum(Gestor)
 "centro-gestor":string;

 @ApiProperty({example:"Jesús Rivera"})
 @IsString()
 "responsable":string;

 
@ApiProperty({example:"6 meses"})
@IsString()
"proyecto-duracion":string;

@ApiProperty({example:23000})
@IsNumber()
"proyecto-presupuesto":number;

@ApiProperty({example:15000})
@IsNumber()
"factoria-presupuesto":number;

}
