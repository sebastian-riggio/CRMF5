import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose";

export type ProyectoDocument = HydratedDocument <ProyectosRegistro>;

@Schema()
export class ProyectosRegistro {

@ApiProperty({example:"P8 Mixta"})
@Prop({unique:true, required:true})
proyectoNombre:string;

@ApiProperty({example:"Factoria20042023"})
@Prop({unique:true})
proyectoCodigo:string;

@ApiProperty({example:["Factoria F5 - People and culture",
"Factoria F5 - Admin, contabilidad y finanzas",
"Factoria F5 - Oficina soporte proyectos y calidad",
 "Factoría F5 - Dirección general "]})

@Prop()
centroGestor:string;

@ApiProperty({example:"Jesús Rivera"})
@Prop()
responsable:string;

@ApiProperty({example:"6 meses"})
@Prop()
proyectoDuracion:string;

@ApiProperty({example:23000})
@Prop()
proyectoPresupuesto:number;

@ApiProperty({example:15000})
@Prop()
factoriaPresupuesto:number;

@ApiProperty({example:"20/3/2023"})
@Prop()
fechaInicio:Date;


@ApiProperty({example:"20/3/2023"})
@Prop()
fechaCierre:Date;

}

export const ProyectosRegistroSchema = SchemaFactory.createForClass(ProyectosRegistro) 