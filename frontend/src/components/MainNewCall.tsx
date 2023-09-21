import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


import { Textarea } from './ui/textarea';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Switch } from './ui/switch';
import { CalendarIcon } from '@radix-ui/react-icons';

import { Button } from '../components/ui/button';
import { Calendar } from '../components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from './ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';
import { toast } from '../components/ui/use-toast';
import { Separator } from './ui/separator';
import gestionRegistroPost from '../interfaces/gestionregistroPost';
import { AxiosResponse } from 'axios';
import { createdRegistroGestion } from '../services/registroConvocatoria';
import { useEffect } from 'react';


type AccountFormValues = z.infer<typeof gestionRegistroPost>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

function MainNewCall () {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(gestionRegistroPost),
    defaultValues
  })

 async function onSubmit (data: AccountFormValues) {

try {
  const response: AxiosResponse = await createdRegistroGestion(data)
  console.log(response)
}catch(error){
  console.log(error)
}
    toast({
      title: 'Crea un nuevo usurario para Factoria F5:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }
  useEffect(() => {}, []);
  return (
    <Card className='m-4'>
      <CardHeader>
        <CardTitle>Nueva convocatoria</CardTitle>
        {/* <CardTitle>subtitulo</CardTitle> */}
      </CardHeader>
      <Separator />
      <div className='container mx-auto'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <CardContent className='flex flex-wrap -mx-10'>
              <FormField
                control={form.control}
                name='titulo'
                render={({ field }) => (
                  <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                    <div className='my-2'>
                      <FormLabel className='mb-2'>Título de convocatoria</FormLabel>
                      <FormControl>
                        <Input placeholder='Título de convocatoria' {...field} />
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
                            <div className='relative'>
                              <Input 
                                placeholder='Fecha de apertura'
                                {...field}
                                className='md:pr-8'
                                
                              />
                              <CalendarIcon className='absolute right-2 top-2 h-6 w-6 text-gray-500 pointer-events-none' />
                            </div>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={new Date(field.value)}
                            // eslint-disable-next-line react/jsx-handler-names
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date('2000-01-01')}
                            initialFocus
                          />
                        </PopoverContent>
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
                            <div className='relative'>
                              <Input
                                placeholder='Fecha de cierre'
                                {...field}
                                className='md:pr-8'
                              />
                              <CalendarIcon className='absolute right-2 top-2 h-6 w-6 text-gray-500 pointer-events-none' />
                            </div>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={new Date(field.value)}
                            // eslint-disable-next-line react/jsx-handler-names
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date('2000-01-01')}
                            initialFocus
                          />
                        </PopoverContent>
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
                            <div className='relative'>
                              <Input type='datetime-local'
                                placeholder='Fecha límite de resolución'
                                {...field}
                                className='md:pr-8'
                              />
                              <CalendarIcon className='absolute right-2 top-2 h-6 w-6 text-gray-500 pointer-events-none' />
                            </div>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={new Date(field.value)}
                            // eslint-disable-next-line react/jsx-handler-names
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date('1900-01-01')}
                            initialFocus
                          />
                        </PopoverContent>
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
                        <Input placeholder='Período máximo de ejecución' {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='fechaJustificacion'
                render={({ field }) => (
                  <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                    <div className='my-2'>
                      <FormLabel className='mb-2 md:mb-0'>Fecha límite de justificación</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <div className='relative'>
                              <Input
                                placeholder='Fecha límite de justificación'
                                {...field}
                                className='md:pr-8'
                              />
                              <CalendarIcon className='absolute right-2 top-2 h-6 w-6 text-gray-500 pointer-events-none' />
                            </div>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={new Date(field.value)}
                            // eslint-disable-next-line react/jsx-handler-names
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date('1900-01-01')}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
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
                      <FormLabel className='mb-2'>Memoria Técnica</FormLabel>
                      <FormControl>
                        <Input type='file' {...field} />
                      </FormControl>
                    </FormItem>
                    <FormItem className='w-1/2 px-4 mb-4'>
                      <FormLabel className='mb-2'>Modelo Presupuesto</FormLabel>
                      <FormControl>
                        <Input type='file' {...field} />
                      </FormControl>
                    </FormItem>
                    <FormItem className='w-1/2 px-4 mb-4'>
                      <FormLabel className='mb-2'>Formulario de Solicitud</FormLabel>
                      <FormControl>
                        <Input type='file' {...field} />
                      </FormControl>
                    </FormItem>
                    <FormItem className='w-1/2 px-4 mb-4'>
                      <FormLabel className='mb-2'>Otra Documentacíon</FormLabel>
                      <FormControl>
                        <Input type='file' {...field} />
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
  )
}

export default MainNewCall
