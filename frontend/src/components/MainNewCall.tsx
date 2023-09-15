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
import { format } from 'date-fns'
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
  { label: 'Factoria F5 - Madrid', value: 'mad' },
  { label: 'Factoria F5 - Barcelona', value: 'bcn' },
  { label: 'Factoria F5 - Asturias', value: 'ast' },
  { label: 'Factoría F5 - People and culture', value: 'p&c' },
  { label: 'Factoría F5 - Admin, contabilidad y finanzas', value: 'con' },
  { label: 'Factoría F5- Oficina soporte proyectos y calidad', value: 'cal' },
  { label: 'Factoría F5 -  Dirección general', value: 'gen' },
  { label: 'Otro', value: 'otro' },
] as const
 */
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
    .number()
    .min(2, {
      message: 'Debe completar este campo'
    }),
  file: z
    .string()
    .min(2, {
      message: 'Debe completar este campo'
    }),

  area: z.string()
    .min(5, { message: 'Debes completar con el área' }),
  fecha: z.date({
    required_error: 'Debes ingresar una fecha '
  }),
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
            <CardContent>
              <FormField
                control={form.control}
                name='titulo'
                render={({ field }) => (
                  <FormItem className='md:flex-wrap'>
                    <div className='my-2 flex flex-wrap'>
                      <FormLabel>Título de convocatoria</FormLabel>
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
                  <FormItem className='md:flex-wrap'>
                    <div className='my-2 flex flex-wrap'>
                      <FormLabel>Temática</FormLabel>
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
                  <FormItem className='md:flex-wrap'>
                    <div className='my-2 flex flex-wrap'>
                      <FormLabel>Entidad convocante</FormLabel>
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
                  <FormItem className='md:flex-wrap'>
                    <div className='my-2 flex flex-wrap'>
                      <FormLabel>Departamento o centro gestor</FormLabel>
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
                  <FormItem className='md:flex-wrap'>
                    <div className='my-2 flex flex-wrap'>
                      <FormLabel>Enlace a publicación oficial</FormLabel>
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
                  <FormItem className='md:flex-wrap'>
                    <div className='my-2 flex flex-wrap'>
                      <FormLabel>Enlace a bases de convocatoria</FormLabel>
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
                  <FormItem className='md:flex-wrap'>
                    <div className='my-2 flex flex-wrap'>
                      <FormLabel>Líneas específicas de trabajo</FormLabel>
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
                  <FormItem className='md:flex-wrap'>
                    <div className='my-2 flex flex-wrap'>
                      <FormLabel>Entidades a la que se dirige</FormLabel>
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
                  <FormItem className='flex flex-col'>
                    <div className='my-2 flex justifiy flex-wrap md:flex-nowrap'>
                      <FormLabel>Fecha de apertura</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant='outline'
                              className={cn(
                                'w-[240px] pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value
                                ? (
                                    format(field.value, 'PPP')
                                  )
                                : (
                                  <span>Elige la fecha </span>
                                  )}
                              <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
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
                name='fecha'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <div className='my-2 flex justifiy flex-wrap md:flex-nowrap'>
                      <FormLabel>Fecha de cierre</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant='outline'
                              className={cn(
                                'w-[240px] pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value
                                ? (
                                    format(field.value, 'PPP')
                                  )
                                : (
                                  <span>Elige fecha</span>
                                  )}
                              <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
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
                name='fecha'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <div className='my-2 flex justifiy flex-wrap md:flex-nowrap'>
                      <FormLabel>Fecha límite de resolución </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant='outline'
                              className={cn(
                                'w-[240px] pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value
                                ? (
                                    format(field.value, 'PPP')
                                  )
                                : (
                                  <span>Elige la fecha </span>
                                  )}
                              <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
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
                name='titulo'
                render={({ field }) => (
                  <FormItem className='md:flex-wrap'>
                    <div className='my-2 flex flex-wrap'>
                      <FormLabel>Período máximo de ejecución</FormLabel>
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
                name='fecha'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <div className='my-2 flex justifiy flex-wrap md:flex-nowrap'>
                      <FormLabel>Fecha límite de justificación </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant='outline'
                              className={cn(
                                'w-[240px] pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value
                                ? (
                                    format(field.value, 'PPP')
                                  )
                                : (
                                  <span>Elige la fecha </span>
                                  )}
                              <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
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
                name='titulo'
                render={({ field }) => (
                  <FormItem className='md:flex-wrap'>
                    <div className='my-2 flex flex-wrap'>
                      <FormLabel>Auditoría externa obligatoria</FormLabel>
                      <FormControl>
                        <Switch {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='number'
                render={({ field }) => (
                  <FormItem className='md:flex-wrap'>
                    <div className='my-2 flex flex-wrap'>
                      <FormLabel>Presupuesto máximo solicitable</FormLabel>
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
                  <FormItem className='md:flex-wrap'>
                    <div className='my-2 flex flex-wrap'>
                      <FormLabel>Información de interés</FormLabel>
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
                render={({ field }) => (
                  <FormItem className='md:flex-wrap'>
                    <div className='my-2 flex flex-wrap'>
                      <FormLabel>Información de interés</FormLabel>
                      <FormControl>
                        <Input type='file' {...field} />
                      </FormControl>
                      <FormControl>
                        <Input type='file' {...field} />
                      </FormControl>
                      <FormMessage />
                      <FormControl>
                        <Input type='file' {...field} />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type='submit'>Cancelar</Button>
              <Button type='submit'>Crear</Button>
            </CardFooter>
          </form>
        </Form>
      </div>
    </Card>
  )
}

export default MainNewCall
