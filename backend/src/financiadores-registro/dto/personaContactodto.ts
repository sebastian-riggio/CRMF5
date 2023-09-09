import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class  PersonaContactoDto {

@ApiProperty({example:"Juan"})
@IsString()    
"nombre": string;
  
@IsString() 
@ApiProperty({ example: "Pérez" })
"apellidos": string;

@IsString() 
@ApiProperty({ example: "Recursos-Humanos" })
"departamento": string;

@IsString() 
@ApiProperty({ example: "Gerente" })
"cargo": string;

@IsNumber()
@ApiProperty({ example: "123-456-789" })
"telèfono": number;

@IsString()
@ApiProperty({ example: "juan@example.com" })
"email": string;

}