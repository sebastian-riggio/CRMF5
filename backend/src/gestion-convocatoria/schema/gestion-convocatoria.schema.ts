import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument, Types,Document } from "mongoose";
import { ProyectosRegistro } from "src/proyectos-registros/schema/proyectos-registro.schema";
import { EtapaSolicitudDto } from "../dto/etapa-solicitud.dto";
import { EtapaResolucionDto } from "../dto/etapa-resolucion.dto";
import { EtapaOtorgamientoDto } from "../dto/etapa-otorgamiento.dto";
import { EtapaJustificacionDto } from "../dto/etapa-justificacion.dto";
import { EtapaCierreDto } from "../dto/etapa-cierre.dto";
import { ConvocatoriaRegistro } from "src/convocatoria-registro/schema/convocatoria-registro.schema";

export type GestionDocument = HydratedDocument<GestionConvocatoria>;

@Schema()
export class GestionConvocatoria extends Document {

@ApiProperty({example:"financiacion para cursos educativos online"})
@Prop()
"convocatoria":string;


@ApiProperty({example:"Ayuntamiento Barcelona"})
@Prop({type:Types.ObjectId,ref:"Convocatoria Registro"})
"financiador":ConvocatoriaRegistro

@ApiProperty({example:"Proyectos de Factoria"})
@Prop({type:Types.ObjectId,ref:'ProyectosRegistro'})
"proyecto":ProyectosRegistro


@ApiProperty({example:"R-0001-20230912"})
@Prop()
"codigo-interno":string;

@ApiProperty({example:"Etapa Solicitud"})
@Prop({type:EtapaSolicitudDto})
"etapa-solicitud":EtapaSolicitudDto;

 @ApiProperty({example:"Etapa Resolucion"})
@Prop({type:EtapaResolucionDto})
"etapa-resolucion":EtapaResolucionDto; 

@ApiProperty({example:"Etapa Otorgamiento"})
@Prop({type:EtapaOtorgamientoDto})
"etapa-otorgamiento":EtapaOtorgamientoDto;

@ApiProperty({example:"Etapa Justificaciòn"})
@Prop({type:EtapaJustificacionDto})
"etapa-justificacion":EtapaJustificacionDto;

@ApiProperty({example:"Etapa Cierre"})
@Prop({type:EtapaCierreDto})
"etapa-cierre":EtapaCierreDto;  

}


export const GestionSchema = SchemaFactory.createForClass(GestionConvocatoria)