import { z } from 'zod'

const accountFormSchema = z.object({
  titulo: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  periodomaximo: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  tematica: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  entidad: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  dpto: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  url: z.string({ required_error: 'Por favor ingrese un URL' }),
  urlbases: z.string({ required_error: 'Por favor ingrese un URL' }),
  texto: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  infotexto: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  entidades: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  number: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  file: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  fecha: z.string({
    required_error: 'Debes ingresar una fecha '
  }),
  fechaclose: z.string({
    required_error: 'Debes ingresar una fecha '
  }),
  fechatime: z.string({
    required_error: 'Debes ingresar una fecha '
  }),
  fechajus: z.string({
    required_error: 'Debes ingresar una fecha '
  }),
  auditoria: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }).optional(),
  area: z.string()
    .min(5, { message: 'Debes completar con el área' }),
  correo: z.string({ required_error: 'Debes ingresar un correo electrónico' }),
  telefono: z.number().min(9, { message: 'Debes ingresar un número de contacto' }),

  // ProyectForm
  'proyecto-nombre': z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  'centro-gestor': z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  responsable: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  'proyecto-duracion': z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  'proyecto-presupuesto': z.string().min(2, {
    message: 'Debe completar este campo'
  }),

  'factoria-presupuesto': z.string().min(2, {
    message: 'Debe completar este campo'
  }),

  // ProfileForm
  nombre: z
    .string({
      required_error: 'Debes completar con el nombre'
    }),
  departamento: z.string({
    required_error: 'Elije un centro gestor de factoria F5'
  }),

  // ApplicationStage
  proyecto: z.string({ required_error: 'Debe elegir un proyecto' }),
  tecnico: z.string({ required_error: 'Ingrese el Técnico responsable' }),
  propuesta: z.string({ required_error: 'Debe ingresar la fecha en la que se ha entregado la propuesta' }),
  fechadeinicio: z.date({ required_error: 'Debe ingresar la fecha en la que se ha entregado la propuesta' }),
  numerotramite: z.string({ required_error: 'Debe ingresar el número de trámite' }),
  numeroexpediente: z.string({ required_error: 'Debe ingresar el número de expediente' }),
  recibooficial: z.string({ required_error: 'Debe ingresar el número de expediente' })

})

export default accountFormSchema
