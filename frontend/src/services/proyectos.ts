import { Projects } from "../interfaces/projects";
import { axiosPrivate } from "./axiosPrivate";


  export const createProject = (data:Projects)=> {
    return axiosPrivate.post(`/projects/register`,data)
  }