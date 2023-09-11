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

export function LoginTab () {
  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <div className='bg-white rounded-lg border p-1'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='account'>Cuenta</TabsTrigger>
          <TabsTrigger value='password'>Contraseña</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value='account'>
        <Card>
          <CardHeader>
            <CardTitle>Iniciar sesión</CardTitle>
            <CardDescription>
              Inicie sesión con su email y contraseña para acceder al sistema.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='email'>Email</Label>
              <Input type='email' id='email' placeholder='Email' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='password'>Contraseña</Label>
              <Input type='password' id='password' defaultValue='@peduarte' />
            </div>
          </CardContent>
          <CardFooter className='flex justify-end'>
            <Button className='bg-4311B9 text-white hover:bg-4311B9-dark '>Entrar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value='password'>
        <Card>
          <CardHeader>
            <CardTitle>Cambio de contraseña</CardTitle>
            <CardDescription>
              Cambie su contraseña aquí. Después de guardar, se cerrará su sesión.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='current'>Contraseña actual</Label>
              <Input id='current' type='password' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='new'>Nueva contraseña</Label>
              <Input id='new' type='password' />
            </div>
          </CardContent>
          <CardFooter className='flex justify-end'>
            <Button className='bg-4311B9 text-white hover:bg-4311B9-dark'>Guardar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
