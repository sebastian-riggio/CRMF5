import { useEffect, useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { z } from 'zod'
import { DataTableCalls } from './date-table-calls'
import { formatDate } from '../../../lib/utils'
import GoBack from '../../../components/GoBack'
import { Link } from 'react-router-dom'
import { getAllConvocatoria } from '@/services/registroConvocatoria'
import gestionRegistroPost from '@/interfaces/gestionRegistroPost'
import { ConvocatoriaRegistro } from '@/interfaces/convocatoriaRegistro'

type gestionTable = z.infer<typeof gestionRegistroPost>

type gestionColumns = Pick<gestionTable, 'fechaApertura'|'fechaCierre'|'entidadConvocante'|'titulo'|'_id'|'etapa'>

const columns: ColumnDef<gestionColumns>[] = [
  {
    accessorKey: 'titulo',
    header: 'Titulo',
    cell: ({ row }) => {
      const idRow = row.original
      return (
        <Link className='text-blue-500 underline' to={`/announcement/${idRow._id as string}`}>
          {row.getValue('titulo')}
        </Link>
      )
    }
  },
  {
    accessorKey: 'entidadConvocante',
    header: 'financiador'
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
    accessorKey: 'entidadConvocante',
    header: 'financiador'
  },
  /* {
    accessorKey: 'proyecto',
    header: 'Proyecto'
  } */
]
interface ApiResponse {
  convocatoria: ConvocatoriaRegistro[];
  message: string;
  status: number;
}

function AllCallsPage () {
  const [data, setData] = useState<ApiResponse | null>(null)
  console.log(data)

  useEffect(() => {
    getAllConvocatoria()
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
        <Link to='http://localhost:5173/announcement/:id'>
          <GoBack />
        </Link>
      </div>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-semibold'>Convocatorias</h1>
        <DataTableCalls columns={columns} data={data.convocatoria} />
      </div>
    </>
  )
}

export default AllCallsPage
