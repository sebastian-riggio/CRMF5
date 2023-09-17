import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProyectosRegistroDto} from './create-proyectos-registro.dto';
import { IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class UpdateProyectosRegistroDto extends PartialType(CreateProyectosRegistroDto) {
    @IsNotEmpty()
    @IsMongoId()
    _id:ObjectId;

    @ApiProperty({example:"P8 Mixta"})
    @IsString()
    "proyecto-nombre":string;
   
    @ApiProperty({example:"Factoria F5 - Dirección general "})
    @IsString()
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
