import { PartialType } from '@nestjs/swagger';
import { CreateConvocatoriaRegistroDto } from './create-convocatoria-registro.dto';
import { IsBoolean, IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';
import { AdjuntarDto } from './adjuntarDto';

export class UpdateConvocatoriaRegistroDto extends PartialType(CreateConvocatoriaRegistroDto) {
    
@IsNotEmpty()
@IsMongoId()
_id:ObjectId;

@IsString()
entidadConvocante:string;

@IsString()
departamentoConvocante:string;

@IsString()
titulo:string;

@IsString()
publicacionOficial:string;

@IsString()
convocatoriaEnlace:string;

@IsString()
tematica:string;

@IsString()
trabajoLineas:string;

@IsString()
dirigidoEntidades:string;


@IsString()
fechaApertura:string;

@IsString()
fechaCierre:string;

@IsString()
fechaResolucion:string;

@IsString()
periodoEjecucion:string;

@IsString()
fechaJustificacion:string;

@IsBoolean()
auditoria:boolean;

@IsNumber()
presupuesto:number;

@IsString()
otraInformacion:string;

@IsString()
documentacion:AdjuntarDto;
}
