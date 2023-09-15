import { Projects } from "../interfaces/projects";
import { axiosPrivate } from "./AxiosPrivate";


  export const createProject = (data:Projects)=> {
    return axiosPrivate.post(`/projects/register`,data)
  }