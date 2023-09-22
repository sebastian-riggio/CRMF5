import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, HydratedDocument } from 'mongoose';

export type ConvocatoriaDocument = HydratedDocument<ConvocatoriaRegistro>;

@Schema()
export class ConvocatoriaRegistro extends Document {
  @ApiProperty({ example: 'Ayuntamiento Barcelona' })
  @Prop({ required: true })
  entidadConvocante: String;

  @ApiProperty({ example: 'Recursos Humanos' })
  @Prop()
  departamentoConvocante: String;

  @ApiProperty({ example: 'Por un mundo mejor' })
  @Prop()
  titulo: String;

  @ApiProperty({ example: 'http//:factoriaf5.com' })
  @Prop()
  publicacionOficial: String;

  @ApiProperty({ example: 'http//:factoria-convocatoria.com' })
  @Prop()
  convocatoriaEnlace: String;

  @ApiProperty({ example: 'Programacíon' })
  @Prop()
  tematica: String;

  @ApiProperty({ example: 'Palabras claves o texto???' })
  @Prop()
  trabajoLineas: String;

  @ApiProperty({
    example: ['Sin animo de lucro', 'Financieras', 'Impacto Social'],
  })
  @Prop()
  dirigidoEntidades: String;

  @ApiProperty({ example: '20/10/2023' })
  @Prop()
  fechaApertura: Date;

  @ApiProperty({ example: '28/10/2023' })
  @Prop()
  fechaCierre: Date;

  @ApiProperty({ example: '6/11/2023' })
  @Prop()
  fechaResolucion: Date;

  @ApiProperty({ example: '5 meses' })
  @Prop()
  periodoEjecucion: String;

  @ApiProperty({ example: '8/11/2023' })
  @Prop()
  fechaJustificacion: Date;

  @ApiProperty({ example: ['si', 'no'] })
  @Prop({ default: false })
  auditoria: Boolean;

  @ApiProperty({ example: '40000 euros' })
  @Prop()
  presupuesto: Number;

  @ApiProperty({ example: 'palabras claves etc..' })
  @Prop()
  otraInformacion: String;

  @ApiProperty({ example: 'PDF' })
  @Prop()
  memoriaTecnica: String;

  @ApiProperty({ example: 'PDF' })
  @Prop()
  modeloPresupuesto: String;

  @ApiProperty({ example: 'PDF' })
  @Prop()
  formularioSolicitud: String;

  @ApiProperty({ example: 'PDF' })
  @Prop()
  otraDocumentacion: String;
}

export const ConvocatoriaRegistroSchema =
  SchemaFactory.createForClass(ConvocatoriaRegistro);
