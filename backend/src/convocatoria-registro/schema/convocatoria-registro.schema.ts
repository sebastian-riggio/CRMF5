import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, HydratedDocument } from 'mongoose';

export type ConvocatoriaDocument = HydratedDocument<ConvocatoriaRegistro>;

@Schema()
export class ConvocatoriaRegistro extends Document {

  @ApiProperty({ example: 'Ayuntamiento Barcelona' })
 // @Prop({ required: true })
  entidadConvocante: string;

  @ApiProperty({ example: 'Recursos Humanos' })
  @Prop()
  departamentoConvocante: string;

  @ApiProperty({ example: 'Por un mundo mejor' })
  @Prop()
  titulo: string;

  @ApiProperty({ example: 'http//:factoriaf5.com' })
  @Prop()
  publicacionOficial: string;

  @ApiProperty({ example: 'http//:factoria-convocatoria.com' })
  @Prop()
  convocatoriaEnlace: string;

  @ApiProperty({ example: 'Programacíon' })
  @Prop()
  tematica: string;

  @ApiProperty({ example: 'Palabras claves o texto???' })
  @Prop()
  trabajoLineas: string;

  @ApiProperty({
    example: ['Sin animo de lucro', 'Financieras', 'Impacto Social'],
  })
  @Prop()
  dirigidoEntidades: string;

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
  periodoEjecucion: string;

  @ApiProperty({ example: '8/11/2023' })
  @Prop()
  fechaJustificacion: Date;

  @ApiProperty({ example: ['si', 'no'] })
  @Prop({ default: false })
  auditoria: boolean;

  @ApiProperty({ example: '40000 euros' })
  @Prop()
  presupuesto: number;

  @ApiProperty({ example: 'palabras claves etc..' })
  @Prop()
  otraInformacion: string;

  @ApiProperty({ example: 'PDF' })
  @Prop()
  memoriaTecnica: string;

  @ApiProperty({ example: 'PDF' })
  @Prop()
  modeloPresupuesto: string;

  @ApiProperty({ example: 'PDF' })
  @Prop()
  formularioSolicitud: string;

  @ApiProperty({ example: 'PDF' })
  @Prop()
  otraDocumentacion: string;
}

export const ConvocatoriaRegistroSchema =
  SchemaFactory.createForClass(ConvocatoriaRegistro);
