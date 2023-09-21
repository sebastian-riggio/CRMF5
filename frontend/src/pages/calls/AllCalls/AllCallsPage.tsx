import axios from 'axios'
import { useEffect, useState } from 'react'
import accountFormSchema from '../../../components/accountFormSchema'
import { ColumnDef } from '@tanstack/react-table'
import { z } from 'zod'
import { access } from 'fs'
import { DataTableCalls } from './date-table-calls'

const baseUrl = 'http://localhost:3000/api/v1/gestion'

// las validaciones salen del accountFormSchema pero después deberíamos ver dónde están realmente
type gestionTable = z.infer<typeof accountFormSchema>

// Hay que ver como llamar a los proyectos 

type gestionColumns = Pick<gestionTable, 'titulo' | 'entidad' | 'proyecto' | 'fecha' | 'fechaclose'>

const columns: ColumnDef<gestionColumns>[]=[
  {
    accessorKey: 'convocatoria-nombre',
    header: 'Titulo'
  },
  {
    accessorKey: 'financiadores',
    header: 'Financistas'
  },
  {
    accessorKey: 'fecha-inicio',
    header: 'Fecha inicio'
  },
  {
    accessorKey: 'fecha-limita',
    header: 'Fecha limite'
  },
  {
    accessorKey: 'proyecto-nombre',
    header: () => {
      const amount = row.getValue('Proyecto')
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount)
      return <div className='text-right text-red-500 font-medium'>{amount}</div>
    }
  }
]

function AllCallsPage () {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get(baseUrl).then((response)=> {
      setData(response)
    })
  },[])
  if (!data) return null
  console.log(data.data.gestion)

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-semibold'>Convocatorias</h1>
      <DataTableCalls columns={columns} data={data.data.proyectos} />
    </div>
  )
}

export default AllCallsPage
