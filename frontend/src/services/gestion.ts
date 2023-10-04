import { axiosPrivate } from './axiosPrivate'

export const getAllGestion = () => {
  return axiosPrivate.get('gestion')
}

export const getConvocatoriasEnCierre = async () => {
  const response = await axiosPrivate.get('gestion')
  return response.data
}

export const getOneGestion = (id:string) => {
  return axiosPrivate.get(`gestion/${id}`)
}
