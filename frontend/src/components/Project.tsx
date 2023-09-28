import { useEffect, useState } from 'react'
import { getProjectDetail } from '../services/proyectos'
import { Projects } from '../interfaces/projects'
import { useParams } from 'react-router-dom'

<<<<<<< HEAD
import accountFormSchema from './accountFormSchema';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { toast } from '../components/ui/use-toast';
import { Separator } from './ui/separator';
import { Form } from './ui/form';
import GeneralProject from './ui/project/GeneralProject';
import CallAndProject from './ui/project/CallAndProject';
import proyectPost from '../interfaces/proyectPost';
import { useEffect, useState } from 'react';
import { getProjectDetail } from '../services/proyectos';
import { Projects } from '../interfaces/projects';
import { useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { formatDate } from '../lib/utils';

function Project() {
  const [project, setProject] = useState<Projects>();
  const { id } = useParams();
=======
function Project () {
  const [project, setProject] = useState<Projects>()
  const { id } = useParams()
>>>>>>> d27e06726be73a7a914d94cadf3c2ad5306bc92b
  useEffect(() => {
    getProjectDetail(id).then((reponse) => {
      setProject(reponse.data.proyecto)
      console.log(reponse)
    })
  }, [])


  return (
    <>
      <div className='container mx-auto mt-5'>
        <h1 className=' text-primary text-4xl font-semibold mb-5'>{project?.proyectoNombre}</h1>
        <h1 className='font-black'>Codigo de proyecto:</h1>
        <h2>{project?.proyectoCodigo}</h2>
        <h1 className='font-black'>Centro Gestor:</h1>
        <h2>{project?.centroGestor}</h2>
        <h1 className='font-black'>Responsable:</h1>
        <h2>{project?.responsable}</h2>
        <h1 className='font-black'>Duracion de proyecto:</h1>
        <h2>{`${project?.proyectoDuracion} meses`}</h2>
        <h1 className='font-black'>Fecha de inicio:</h1>
        <h2>{formatDate(project?.fechaInicio)}</h2>
        <h1 className='font-black'>Fecha de cierre:</h1>
        <h2>{formatDate(project?.fechaCierre)}</h2>
        <h1 className='font-black'>Presupuesto global:</h1>
        <h2>{`${project?.proyectoPresupuesto} € `}</h2>
        <h1 className='font-black'>Presupuesto Factoria:</h1>
        <h2>{`${project?.factoriaPresupuesto} € `}</h2>

      </div>
    </>
  )
}

export default Project
