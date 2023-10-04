// ProyectForm

import { z } from 'zod'

const proyectPost = z.object({
  _id: z.string().optional(),
  proyectoNombre: z.string().min(2, {
    message: 'Debe completar este campo'
  }),

  proyectoCodigo: z.string().optional(),

  centroGestor: z.string().min(2, {
    message: 'Debe completar este campo'
  }).optional(),
  responsable: z.string().min(2, {
    message: 'Debe completar este campo'
  }).optional(),
  proyectoDuracion: z.string().min(1, {
    message: 'Debe completar este campo'
  }).optional(),
  proyectoPresupuesto: z.string().min(2, {
    message: 'Debe completar este campo'
  }).optional(),
  factoriaPresupuesto: z.string().min(2, {
    message: 'Debe completar este campo'
  }).optional(),

  fechaInicio: z.date().optional(),
  fechaCierre: z.date().optional()

})

export default proyectPost
