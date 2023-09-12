import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose";

export type ProyectoDocument = HydratedDocument <ProyectosRegistro>;

@Schema()
export class ProyectosRegistro {

@ApiProperty({example:"P8 Mixta"})
@Prop({unique:true})
"proyecto-nombre":string;

@ApiProperty({example:"Factoria20042023"})
@Prop({unique:true})
"proyecto-codigo":string;

@ApiProperty({example:"Factoria Barcelona"})
@Prop()
"centro-gestor":string;

@ApiProperty({example:"Jesús Rivera"})
@Prop()
"responsable":string;

@ApiProperty({example:"6 meses"})
@Prop()
"proyecto-duracion":string;

@ApiProperty({example:23000})
@Prop()
"proyecto-presupuesto":number;

@ApiProperty({example:15000})
@Prop()
"factoria-presupuesto":number;
}

export const ProyectosRegistroSchema = SchemaFactory.createForClass(ProyectosRegistro) 