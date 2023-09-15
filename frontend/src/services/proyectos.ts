import { axiosPrivate } from "./AxiosPrivate";


  export const createProyect = ()=> {
    return axiosPrivate.post(`/projects/register`)
  }