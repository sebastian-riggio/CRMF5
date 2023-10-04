import { useEffect, useState } from 'react'
import { getProjectDetail } from '../../services/proyectos'
import { Projects } from '../../interfaces/projects'
import { useParams } from 'react-router-dom'
import { formatDate } from '@/lib/utils'
import { CardContent } from '../ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'

function Project () {
  const [project, setProject] = useState<Projects>()
  
  const { id } = useParams()
  useEffect(() => {
    if (id) {
      getProjectDetail(id).then((reponse) => {
        setProject(reponse.data.proyecto)
        console.log(reponse)
      })
    }
  }, [id])


  return (
    <>
      <div className='container mx-auto mt-5'>
        <h1 className=' text-primary text-4xl font-semibold mb-5'>
          {project?.proyectoNombre}
        </h1>
        <h1 className='font-black'>Codigo de proyecto:</h1>
        <h2>{project?.proyectoCodigo}</h2>
        <h1 className='font-black'>Centro Gestor:</h1>
        <h2>{project?.centroGestor}</h2>
        <h1 className='font-black'>Responsable:</h1>
        <h2>{project?.responsable}</h2>
        <h1 className='font-black'>Duracion de proyecto:</h1>
        <h2>{`${project?.proyectoDuracion} meses`}</h2>
        <h1 className='font-black'>Fecha de inicio:</h1>
        <h2>{project?.fechaInicio ? formatDate(project.fechaInicio) : 'N/A'}</h2>
        <h1 className='font-black'>Fecha de cierre:</h1>
        <h2>{project?.fechaCierre ? formatDate(project.fechaCierre) : 'N/A'}</h2>
        <h1 className='font-black'>Presupuesto global:</h1>
        <h2>{`${project?.proyectoPresupuesto} € `}</h2>
        <h1 className='font-black'>Presupuesto Factoria:</h1>
        <h2>{`${project?.factoriaPresupuesto} € `}</h2>
      </div>

      <CardContent className='p-0 flex flex-wrap '>
        <Accordion className='m-2 w-full  mt-8' type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='px-3'>CONVOCATORIAS QUE FINANCIAN ESTE PROYECTO</AccordionTrigger>
            <AccordionContent>
              <div>
                {/* <h1 className='font-black'>Entidad-Convocante:</h1>
                    <h2>{convocatoria?.entidadConvocante}</h2> */}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </>
  )
}

export default Project
