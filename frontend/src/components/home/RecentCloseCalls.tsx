import { useState, useEffect } from 'react'
import { getAllGestion } from '@/services/gestion'
import {
  CheckCheck
} from 'lucide-react'

interface ConvocatoriaGestion {
  _id: string;
  convocatoria: string;
  financiador: string;
  etapaCierre: {
    fechaAprobacionOficial: string;
    estadoResolucion: string;
    montoTotalRecibido: number;
  };
}

export function RecentCloseCalls () {
  const [convocatoriasCerradas, setConvocatoriasCerradas] = useState<ConvocatoriaGestion[]>([])
  useEffect(() => {
    getAllGestion()
      .then((response) => {
        console.log('Respuesta de la API:', response.data)
        if (Array.isArray(response.data.gestiones)) {
          const convocatoriasFiltradas = response.data.gestiones.filter(
            (convocatoria: ConvocatoriaGestion) =>
              convocatoria.etapaCierre && convocatoria.etapaCierre.estadoResolucion === 'Cerrado'
          )
          console.log('Convocatorias cerradas filtradas:', convocatoriasFiltradas)
          setConvocatoriasCerradas(convocatoriasFiltradas)
        } else {
          console.error('Error: La propiedad gestiones no es un array.')
        }
      })
      .catch((error) => {
        console.error('Error al obtener las convocatorias:', error)
      })
  }, [])
  return (
    <div className='space-y-8'>
      {convocatoriasCerradas.map((convocatoria, index) => (
        <div key={index} className='flex items-center'>
          <div className='flex items-center'>
            <CheckCheck />
          </div>
          <div className='ml-4 space-y-1'>
            <p className='text-sm font-medium leading-none'>{convocatoria.convocatoria}</p>
            <p className='text-sm font-medium text-muted-foreground'>{convocatoria.financiador}</p>
          </div>
          <p className='ml-auto font-medium'>{convocatoria.etapaCierre.montoTotalRecibido}€</p>
        </div>
      ))}
    </div>
  )
}
