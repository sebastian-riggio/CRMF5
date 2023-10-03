import { useEffect, useState } from 'react'
import { ColumnDef, GroupColumnDef } from '@tanstack/react-table'
import { z } from 'zod'
import { DataTableCalls } from '../../components/call/date-table-calls'
import { formatDate } from '../../lib/utils'
import GoBack from '../../components/GoBack'
import { Link } from 'react-router-dom'
import { getAllConvocatoria } from '@/services/registroConvocatoria'
import gestionRegistroPost from '@/interfaces/gestionRegistroPost'
import { ConvocatoriaRegistro } from '@/interfaces/convocatoriaRegistro'
import gestionConvocatoria from '../../interfaces/gestionConvocatoria'
import { getAllGestion } from '../../services/gestion'

type gestionTable = z.infer<typeof gestionRegistroPost>

type estadoTable = z.infer<typeof gestionConvocatoria>

type estadoColumns = Pick<estadoTable, 'estado'>

type gestionColumns = Pick<gestionTable, 'fechaApertura'|'fechaCierre'|'entidadConvocante'|'titulo'|'_id'|'etapa'>

const columns: ColumnDef<gestionColumns, estadoColumns>[] = [
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
    accessorKey: 'fechaCierre',
    header: 'Fecha Cierre',
    cell: ({ row }) => formatDate(row.getValue('fechaCierre'))
  },
  {
    accessorKey: 'estado',
    header: 'Estados',
    cell: ({ row }) => row.getValue('estado')
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

/*   function Estados () {
    const [estado, setEstado] =  useState()

    useEffect(() => {
      getAllGestion()
        .then((response) => {
          setEstado(response.data)
        })
        .catch((error) => {
          console.error('Error obteniendo los datos:', error)
        })
    }, [])
    if (!estado) return null
    console.log(estado)
  }
 */
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
        <Link to='http://localhost:5173/'>
          <GoBack />
        </Link>
      </div>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-semibold'>Convocatorias</h1>
        <DataTableCalls columns={columns} data={data.convocatoria} />
      </div>
      <p>{}</p>
    </>
  )
}

export default AllCallsPage
