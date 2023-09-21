import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProyectosRegistroDto} from './create-proyectos-registro.dto';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class UpdateProyectosRegistroDto extends PartialType(CreateProyectosRegistroDto) {
    @IsNotEmpty()
    @IsMongoId()
    _id:ObjectId;

@ApiProperty()
@IsString()
proyectoNombre: string;

    @ApiProperty({example:"Factoria F5 - Dirección general "})
    @IsString()
    centroGestor:string;
   
    @ApiProperty({example:"Jesús Rivera"})
    @IsString()
    responsable:string;
   
    
   @ApiProperty({example:"6 meses"})
   @IsString()
   proyectoDuracion:string;
   
   @ApiProperty({example:23000})
   @IsNumber()
   proyectoPresupuesto:number;
   
   @ApiProperty({example:15000})
   @IsNumber()
   factoriaPresupuesto:number;





}
