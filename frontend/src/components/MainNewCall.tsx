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
  PopoverContent,
  PopoverTrigger
} from './ui/popover'
import { toast } from '../components/ui/use-toast'
import { Separator } from './ui/separator'
import gestionRegistroPost from '../interfaces/gestionRegistroPost'
import { AxiosResponse } from 'axios'
import { createdRegistroGestion } from '../services/registroConvocatoria'
import DatePicker from './ui/DatePicker'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Calendar } from './ui/calendar'

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
  auditoria: z.string().optional(),
  presupuesto: z.coerce.number().min(0).optional(),
  otraInformacion: z.string().optional(),
  memoriaTecnica: z.instanceof(File).optional(),
  // memoriaTecnica: z.object({
  //   fileMemory: z.instanceof(File).optional(),
  //   fileBudget: z.string().optional(),
  //   fileApplicationForm: z.string().optional(),
  //   fileOtherDocs: z.string().optional(),
  // }).optional(),
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

  async function onSubmit (data: SchemaForm) {
    // data = {...data ,picture: form.getValues('picture')}
    try {
      const response: AxiosResponse = await createdRegistroGestion(data)
      console.log(response)
      console.log(form.getValues('memoriaTecnica'))
    } catch (error) {
      console.log(error, 'Error')
    }
    toast({
      title: 'Convocatoria registrada con exito:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 1)}</code>
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
                          <Input placeholder='Temática' {...field} data-testid='titulo-input' />
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
                          <Input placeholder='Entidad convocante' {...field} data-testid='entidad-input' />
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
                          <Input placeholder='Departamento o centro gestor' {...field} data-testid='dpto-input' />
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
                          <Input placeholder='https://' {...field} data-testid='link-oficial-input' />
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
                          <Input placeholder='https://' {...field} data-testid='link-bases-input' />
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
                          <Textarea placeholder='Escriba aquí...' {...field} data-testid='entidad-especifica-input' />
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
                          <Input placeholder='Entidades a las que se dirige' {...field} data-testid='lineas-input' />
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
                          <Input type='number' placeholder='Período máximo de ejecución' {...field} data-testid='maximo-input' />
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
                            <Switch id='sdssd' {...field} />
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
                          <Input placeholder='€' {...field} data-testid='presu-input' />
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
                          <Textarea placeholder='Escriba aquí...' {...field} data-testid='informacion-input' />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='memoriaTecnica'
                  render={({ field: { value, onChange, ...field } }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Período máximo de ejecución</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={value?.fileName}
                            onChange={(event) => {
                              onChange(event.target.files[0]);
                            }}
                            type='file'
                            id='picture'
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                {/* <FormField
                  control={form.control}
                  name='memoriaTecnica'
                  render={({ field }) => (
                    <div className='my-2 flex flex-wrap -mx-4'>
                      <FormItem className='w-1/2 px-4 mb-4'>
                        <FormLabel id='memoriaTecnica' className='mb-2'>Memoria técnica</FormLabel>
                        <FormControl>
                          <Input id='memoriaTecnica' type='file' {...field} data-testid='file-memory' />
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
                /> */}
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
