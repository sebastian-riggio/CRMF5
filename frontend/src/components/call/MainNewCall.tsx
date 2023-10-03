import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '../ui/textarea'
import {
  Card,
  CardContent,
  CardFooter
} from '../ui/card'
import { Switch } from '../ui/switch'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import {
  Popover,
  PopoverTrigger
} from '../ui/popover'
import { AxiosResponse } from 'axios'
import { createdRegistroGestion } from '../../services/registroConvocatoria'
import DatePicker from '../ui/DatePicker'
import { toast } from '../ui/use-toast'
import { Separator } from '../ui/separator'

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
  modeloPresupuesto: z.instanceof(File).optional(),
  formularioSolicitud: z.instanceof(File).optional(),
  otraDocumentacion: z.instanceof(File).optional()
})

type SchemaForm = z.infer<typeof schema>

function MainNewCall () {
  const form = useForm<SchemaForm>({
    resolver: zodResolver(schema)
  })

  async function onSubmit (data: SchemaForm) {
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
                    <FormItem>
                      <div className='flex flex-col space-y-2 mt-5'>
                        <FormLabel className='text-sm text-gray-600'>Fecha de inicio </FormLabel>
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
                    <FormItem>
                      <div className='flex flex-col space-y-2 mt-5'>
                        <FormLabel className='text-sm text-gray-600'>Fecha de Cierre </FormLabel>
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
                    <FormItem>
                      <div className='flex flex-col space-y-2 mt-5'>
                        <FormLabel className='text-sm text-gray-600'>Fecha de resolucíon </FormLabel>
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
                  render={({ field: { value, onChange, ...field } }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Memoria Tecnica</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={value?.fileName}
                            onChange={(event) => {
                              onChange(event.target.files[0])
                            }}
                            type='file'
                            id='memoriaTecnica'
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='modeloPresupuesto'
                  render={({ field: { value, onChange, ...field } }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Modelo Presupuesto</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={value?.fileName}
                            onChange={(event) => {
                              onChange(event.target.files[0])
                            }}
                            type='file'
                            id='modeloPresupuesto'
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='formularioSolicitud'
                  render={({ field: { value, onChange, ...field } }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Formulario Solicitud</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={value?.fileName}
                            onChange={(event) => {
                              onChange(event.target.files[0])
                            }}
                            type='file'
                            id='formularioSolicitud'
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='otraDocumentacion'
                  render={({ field: { value, onChange, ...field } }) => (
                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                      <div className='my-2'>
                        <FormLabel className='mb-2'>Otra Documentación</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={value?.fileName}
                            onChange={(event) => {
                              onChange(event.target.files[0])
                            }}
                            type='file'
                            id='otraDocumentacion'
                          />
                        </FormControl>
                        <FormMessage />
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
    </div>
  )
}

export default MainNewCall
