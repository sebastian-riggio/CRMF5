import { z } from 'zod'

const etapaResolucion = z.object({
  fechaResolucion: z.date(),
  fechaLimiteEntrega: z.date(),
  fechaRealEntrega: z.date(),
  fechaLimiteResponder: z.date(),
  fechaRealRespuesta: z.date(),
  notas: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  adjuntarResolucion: z.string().optional()
})

const etapaOtorgamiento = z.object({
  fechaResolucionFinal: z.date(),
  estadoSolicitud: z.boolean().optional(),
  montoConcedido: z.string(),
  fechaPrimerDesembolso: z.date(),
  fechaRecepcionDesembolso: z.date(),
  montoPrimerDesembolso: z.string(),
  porcientoPrimerDesembolso: z.string(),
  fechaInicioGastos: z.date(),
  fechaFinalizacionGastos: z.date(),
  fechaPrimerSeguimiento: z.date(),
  fechaLimiteInformeFinalTecnico: z.date(),
  fechaLimiteInformeFinalEconomico: z.date(),
  seguimientoInformes: z.string().min(2, {
    message: 'Debe rellenar este campo'
  }),
  adjuntarResolucionOtorgamiento: z.string()
})

const etapaJustificacion = z.object({
  fechaEntrega: z.date(),
  fechaLimitePrimerRequerimiento: z.date(),
  fechaRespuestaRequerimientoPrimero: z.date(),
  fechaLimiteSegundoRequerimiento: z.date(),
  fechaRespuestaRequerimientoSegundo: z.date(),
  notas: z.string().min(2, {
    message: 'Deebe completar este campo'
  })
})

const etapaCierre = z.object({
  fechaAprobacionOficial: z.date(),
  estadoResolucion: z.string().optional(),
  fechaRecepcionPagoFinal: z.date(),
  montoTotalRecibido: z.string(),
  ultimoPagoPorcentaje: z.string(),
  documentoCierre: z.string()
})

const gestionConvocatoria = z.object({
  convocatoria: z.string(),
  financiador: z.string(),
  proyecto: z.string(),
  responsable: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  fechaPropuesta: z.date(),
  numeroTramite: z.string(),
  numeroExpediente: z.string().min(2, {
    message: 'Debe completar este campo'
  }),
  reciboOficial: z.string().optional(),
  etapaResolucion: z.array(etapaResolucion),
  etapaOtorgamiento: z.array(etapaOtorgamiento),
  etapaJustificacion: z.array(etapaJustificacion),
  etapaCierre: z.array(etapaCierre),
  estado: z.string()
})
export default gestionConvocatoria
