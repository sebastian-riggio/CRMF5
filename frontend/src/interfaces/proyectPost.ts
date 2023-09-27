// ProyectForm

import { z } from 'zod'

const proyectPost = z.object({

  proyectoNombre: z.string().min(2, {
    message: 'Debe completar este campo'
  }),

  proyectoCodigo: z.string(),

  centroGestor: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  responsable: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  proyectoDuracion: z.string().min(1, {
    message: 'Debe completar este campo'
  }),
  proyectoPresupuesto: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  factoriaPresupuesto: z.string().min(2, {
    message: 'Debe completar este campo'
  }),

  fechaInicio: z.date(),
  fechaCierre: z.date()

})

export default proyectPost