import GestionConvocatoria from '@/interfaces/gestionInterface'
import { axiosPrivate } from './axiosPrivate'

export const getAllGestion = () => {
  return axiosPrivate.get('gestion')
}

export const getConvocatoriasEnCierre = () => {
  return axiosPrivate.get('gestion', {
    params: {
      'etapaCierre.estado': 'cierre' // corroborar cómo se nombra al estado de la etapa de cierre
    }
  })
}

export const getOneGestion = (id:string) => {
  return axiosPrivate.get(`gestion/${id}`)
}

export const postGestion = (data:GestionConvocatoria) => {
  return axiosPrivate.post('/gestion', data)
}
