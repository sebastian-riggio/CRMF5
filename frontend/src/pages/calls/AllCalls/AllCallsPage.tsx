import axios from 'axios'
import { useEffect, useState } from 'react'
import accountFormSchema from '../../../components/accountFormSchema'
import { ColumnDef } from '@tanstack/react-table'
import { z } from 'zod'
import { DataTableCalls } from './date-table-calls'

const baseUrl = 'http://localhost:3000/api/v1/gestion'

// las validaciones salen del accountFormSchema pero después deberíamos ver dónde están realmente
type gestionTable = z.infer<typeof accountFormSchema>

// Hay que ver como llamar a los proyectos

type gestionColumns = Pick<gestionTable, 'titulo' | 'entidad' | 'proyecto' | 'fecha' | 'fechaclose'>

const columns: ColumnDef<gestionColumns>[] = [
  {
    accessorKey: 'convocatoria',
    header: 'Titulo'
  },
  {
    accessorKey: 'financiador',
    header: 'Entidad'
  },
  {
    accessorKey: 'etapa-solicutud[responsable]',
    header: 'Fecha inicio'
  },
  {
    accessorKey: 'fecha-limite',
    header: 'Fecha limite'
  },
  {
    accessorKey: 'proyecto',
    header: 'Proyecto'
  }
]

function AllCallsPage () {
  const [data, setData] = useState()
  console.log(data)

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response)
    })
  }, [])
  if (!data) return null
  console.log(data.data.gestiones)

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-semibold'>Convocatorias</h1>
      <DataTableCalls columns={columns} data={data.data.gestiones} />
    </div>
  )
}

export default AllCallsPage
