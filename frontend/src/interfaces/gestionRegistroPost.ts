import { z } from 'zod'

const gestionRegistroPost = z.object({

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
  fechaApertura: z.string(),
  fechaCierre: z.string(),
  fechaResolucion: z.string(),
  periodoEjecucion: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  fechaJustificacion: z.string(),
  auditoria: z.string(),
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
  }).optional(),
  otraDocumentacion: z.string().min(2, {
    message: 'Debe completar este campo'
  }).optional()
})

export default gestionRegistroPost
