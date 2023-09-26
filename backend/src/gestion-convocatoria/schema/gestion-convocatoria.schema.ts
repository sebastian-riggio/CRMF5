import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument, Types,Document } from "mongoose";
import { EtapaSolicitudDto } from "../dto/etapa-solicitud.dto";
import { EtapaResolucionDto } from "../dto/etapa-resolucion.dto";
import { EtapaOtorgamientoDto } from "../dto/etapa-otorgamiento.dto";
import { EtapaJustificacionDto } from "../dto/etapa-justificacion.dto";
import { EtapaCierreDto } from "../dto/etapa-cierre.dto";


export type GestionDocument = HydratedDocument<GestionConvocatoria>;

@Schema()
export class GestionConvocatoria extends Document {

@ApiProperty({example:"financiacion para cursos educativos online"})
@Prop()
convocatoria:string;

@ApiProperty({example:"Ayuntamiento Barcelona"})
@Prop({type:Types.ObjectId,ref:"ConvocatoriaRegistro"})
financiador:Types.ObjectId

@ApiProperty({example:"Proyectos de Factoria"})
@Prop({type:Types.ObjectId,ref:'ProyectosRegistro'})
proyecto:Types.ObjectId

@ApiProperty({example:"Fechaapertura"})
@Prop({type:Types.ObjectId,ref:"ConvocatoriaRegistro"})
fechaApertura:Types.ObjectId

@ApiProperty({example:"fechaCierre"})
@Prop({type:Types.ObjectId,ref:"ConvocatoriaRegistro"})
fechaCierre:Types.ObjectId

@ApiProperty({example:"R-0001-20230912"})
@Prop()
codigoInterno:string;

@ApiProperty({example:"Etapa Solicitud"})
@Prop({type:EtapaSolicitudDto})
etapaSolicitud:EtapaSolicitudDto;

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

}


export const GestionSchema = SchemaFactory.createForClass(GestionConvocatoria)