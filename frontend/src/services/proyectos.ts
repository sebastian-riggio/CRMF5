import { Projects } from '../interfaces/projects'
import { axiosPrivate } from './axiosPrivate'

export const createProject = (data:Projects) => {
  return axiosPrivate.post('/projects/register', data)
}

export const getProjects = () => {
  return axiosPrivate.get('projects')
}

export const getProjectDetail = (id) => {
  return axiosPrivate.get(`/projects/${id}`)
}
