import { ConvocatoriaRegistro } from '../interfaces/convocatoriaRegistro'
import { axiosPrivate } from './axiosPrivate'

export const createdRegistroGestion = <T>(data:T) => {
  return axiosPrivate.post('/announcement/register', data)
}
