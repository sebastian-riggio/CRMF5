import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";
import { ProyectosRegistro } from "src/proyectos-registros/schema/proyectos-registro.schema";
import { EtapaSolicitudDto } from "./etapa-solicitud.dto";




export class CreateGestionConvocatoriaDto {

    @ApiProperty({example:"Proyecto Factoria"})
    @IsString()
    "proyecto":ProyectosRegistro

    @ApiProperty({example:"Etapa Solicitud"})
    @IsArray()
     "etapa-solicitud":EtapaSolicitudDto


}
