import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document, HydratedDocument } from 'mongoose';
import { PersonaContactoDto } from "../dto/personaContactodto";

export type FinanciadoresDocument = HydratedDocument<FinanciadoresRegistro>;



@Schema()
export class FinanciadoresRegistro extends Document {

  @ApiProperty({ example: "CaixaBank" })
  @Prop({ required: true, unique: true })
  "nombre-entidad": string;

  @ApiProperty({ example: "74839832934" })
  @Prop({required:true,unique:true})
  "código-registro": number;

  @ApiProperty({example:"fact1234"})
  @Prop({required:true,unique:true})
  "CIF":string;
  
  @ApiProperty({ example: ["Organismo pùblico", "Empresa privada", "OSAL"] })
  @Prop({
    required: true,
    enum: ["Organismo pùblico", "Empresa privada", "OSAL"],
  })
  "entidad": string;

  @ApiProperty({ example: ["Mercantil", "Asociación", "Fundación", "Cooperativa", "Organismo"] })
  @Prop({
    required: true,
    enum: ["Mercantil", "Asociación", "Fundación", "Cooperativa", "Organismo"],
  })
  "sociedad-tipo": string;

  @ApiProperty({ example: "http://factoriaf5.com" })
  @Prop()
  "sitio-web": string;

  @ApiProperty({example:["Cliente","Donante"]})
  @Prop({enum:["Cliente","Donante"]})
  "relaciòn":string;

  @ApiProperty({example:"Carrer de LLiri 35,Barcelona"})
  @Prop()
  "direcciòn principal":string;

  @ApiProperty({example:"654-678-897"})
  @Prop()
  "telèfono principal":number;

  @ApiProperty({example:"factoriaf5@mail.com"})
  @Prop()
  "email":string;


  @ApiProperty({ type: PersonaContactoDto })
  @Prop({ type: PersonaContactoDto }) 
  "persona-contacto": PersonaContactoDto;

  @ApiProperty({example:'20/9/2023'})
  @Prop({ type: Date, default: Date.now })
  "fecha de alta":Date;

  }

  export const FinanciadoresRegistroSchema = SchemaFactory.createForClass(FinanciadoresRegistro)

  