import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document, HydratedDocument, Types } from "mongoose";
import { FinanciadoresRegistro } from "src/financiadores-registro/schema/financiadores-registro.schema";
import { AdjuntarDto } from "../dto/adjuntarDto";




export type ConvocatoriaDocument = HydratedDocument<ConvocatoriaRegistro>;

@Schema()
export class ConvocatoriaRegistro extends Document{

@ApiProperty({example:"Fcatoria F5"})
@Prop({ required: true, unique: true })
"entidad-convocante":string

@ApiProperty({example:"Recursos Humanos"})
@Prop()
"departamento-convocante":string;

@ApiProperty({example:"Formacìon P8"})
@Prop()
"titulo":string;

@ApiProperty({example:"http//:factoriaf5.com"})
@Prop()
"publicacion-oficial":string;


@ApiProperty({example:"http//:factoria-convocatoria.com"})
@Prop()
"convocatoria-enlace":string;

@ApiProperty({example:"Programacíon"})
@Prop()
"tematica":string;

@ApiProperty({example:"Palabras claves o texto???"})
@Prop()
"trabajo-lineas":string;

@ApiProperty({example:["caixaBank","Aguas-Barcelona","Santander"]})
@Prop({type:Types.ObjectId,ref:'FinaciadoresRegistro'})
"dirigido-entidades":FinanciadoresRegistro;

@ApiProperty({example:"20/10/2023"})
@Prop()
"fecha-apertura":string;

@ApiProperty({example:"28/10/2023"})
@Prop()
"fecha-cierre":string;

@ApiProperty({example:"6/11/2023"})
@Prop()
"fecha-resolucion":string

@ApiProperty({example:"5 meses"})
@Prop()
"periodo-ejecucion":string;

@ApiProperty({example:"8/11/2023"})
@Prop()
"fecha-justificacion":string;


@ApiProperty({example:["si","no"]})
@Prop({default:false})
"auditoria":boolean;


@ApiProperty({example:"40000 euros"})
@Prop()
"presupuesto":number;


@ApiProperty({example:"palabras claves etc.."})
@Prop()
"otra-informacion":string;

@ApiProperty({example:"PDF"})
@Prop({type:AdjuntarDto})
"documentacion":AdjuntarDto

}

export const ConvocatoriaRegistroSchema = SchemaFactory.createForClass(ConvocatoriaRegistro)