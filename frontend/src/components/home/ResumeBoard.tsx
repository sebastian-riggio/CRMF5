import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { TabsContent } from '../ui/tabs'
import React, { useEffect, useState } from 'react'
import GraphicData from './GraphicData'
import { RecentCloseProjects } from './RecentCloseProjects'
import { getProjects } from '../../services/proyectos'
import {
  Library,
  Users,
  CreditCard,
  Activity
} from 'lucide-react'

const ResumeBoard: React.FC = () => {
  const [totalProyectos, setTotalProyectos] = useState<number>(0)

  useEffect(() => {
    const fetchTotalProyectos = async () => {
      try {
        const response = await getProjects()
        const total = response.data.proyectos.length // Usa la propiedad 'proyectos' para obtener el número total
        setTotalProyectos(total)
      } catch (error) {
        console.error('Error al obtener el total de proyectos:', error)
      }
    }

    fetchTotalProyectos()
  }, [])

  return (
    <>
      <TabsContent value='overview' className='space-y-4'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total de proyectos
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
              <div className='text-2xl font-bold'>450</div>
              <p className='text-xs text-muted-foreground'>
                +10% que el último año
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Total de proyectos financiados</CardTitle>
              <CreditCard className='text-muted-foreground h-5 w-5' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>424</div>
              <p className='text-xs text-muted-foreground'>
                +5% que el último mes
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Proyectos en trámite
              </CardTitle>
              <Activity className='text-muted-foreground h-5 w-5' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>50</div>
              <p className='text-xs text-muted-foreground'>
                +lorem ipzum
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <Card className='col-span-4'>
            <CardHeader>
              <CardTitle>Gestión de convocatorias</CardTitle>
            </CardHeader>
            <CardContent className='pl-2'>
              <GraphicData />
            </CardContent>
          </Card>
          <Card className='col-span-3'>
            <CardHeader>
              <CardTitle>Últimos proyectos 100% financiados</CardTitle>
              <CardDescription>
                Factoria F5 cerró 5 proyectos este mes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentCloseProjects />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </>
  )
}

export default ResumeBoard
