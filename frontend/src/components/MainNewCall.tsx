import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from './ui/textarea'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
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
  PopoverContent,
  PopoverTrigger
} from './ui/popover'
import { toast } from '../components/ui/use-toast'
import { Separator } from './ui/separator'
import gestionRegistroPost from '../interfaces/gestionRegistroPost'
import { AxiosResponse } from 'axios'
import { createdRegistroGestion } from '../services/registroConvocatoria'
import { useEffect } from 'react'
import DatePicker from './ui/DatePicker'
import { Calendar } from './ui/calendar'
import { cn } from '@/lib/utils'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

type AccountFormValues = z.infer<typeof gestionRegistroPost>

const schema = z.object({
  titulo: z.string().min(3).max(50).optional(),
  tematica: z.string().min(3).max(50).optional(),
  entidadConvocante: z.string().min(3).max(50).optional(),
  departamentoConvocante: z.string().min(3).max(50).optional(),
  publicacionOficial: z.string().url().optional(),
  convocatoriaEnlace: z.string().url().optional(),
  trabajoLineas: z.string().min(10).optional(),
  dirigidoEntidades: z.string().min(3).max(50),
  fechaApertura: z.date(),
  fechaCierre: z.date(),
  fechaResolucion: z.date(),
  periodoEjecucion: z.coerce.number().min(1).optional(),
  auditoria: z.boolean().optional(),
  presupuesto: z.coerce.number().min(0).optional(),
  otraInformacion: z.string().optional(),
  memoriaTecnica: z.object({
    fileMemory: z.instanceof(File).optional(),
    fileBudget: z.string().optional(),
    fileApplicationForm: z.string().optional(),
    fileOtherDocs: z.string().optional(),
  }).optional(),
});
const initialFormData = {
  titulo: '',
  tematica: '',
  // ... other fields ...
  fechaApertura: new Date(), // Set the default date to the current date
  fechaCierre: new Date(), // Set the default date to the current date
  fechaResolucion: new Date(), // Set the default date to the current date
  // ... other fields ...
};
type SchemaForm = z.infer<typeof schema>

function MainNewCall () {
  const form = useForm<SchemaForm>({
    resolver: zodResolver(schema),
    defaultValues: initialFormData
  })

  async function onSubmit (e, data: SchemaForm) {
    e.preventDefault()
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
  useEffect(() => {}, [])
  return (
    <div className='container mx-auto'>
      <Card>
        <CardHeader>
          <CardTitle>Nueva convocatoria
          </CardTitle>
        </CardHeader>
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
                              <Button
                                variant='outline'
                                className={cn(
                                  ' pl-3 text-left font-normal',
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
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date('1900-01-01')}
                              initialFocus
                              className='bg-gray-100'
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
                              <Button
                                variant='outline'
                                className={cn(
                                  ' pl-3 text-left font-normal',
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
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date('1900-01-01')}
                              initialFocus
                              className='bg-gray-100'
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
                              <Button
                                variant='outline'
                                className={cn(
                                  ' pl-3 text-left font-normal',
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
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date('1900-01-01')}
                              initialFocus
                              className='bg-gray-100'
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
