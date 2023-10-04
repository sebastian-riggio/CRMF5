import { ConvocatoriaRegistro } from '../interfaces/convocatoriaRegistro'
import { axiosPrivate } from './axiosPrivate'

export const createdRegistroGestion = (data:ConvocatoriaRegistro) => {
  return axiosPrivate.post('/announcement', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const getAllConvocatoria = () => {
  return axiosPrivate.get('/announcement')
}

export const getOneConvocatoria = (id:string) => {
  return axiosPrivate.get(`/announcement/${id}`)
}
