import { ConvocatoriaRegistro } from '../interfaces/convocatoriaRegistro'
import { axiosPrivate } from './axiosPrivate'

export const createdRegistroGestion = (data:ConvocatoriaRegistro) => {
  return axiosPrivate.post('/announcement/register', data)
}
