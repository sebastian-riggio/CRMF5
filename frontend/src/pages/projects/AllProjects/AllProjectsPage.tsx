import { useEffect, useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { z } from 'zod'
import { DataTable } from './data-table'
import proyectPost from '../../../interfaces/proyectPost'
import { getProjects } from '../../../services/proyectos'
import { formatDate } from '../../../lib/utils'
import GoBack from '../../../components/GoBack'
import { Link } from 'react-router-dom'
import { Projects } from '@/interfaces/projects'

type projectsTable = z.infer<typeof proyectPost>;

type projectColumns = Pick<
  projectsTable,
  | 'proyectoNombre'
  | 'fechaInicio'
  | 'centroGestor'
  | 'responsable'
  | 'fechaCierre'
  |'_id'

>;

const columns: ColumnDef<projectColumns>[] = [
  {
    accessorKey: 'proyectoNombre',
    header: 'Titulo',
    cell: ({ row }) => {
      const idRow = row.original
      return (
        <Link className='text-blue-500 underline' to={`/project/${idRow._id as string}`}>
          {row.getValue('proyectoNombre')}
        </Link>
      )
    }
  },
  {
    accessorKey: 'fechaInicio',
    header: 'Fecha-Inicio',
    cell: ({ row }) => formatDate(row.getValue('fechaInicio'))
  },
  {
    accessorKey: 'fechaCierre',
    header: 'Fecha-Cierre',
    cell: ({ row }) => formatDate(row.getValue('fechaCierre')) // toma la fecha de inicio de la fila actual (row.getValue('fechaInicio')) y luego llama a la función formatDate para formatear esa fecha antes de renderizarla en la celda.
  },
  {
    accessorKey: 'centroGestor',
    header: 'Centro Gestor'
  },
  {
    accessorKey: 'responsable',
    // header: 'Responsable',
    header: () => <div className='text-right'>Responsable</div>,
    cell: ({ row }) => {
      const amount = row.getValue('responsable')
      /*       const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount) */

      return (
        <div className='text-right text-red-500 font-medium'>{String(amount)}</div>
      )
    }
  }
]
interface ApiResponse {
  proyectos:Projects[];
  message: string;
  status: number;
}

function AllProjectsPage () {
  const [data, setData] = useState <ApiResponse | null>(null)

  useEffect(() => {
    getProjects()
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error obteniendo los datos:', error)
      })
  }, [])
  if (!data) return null
  console.log(data)
  return (
    <>
      <div>
        <Link to='http://localhost:5173/home'>
          <GoBack />
        </Link>
      </div>

      <Link to='http://localhost:5173/project/:id' />
      <div className='container mx-auto mt-5'>
        <h1 className='text-4xl font-semibold'>Nuestros proyectos</h1>
        <DataTable columns={columns} data={data.proyectos} />
      </div>
    </>
  )
}

export default AllProjectsPage
