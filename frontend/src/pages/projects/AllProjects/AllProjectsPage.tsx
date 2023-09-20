import axios from 'axios'
import { useEffect, useState } from 'react'
import accountFormSchema from '../../../components/accountFormSchema'
import { ColumnDef } from '@tanstack/react-table'
import { z } from 'zod'
import { access } from 'fs'
import { DataTable } from './data-table'

const baseUrl = 'http://localhost:3000/api/v1/projects'

type projectsTable = z.infer<typeof accountFormSchema>

type projectColumns = Pick<projectsTable, 'titulo' | 'fecha' | 'dpto'| 'responsable' >

const columns: ColumnDef<projectColumns>[] = [
  {
    accessorKey: 'proyecto-nombre',
    header: 'Titulo'
  },
  {
    accessorKey: 'proyecto-duracion',
    header: 'Fecha'
  },
  {
    accessorKey: 'centro-gestor',
    header: 'Gestor'
  },
  {
    accessorKey: 'responsable',
    // header: 'Responsable',
    header: () => <div className="text-right">Responsable</div>,
    cell: ({ row }) => {
      const amount = row.getValue('responsable')
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
      }).format(amount)
 
      return <div className="text-right text-red-500 font-medium">{amount}</div>
    },
  }
]

function AllProjectsPage () {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response)
    })
    }, [])
    if(!data) return null
    console.log(data.data.proyectos)
  return (
    <div className='container mx-auto'>
      <h1 className="text-4xl font-semibold">Nuestros proyectos</h1>
      <DataTable columns={columns} data={data.data.proyectos} />
    </div>
  )
}

export default AllProjectsPage
