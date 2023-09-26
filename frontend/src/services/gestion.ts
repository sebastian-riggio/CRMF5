import { axiosPrivate } from './axiosPrivate'

export const getAllGestion = () => {
  return axiosPrivate.get('gestion')
}
