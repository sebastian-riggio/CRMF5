import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { useState } from 'react'

type TabValue = 'account' | 'password';

export function LoginTab () {
  const [activeTab, setActiveTab] = useState<TabValue>('account')
  const [hoveredTab, setHoveredTab] = useState<TabValue | null>(null)

  const handleTabClick = (value: TabValue) => {
    setActiveTab(value)
  }

  const handleTabMouseEnter = (value: TabValue) => {
    setHoveredTab(value)
  }

  const handleTabMouseLeave = () => {
    setHoveredTab(null)
  }
  return (
    <Tabs defaultValue='account' className='w-[350px]'>
      <TabsList className='grid w-full grid-cols-2 mb-1'>
        <TabsTrigger
          value='account'
          className={`text-sm h-8 ${activeTab === 'account' || hoveredTab === 'account'
            ? 'bg-gray-200 rounded-sm'
            : 'bg-gray-100 rounded-sm'
              }`}
          onClick={() => handleTabClick('account')}
          onMouseEnter={() => handleTabMouseEnter('account')}
          onMouseLeave={handleTabMouseLeave}
        >
          Cuenta
        </TabsTrigger>
        <TabsTrigger
          value='password'
          className={`text-sm h-8 ${activeTab === 'password' || hoveredTab === 'password'
            ? 'bg-gray-200 rounded-sm'
            : 'bg-gray-100 rounded-sm'
              }`}
          onClick={() => handleTabClick('password')}
          onMouseEnter={() => handleTabMouseEnter('password')}
          onMouseLeave={handleTabMouseLeave}
        >
          Contraseña
        </TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <Card className='bg-transparent'>
          <CardHeader className='flex flex-col items-center'>
            <CardTitle>Iniciar sesión</CardTitle>
            <CardDescription style={{ textAlign: 'center', fontSize: '12px', width: '250px' }}>
              Inicie sesión con su email y contraseña para acceder al sistema.
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col items-center space-y-2'>
            <div className='space-y-1 w-[250px]'>
              <Label htmlFor='email'>Email</Label>
              <Input type='email' id='email' placeholder='Email' className='h-8' />
            </div>
            <div className='space-y-1 w-[250px]'>
              <Label htmlFor='password'>Contraseña</Label>
              <Input type='password' id='password' defaultValue='@peduarte' className='h-8' />
            </div>
          </CardContent>
          <CardFooter className='flex flex-col items-center'>
            <Button className='h-8 bg-4311B9 text-white hover:bg-4311B9-dark w-[250px]'>Entrar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value='password'>
        <Card className='bg-transparent'>
          <CardHeader className='flex flex-col items-center'>
            <CardTitle>Cambio de contraseña</CardTitle>
            <CardDescription style={{ textAlign: 'center', fontSize: '12px', width: '250px' }}>
              Cambie su contraseña. Después de guardar, se cerrará su sesión.
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col items-center space-y-2'>
            <div className='space-y-1 w-[250px]'>
              <Label htmlFor='current'>Contraseña actual</Label>
              <Input id='current' type='password' className='h-8' />
            </div>
            <div className='space-y-1 w-[250px]'>
              <Label htmlFor='new'>Nueva contraseña</Label>
              <Input id='new' type='password' className='h-8' />
            </div>
          </CardContent>
          <CardFooter className='flex flex-col items-center'>
            <Button className='h-8 bg-4311B9 text-white hover:bg-4311B9-dark w-[250px]'>Guardar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
