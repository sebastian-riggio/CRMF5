import { axiosPrivate } from './axiosPrivate'

export const getAllGestion = () => {
  return axiosPrivate.get('gestion')
}

export const getOneGestion = (id:string) => {
  return axiosPrivate.get(`gestion/${id}`)
}
