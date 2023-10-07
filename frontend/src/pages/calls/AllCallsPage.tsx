import { useEffect, useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { z } from 'zod'
import { DataTableCalls } from '../../components/call/date-table-calls'
import { formatDate } from '../../lib/utils'
import GoBack from '../../components/GoBack'
import { Link } from 'react-router-dom'
import { getAllConvocatoria } from '@/services/registroConvocatoria'
import gestionRegistroPost from '@/interfaces/gestionRegistroPost'
import { ConvocatoriaRegistro } from '@/interfaces/convocatoriaRegistro'
import gestionConvocatoria from '../../interfaces/gestionConvocatoria'

type gestionTable = z.infer<typeof gestionRegistroPost>

type estadoTable = z.infer<typeof gestionConvocatoria>

type estadoColumns = Pick<estadoTable, 'estado'>

type gestionColumns = Pick<gestionTable, 'fechaApertura'|'fechaCierre'|'entidadConvocante'|'titulo'|'_id'>

const columns: ColumnDef<gestionColumns, estadoColumns>[] = [
  {
    accessorKey: 'titulo',
    header: () => <div className=' font-bold '>Título</div>,
    cell: ({ row }) => {
      const idRow = row.original
      return (
        <Link className='hover:text-orange-600 hover:underline ' to={`/announcement/${idRow._id as string}`}>
          {row.getValue('titulo')}
        </Link>
      )
    }
  },
  {
    accessorKey: 'entidadConvocante',
    header: () => <div className=' font-bold '>Financiador</div>
  },
  {
    accessorKey: 'fechaApertura',
    header: () => <div className=' font-bold '>Fecha Inicio</div>,
    cell: ({ row }) => formatDate(row.getValue('fechaApertura'))
  },
  {
    accessorKey: 'fechaCierre',
    header: () => <div className=' font-bold '>Fecha Cierre</div>,
    cell: ({ row }) => formatDate(row.getValue('fechaCierre'))
  }
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
        <Link to='/'>
          <GoBack />
        </Link>
      </div>
      <div className='container mx-auto'>
        <h1 className='text-primary text-4xl font-semibold'>Convocatorias</h1>
        <DataTableCalls columns={columns} data={data.convocatoria} />
      </div>
      <p>{}</p>
    </>
  )
}

export default AllCallsPage
