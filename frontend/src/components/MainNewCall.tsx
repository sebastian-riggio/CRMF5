import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from './ui/textarea'
import {
  Card,
  CardContent,
  CardFooter
} from './ui/card'
import { Switch } from './ui/switch'
import { Button } from '../components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../components/ui/form'
import { Input } from './ui/input'
import {
  Popover,
  PopoverTrigger
} from './ui/popover'
import { toast } from '../components/ui/use-toast'
import { Separator } from './ui/separator'
import gestionRegistroPost from '../interfaces/gestionRegistroPost'
import { AxiosResponse } from 'axios'
import { createdRegistroGestion } from '../services/registroConvocatoria'
import DatePicker from './ui/DatePicker'

type AccountFormValues = z.infer<typeof gestionRegistroPost>

function MainNewCall () {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(gestionRegistroPost)
  })

  async function onSubmit (data: AccountFormValues) {
    console.log(data)
    try {
      const response: AxiosResponse = await createdRegistroGestion(data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    toast({
      title: 'Convocatoria registrada con exito:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }

  return (
    <div className='container mx-auto'>
      <Card>
        <h1 className='text-4xl font-semibold mb-5'>Nueva Convocatoria</h1>
        <Separator />
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <CardContent className='flex flex-wrap'>
                <FormField
                  control={form.control}
                  name='titulo'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Título de convocatoria</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Título de convocatoria'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='tematica'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Temática</FormLabel>
                        <FormControl>
                          <Input placeholder='Temática' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='entidadConvocante'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Entidad convocante</FormLabel>
                        <FormControl>
                          <Input placeholder='Entidad convocante' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='departamentoConvocante'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Departamento o centro gestor</FormLabel>
                        <FormControl>
                          <Input placeholder='Departamento o centro gestor' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='publicacionOficial'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Enlace a publicación oficial</FormLabel>
                        <FormControl>
                          <Input placeholder='https://' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='convocatoriaEnlace'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Enlace a bases de convocatoria</FormLabel>
                        <FormControl>
                          <Input placeholder='https://' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='trabajoLineas'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Líneas específicas de trabajo</FormLabel>
                        <FormControl>
                          <Textarea placeholder='Escriba aquí...' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='dirigidoEntidades'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Entidades a la que se dirige</FormLabel>
                        <FormControl>
                          <Input placeholder='Entidades a las que se dirige' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='fechaApertura'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2 md:mb-0'>Fecha de apertura</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <DatePicker
                                title=''
                                {...field}
                              />
                            </FormControl>
                          </PopoverTrigger>
                        </Popover>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='fechaCierre'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2 md:mb-0'>Fecha de cierre</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <DatePicker
                                title=''
                                {...field}
                              />
                            </FormControl>
                          </PopoverTrigger>
                        </Popover>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='fechaResolucion'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2 md:mb-0'>Fecha límite de resolución </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <DatePicker
                                title=''
                                {...field}
                              />
                            </FormControl>
                          </PopoverTrigger>
                        </Popover>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='periodoEjecucion'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Período máximo de ejecución</FormLabel>
                        <FormControl>
                          <Input type='number' placeholder='Período máximo de ejecución' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='auditoria'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2 flex'>
                        <div>
                          <FormLabel className='mb-2'>Auditoría externa obligatoria</FormLabel>
                        </div>
                        <div>
                          <FormControl>
                            <Switch {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='presupuesto'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Presupuesto máximo solicitable</FormLabel>
                        <FormControl>
                          <Input placeholder='€' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='otraInformacion'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Información de interés</FormLabel>
                        <FormControl>
                          <Textarea placeholder='Escriba aquí...' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='memoriaTecnica'
                  shouldUnregister
                  render={({ field }) => (
                    <div className='my-2 flex flex-wrap -mx-4'>
                      <FormItem className='w-1/2 px-4 mb-4'>
                        <FormLabel className='mb-2'>Memoria técnica</FormLabel>
                        <FormControl>
                          <Input type='file' {...field} data-testid='file-memory' />
                        </FormControl>
                      </FormItem>
                      <FormItem className='w-1/2 px-4 mb-4'>
                        <FormLabel className='mb-2'>Modelo Presupuesto</FormLabel>
                        <FormControl>
                          <Input type='file' {...field} data-testid='file-budget' />
                        </FormControl>
                      </FormItem>
                      <FormItem className='w-1/2 px-4 mb-4'>
                        <FormLabel className='mb-2'>Formulario solicitud</FormLabel>
                        <FormControl>
                          <Input type='file' {...field} data-testid='file-application-form' />
                        </FormControl>
                      </FormItem>
                      <FormItem className='w-1/2 px-4 mb-4'>
                        <FormLabel className='mb-2'>Otra documentación</FormLabel>
                        <FormControl>
                          <Input type='file' {...field} data-testid='file-other-docs' />
                        </FormControl>
                      </FormItem>
                    </div>
                  )}
                />
              </CardContent>
              <CardFooter className='flex justify-center space-x-6'>
                <Button type='submit' className='w-32 hover:bg-FF4700-dark text-white font-bold py-3 rounded'>
                  Cancelar
                </Button>
                <Button type='submit' className='w-32 hover:bg-FF4700-dark text-white font-bold py-3 rounded'>
                  Crear
                </Button>
              </CardFooter>

            </form>
          </Form>
        </div>
      </Card>
    </div>
  )
}

export default MainNewCall
