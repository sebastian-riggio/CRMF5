import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument, Types,Document } from "mongoose";
import { ProyectosRegistro } from "src/proyectos-registros/schema/proyectos-registro.schema";
import { EtapaSolicitudDto } from "../dto/etapa-solicitud.dto";

export type GestionDocument = HydratedDocument<GestionConvocatoria>;

@Schema()
export class GestionConvocatoria extends Document {

@ApiProperty({example:"Proyecto Factoria"})
@Prop({type:Types.ObjectId,ref:'ProyectosRegistro'})
"proyecto":ProyectosRegistro

@ApiProperty({example:"R-0001-20230912"})
@Prop({unique:true})
"codigo-interno":string;

@ApiProperty({example:"Etapa Solicitud"})
@Prop({type:EtapaSolicitudDto})
"etapa-solicitud":EtapaSolicitudDto;



}


export const GestionSchema = SchemaFactory.createForClass(GestionConvocatoria)