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
"entidad-convocante":string;

@IsString()
"departamento-convocante":string;

@IsString()
"titulo":string;

@IsString()
"publicacion-oficial":string;

@IsString()
"convocatoria-enlace":string;

@IsString()
"tematica":string;

@IsString()
"trabajo-lineas":string;

@IsString()
"dirigido-entidades":string;


@IsString()
"fecha-apertura":string;

@IsString()
"fecha-cierre":string;

@IsString()
"fecha-resolucion":string;

@IsString()
"periodo-ejecucion":string;

@IsString()
"fecha-justificacion":string;

@IsBoolean()
"auditoria":boolean;

@IsNumber()
"presupuesto":number;

@IsString()
"otra-informacion":string;

@IsString()
"documentacion":AdjuntarDto;
}
