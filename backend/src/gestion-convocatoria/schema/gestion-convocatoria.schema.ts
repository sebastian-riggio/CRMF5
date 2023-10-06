import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument, Types,Document } from "mongoose";
import { EtapaResolucionDto } from "../dto/etapa-resolucion.dto";
import { EtapaOtorgamientoDto } from "../dto/etapa-otorgamiento.dto";
import { EtapaJustificacionDto } from "../dto/etapa-justificacion.dto";
import { EtapaCierreDto } from "../dto/etapa-cierre.dto";
import { Estados } from "../dto/create-gestion-convocatoria.dto";


export type GestionDocument = HydratedDocument<GestionConvocatoria>;

@Schema()
export class GestionConvocatoria extends Document {

@ApiProperty({example:"financiacion para cursos educativos online"})
@Prop()
convocatoria:Types.ObjectId;

@ApiProperty({example:"Ayuntamiento Barcelona"})
@Prop({type:Types.ObjectId,ref:"ConvocatoriaRegistro"})
financiador:Types.ObjectId
 
@ApiProperty({example:"Proyectos de Factoria"})
@Prop({type:Types.ObjectId,ref:'ProyectosRegistro'})
proyecto:Types.ObjectId 

@ApiProperty({example:"R-0001-20230912"})
@Prop()
codigoInterno:string;

@Prop()
responsable:string
@Prop()
fechaPropuesta:Date;
@Prop()
numeroTramite:string;
@Prop()
numeroExpediente:string;
@Prop()
reciboOficial:string;

 @ApiProperty({example:"Etapa Resolucion"})
@Prop({type:EtapaResolucionDto})
etapaResolucion:EtapaResolucionDto; 

@ApiProperty({example:"Etapa Otorgamiento"})
@Prop({type:EtapaOtorgamientoDto})
etapaOtorgamiento:EtapaOtorgamientoDto;

@ApiProperty({example:"Etapa Justificaciòn"})
@Prop({type:EtapaJustificacionDto})
etapaJustificacion:EtapaJustificacionDto;

@ApiProperty({example:"Etapa Cierre"})
@Prop({type:EtapaCierreDto})
etapaCierre:EtapaCierreDto;  

@ApiProperty({example:'solicitud'})
@Prop({enum: Estados})
estado: string;

}


export const GestionSchema = SchemaFactory.createForClass(GestionConvocatoria)