// ProyectForm

import { z } from 'zod'

const proyectPost = z.object({

  proyectoNombre: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  centroGestor: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  responsable: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  proyectoDuracion: z.coerce.number().min(0).optional(),
  proyectoPresupuesto: z.coerce.number().min(0).optional(),
  factoriaPresupuesto: z.coerce.number().min(0).optional(),

  fechaInicio: z.date(),
  fechaCierre: z.date()

})

export default proyectPost
