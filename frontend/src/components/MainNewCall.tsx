import { Textarea } from './ui/textarea'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card'

import { Switch } from './ui/switch'
import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '../lib/utils'
import { Button } from '../components/ui/button'
import { Calendar } from '../components/ui/calendar'

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
  PopoverContent,
  PopoverTrigger
} from './ui/popover'
import { toast } from '../components/ui/use-toast'
import { Separator } from './ui/separator'

/* const departamento = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' }
] as const */

const accountFormSchema = z.object({
  titulo: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  tematica: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  entidad: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  dpto: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  url: z.string({ required_error: 'Por favor ingrese un URL' }),
  urlbases: z.string({ required_error: 'Por favor ingrese un URL' }),
  texto: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  infotexto: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  entidades: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  number: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  file: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  fecha: z.date({
    required_error: 'Debes ingresar una fecha '
  }),
  fechaclose: z.date({
    required_error: 'Debes ingresar una fecha '
  }),
  fechatime: z.date({
    required_error: 'Debes ingresar una fecha '
  }),
  fechajus: z.date({
    required_error: 'Debes ingresar una fecha '
  }),
  auditoria: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }).optional(),
  area: z.string()
    .min(5, { message: 'Debes completar con el área' }),
  correo: z.string({ required_error: 'Debes ingresar un correo electrónico' }),
  telefono: z.number().min(9, { message: 'Debes ingresar un número de contacto' })

})

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

function MainNewCall () {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues
  })

  function onSubmit (data: AccountFormValues) {
    toast({
      title: 'Crea un nuevo usurario para Factoria F5:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }

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
                name='entidad'
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
                name='dpto'
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
                name='url'
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
                name='urlbases'
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
                name='texto'
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
                name='entidades'
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
                name='fecha'
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
                              <CalendarIcon className='absolute right-2 top-2 h-6 w-6 text-gray-500 pointer-events-none' /> {/* Coloca el icono dentro del campo */}
                            </div>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
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
                name='fechaclose'
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
                                className='md:pr-8' // Añade espacio para el icono
                              />
                              <CalendarIcon className='absolute right-2 top-2 h-6 w-6 text-gray-500 pointer-events-none' /> {/* Coloca el icono dentro del campo */}
                            </div>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
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
                name='fechatime'
                render={({ field }) => (
                  <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                    <div className='my-2'>
                      <FormLabel className='mb-2 md:mb-0'>Fecha límite de resolución </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <div className='relative'>
                              <Input
                                placeholder='Fecha límite de resolución'
                                {...field}
                                className='md:pr-8' // Añade espacio para el icono
                              />
                              <CalendarIcon className='absolute right-2 top-2 h-6 w-6 text-gray-500 pointer-events-none' /> {/* Coloca el icono dentro del campo */}
                            </div>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
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
                name='titulo'
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
                name='fechajus'
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
                            selected={field.value}
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
                name='number'
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
                name='infotexto'
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
                name='file'
                shouldUnregister
                render={({ field }) => (
                  <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                    <div className='my-2'>
                      <FormLabel className='mb-2'>Información de interés</FormLabel>
                      <FormControl className='mb-4'>
                        <Input type='file' {...field} />
                      </FormControl>
                      <FormControl className='mb-4'>
                        <Input type='file' {...field} />
                      </FormControl>
                      <FormMessage />
                      <FormControl className='mb-4'>
                        <Input type='file' {...field} />
                      </FormControl>
                      <FormControl className='mb-4'>
                        <Input type='file' {...field} />
                      </FormControl>
                    </div>
                  </FormItem>
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
