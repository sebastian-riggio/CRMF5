import { useEffect, useState } from 'react'
import { getProjectDetail } from '../services/proyectos'
import { Projects } from '../interfaces/projects'
import { useParams } from 'react-router-dom'

function Project () {
  const [project, setProject] = useState<Projects>()
  const { id } = useParams()
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
        <h1 className='font-black'>Centro Gestor:</h1>
        <h2>{project?.centroGestor}</h2>
        <h1 className='font-black'>Responsable:</h1>
        <h2>{project?.responsable}</h2>
        <h1 className='font-black'>Duracion de proyecto:</h1>
        <h2>{`${project?.proyectoDuracion} meses`}</h2>
        <h1 className='font-black'>Fecha de inicio:</h1>
        <h2>{project?.fechaInicio}</h2>
        <h1 className='font-black'>Fecha de cierre:</h1>
        <h2>{project?.fechaCierre}</h2>
        <h1 className='font-black'>Presupuesto global:</h1>
        <h2>{`${project?.proyectoPresupuesto} € `}</h2>

      </div>
    </>
  )
}

export default Project
