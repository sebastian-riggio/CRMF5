import axios from 'axios'
import { useEffect, useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { z } from 'zod'
import { DataTableCalls } from './date-table-calls'
import gestionConvocatoria from '../../../interfaces/gestionConvocatoria'
import { formatDate } from '../../../lib/utils'
import { getAllGestion } from '../../../services/gestion'
import GoBack from '../../../components/GoBack'
import { Link } from 'react-router-dom'

type gestionTable = z.infer<typeof gestionConvocatoria>

type gestionColumns = Pick<gestionTable, 'convocatoria' | 'financiador' | 'proyecto' | 'fechaApertura'|'fechaCierre'>

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
    accessorKey: 'fechaApertura',
    header: 'Fecha inicio',
    cell: ({ row }) => formatDate(row.getValue('fechaApertura'))
  },
  {
    accessorKey: 'fechaCierre',
    header: 'Fecha Cierre',
    cell: ({ row }) => formatDate(row.getValue('fechaCierre'))
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
    getAllGestion().then((response) => {
      setData(response)
    })
  }, [])
  if (!data) return null
  console.log(data.data.gestiones)

  return (
    <>
      <div>
        <Link to='http://localhost:5173/home'>
          <GoBack />
        </Link>
      </div>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-semibold'>Convocatorias</h1>
        <DataTableCalls columns={columns} data={data.data.gestiones} />
      </div>
    </>
  )
}

export default AllCallsPage
