import { useEffect, useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { z } from 'zod'
import { DataTable } from './data-table'
import proyectPost from '../../../interfaces/proyectPost'
import { getProjects } from '../../../services/proyectos'
import { formatDate } from '../../../lib/utils'

type projectsTable = z.infer<typeof proyectPost>

type projectColumns = Pick<projectsTable, 'proyectoNombre' | 'fechaInicio' | 'centroGestor'| 'responsable'|'fechaCierre' >

const columns: ColumnDef<projectColumns>[] = [
  {
    accessorKey: 'proyectoNombre',
    header: 'Titulo'
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
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount)

      return <div className='text-right text-red-500 font-medium'>{amount}</div>
    }
  }
]

function AllProjectsPage () {
  const [data, setData] = useState()

  useEffect(() => {
    getProjects().then((response) => {
      setData(response)
    })
  }, [])
  if (!data) return null
  console.log(data)
  return (
    <div className='container mx-auto mt-5'>
      <h1 className='text-4xl font-semibold'>Nuestros proyectos</h1>
      <DataTable columns={columns} data={data.data.proyectos} />
    </div>
  )
}

export default AllProjectsPage
