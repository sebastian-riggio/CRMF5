import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
import React, { useEffect, useState } from 'react'
import { RecentCloseCalls } from '@/components/home/RecentCloseCalls'
import { getProjects } from '@/services/proyectos'
import { getAllConvocatoria } from '@/services/registroConvocatoria'
import { getConvocatoriasEnCierre } from '@/services/gestion'
import {
  Library,
  Users,
  CreditCard,
  Activity
} from 'lucide-react'
import GraphicData from './GraphicData'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DataItem } from '@/components/home/GraphicData'
interface Convocatoria {
  etapaCierre: { estadoResolucion: string }
}
const ResumeBoard: React.FC = () => {
  const [totalProyectos, setTotalProyectos] = useState<number>(0)
  const [totalConvocatorias, setTotalConvocatorias] = useState<number>(0)
  const [convocatoriasCerradas, setConvocatoriasCerradas] = useState<number>(0)
  const [convocatoriasNoCerradas, setConvocatoriasNoCerradas] = useState<number>(0)
  const [activeIndex] = useState<number>(0)

  useEffect(() => {
    const fetchTotalProyectos = async () => {
      try {
        const response = await getProjects()
        const total = response.data.proyectos.length
        setTotalProyectos(total)
      } catch (error) {
        console.error('Error al obtener el total de proyectos:', error)
      }
    }
    const fetchTotalConvocatorias = async () => {
      try {
        const response = await getAllConvocatoria()
        if (Array.isArray(response.data.convocatoria)) {
          const total = response.data.convocatoria.length
          setTotalConvocatorias(total)
        } else {
          console.error('Los datos de convocatorias no son un array válido:', response.data.convocatoria)
        }
      } catch (error) {
        console.error('Error al obtener el total de convocatorias:', error)
      }
    }
    const fetchTotalConvocatoriasCierre = async () => {
      try {
        const convocatoriasCierreResponse = await getConvocatoriasEnCierre()

        const convocatoriasCierre: Convocatoria[] = convocatoriasCierreResponse.gestiones.filter(
          (convocatoria: Convocatoria) =>
            convocatoria.etapaCierre && convocatoria.etapaCierre.estadoResolucion === 'Cerrado'
        )
        setConvocatoriasCerradas(convocatoriasCierre.length)
        setConvocatoriasNoCerradas(convocatoriasCierreResponse.gestiones.length - convocatoriasCierre.length)
      } catch (error) {
        console.error('Error al obtener convocatorias:', error)
      }
    }
    fetchTotalProyectos()
    fetchTotalConvocatorias()
    fetchTotalConvocatoriasCierre()
  }, [])

const data: DataItem[] = [
  { name: 'Solicitud', value: 10, fill: '#62de31' },
  { name: 'Negociación', value: 30, fill: '#1e40af' },
  { name: 'Otorgamiento', value: 20, fill: '#f5630e' },
  { name: 'Justificación', value: 2, fill: '#f472b6' },
  { name: 'Cierre', value: convocatoriasCerradas, fill: '#22c55e' }
]

  return (
    <>
      <TabsContent value='overview' className='space-y-4'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Proyectos
              </CardTitle>
              <Library className='text-muted-foreground h-5 w-5' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{totalProyectos}</div>
              <p className='text-xs text-muted-foreground'>
                en nuestra base de datos
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Convocatorias
              </CardTitle>
              <Users className='text-muted-foreground h-5 w-5' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{totalConvocatorias}</div>
              <p className='text-xs text-muted-foreground'>
                en nuestra base de datos
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Gestiones cerradas</CardTitle>
              <CreditCard className='text-muted-foreground h-5 w-5' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{convocatoriasCerradas}</div>
              <p className='text-xs text-muted-foreground'>
                en nuestra base de datos
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Convocatorias en trámite
              </CardTitle>
              <Activity className='text-muted-foreground h-5 w-5' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{convocatoriasNoCerradas}</div>
              <p className='text-xs text-muted-foreground'>
                en nuestra base de datos
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <Card className='col-span-4 hidden md:block'>
            <CardHeader>
              <CardTitle>Gestión de convocatorias</CardTitle>
            </CardHeader>
            <CardContent className='pl-2'>
              <GraphicData activeIndex={activeIndex} data={data} />
            </CardContent>
          </Card>
          <Card className='col-span-3'>
            <CardHeader>
              <CardTitle>Convocatorias finalizadas</CardTitle>
            </CardHeader>
            <CardContent className='mt-4'>
              <ScrollArea>
                <RecentCloseCalls />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </>
  )
}

export default ResumeBoard
