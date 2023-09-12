import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFinanciadoresRegistroDto, Entidad, Relacion, Sociedad } from './create-financiadores-registro.dto';
import { IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';
import { PersonaContactoDto } from './personaContactodto';

export class UpdateFinanciadoresRegistroDto extends PartialType(CreateFinanciadoresRegistroDto) {

    @IsNotEmpty()
	@IsMongoId()
		_id: ObjectId;
        
        @ApiProperty({ example: "CaixaBank" })
        @IsString()
        @IsNotEmpty()
        "nombre-entidad": string;
    
    
        @ApiProperty({example:"fact1234"})
        @IsString()
        "CIF":string;
    
        @ApiProperty({ example: ["Organismo pùblico", "Empresa privada", "OSAL"] })
        @IsString()
        @IsEnum(Entidad)
        @IsNotEmpty()
        "entidad": string;
    
        @ApiProperty({ example: ["Mercantil", "Asociación", "Fundación", "Cooperativa", "Organismo"] })
        @IsString()
        @IsEnum(Sociedad)
        @IsNotEmpty()
        "sociedad-tipo": string;
      
       @ApiProperty({ example: "http://factoriaf5.com" })
       @IsString()
        "sitio-web": string;
     
      
        @ApiProperty({example:["Cliente","Donante"]})
        @IsEnum(Relacion)
        @IsString()
        "relacion":string;
      
        @ApiProperty({example:"Carrer de LLiri 35,Barcelona"})
        @IsString()
        "direccion-principal":string;
      
        @ApiProperty({example:"654-678-897"})
        @IsNumber()
        "telefono-principal":number;
    
       @ApiProperty({example:"factoriaf5@mail.com"})
       @IsString()
        "email":string;
      
        @ApiProperty({ type: PersonaContactoDto })
        @IsNotEmpty()
        "persona-contacto": PersonaContactoDto;



}
