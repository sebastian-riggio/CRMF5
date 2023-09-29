import { z } from 'zod'

const gestionRegistroPost = z.object({

  _id: z.string(),

  entidadConvocante: z.string().min(2, {
    message: 'Debe completar este campo'
  }),

  departamentoConvocante: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  titulo: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  publicacionOficial: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  convocatoriaEnlace: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  tematica: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  trabajoLineas: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  dirigidoEntidades: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  fechaApertura: z.date(),
  fechaCierre: z.date(),
  fechaResolucion: z.date(),
  periodoEjecucion: z.string().min(1, {
    message: 'Debe completar este campo'
  }),
  fechaJustificacion: z.date(),
  auditoria: z.boolean().optional(),
  presupuesto: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  otraInformacion: z.string().min(2, {
    message: 'Debe completar este campo'
  }),

  memoriaTecnica: z.string().min(2, {
    message: 'Debe completar este campo'
  }).optional(),
  modeloPresupuesto: z.string().min(2, {
    message: 'Debe completar este campo'
  }).optional(),
  formularioSolicitud: z.string().min(2, {
    message: 'Debe completar este campo'
  }).optional()
})

export default gestionRegistroPost
