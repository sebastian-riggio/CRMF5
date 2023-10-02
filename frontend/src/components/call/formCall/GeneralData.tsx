import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '../../ui/textarea'
import { CardContent } from '../../ui/card'
import { Separator } from '../../ui/separator'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../ui/form'
import { toast } from '../../ui/use-toast'
import { Input } from '../../ui/input'
import DatePicker from '../../ui/DatePicker'
import { Popover, PopoverTrigger } from '../../ui/popover'
import { Switch } from '../../ui/switch'
import { Button } from '../../ui/button'

const generaldataSchema = z.object({
  tematica: z.string(),
  entidad: z.string(),
  dpto: z.string(),
  url: z.string(),
  urlbases: z.string(),
  texto: z.string(),
  entidades: z.string(),
  auditoria: z.string(),
  fechaopen: z.string(),
  fechaclose: z.string(),
  fechatime: z.string(),
  periodomax: z.string(),
  limitejustificacion: z.date(),
  presupuetsomax: z.string(),
  masinfo: z.string(),
  documentacion: z.string()
})

type GeneralDataValues = z.infer<typeof generaldataSchema>;

function GeneralData () {
  const form = useForm<GeneralDataValues>({
    resolver: zodResolver(generaldataSchema)
  })

  function onSubmit (data: GeneralDataValues) {
    console.log(data)
    toast({
      title: '¡Genial!',
      description: 'Acaba de actualizar su formulario.'
    })
  }
  return (
    <div className='flex flex-wrap'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name='tematica'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Título de convocatoria</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Título de convocatoria' {...field}
                      />
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
                      <Input
                        placeholder='Entidad convocante' {...field}
                      />
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
                      <Input
                        placeholder='Departamento o centro gestor'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Separator className='my-5' />
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
            <Separator className='my-5' />
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
              name='fechaopen'
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
              name='fechaclose'
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
              name='fechatime'
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
              name='periodomax'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Período máximo de ejecución</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='meses'
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
              name='presupuetsomax'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Presupuesto máximo solicitable</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='€'
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
              name='masinfo'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Información de interés</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Escriba aquí...'
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
              name='documentacion'
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
            <Separator className='my-5' />
            <div>
              <Button
                className='w-20 rounded ml-2 '
                variant='outline'
                type='submit'
              >
                Actualizar
              </Button>
            </div>
          </CardContent>
        </form>
      </Form>
    </div>
  )
}

export default GeneralData
