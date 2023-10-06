import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProjectStatus } from './ProjectStatus'
import { toast } from '@/components/ui/use-toast'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { CardContent, CardFooter } from '@/components/ui/card'
import DatePicker from '@/components/ui/DatePicker'
import { Input } from '@/components/ui/input'
import { Separator } from '@radix-ui/react-separator'
import { Button } from '@/components/ui/button'

const concessionSchema = z.object({
  estadoSolicitud: z.enum(['cancelado', 'denegado', 'otorgado']).optional(),
  fechaResolucionFinal: z.date().optional(),
  montoConcedido: z.string(),
  fechaRecepcionDesembolso: z.date(),
  fechaPrimerDesembolso: z.date().optional(),
  montoPrimerDesembolso: z.string().optional(),
  porcientoPrimerDesembolso: z.string().optional(),
  fechaInicioGastos: z.date().optional(),
  fechaFinalizacionGastos: z.date().optional(),
  fechaPrimerSeguimiento: z.date().optional(),
  fechaLimiteInformeFinalTecnico: z.date().optional(),
  fechaLimiteInformeFinalEconomico: z.date().optional(),
  seguimientoInformes: z.string().optional(),
  adjuntarResolucionOtorgamiento: z.string().optional()
})

type ConscessionValues = z.infer<typeof concessionSchema>;

function ConcessionStage () {
  const form = useForm<ConscessionValues>({
    resolver: zodResolver(concessionSchema)
  })
  function onSubmit (data: ConscessionValues) {
    console.log(data)
    toast({
      title: '¡Genial!',
      description: 'Acaba de actualizar su formulario.'
    })
  }
  return (
    <div className='flex flex-wrap'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <CardContent className='flex flex-wrap'>
            <FormField
              control={form.control}
              name='estadoSolicitud'
              render={() => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Estado</FormLabel>
                    <FormControl>
                      <ProjectStatus />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name='estadoSolicitud'
              render={() => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Estado</FormLabel>
                    <FormControl>
                      <ProjectStatus
                        {...form.control.estado}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            /> */}

            <Separator className='my-5' />

            <FormField
              control={form.control}
              name='fechaResolucionFinal'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Fecha de resolución final</FormLabel>
                    <FormControl>
                      <DatePicker
                        title=''
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
              name='montoConcedido'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Monto final concedido</FormLabel>
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
              name='fechaPrimerDesembolso'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Fecha prevista de primer desembolso</FormLabel>
                    <FormControl>
                      <DatePicker
                        title=''
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
              name='porcientoPrimerDesembolso'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='mb-2'>Fecha primer desembolso</FormLabel>
                    <FormControl>
                      <DatePicker
                        title=''
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
              name='montoPrimerDesembolso'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Monto del primer desembolso</FormLabel>
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
              name='montoPrimerDesembolso'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Porcentaje primer desembolso</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='%'
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
              name='fechaInicioGastos'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Fecha aprobada de inicio gasto</FormLabel>
                    <FormControl>
                      <DatePicker
                        title=''
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
              name='fechaFinalizacionGastos'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Fecha aprobada de finalización gasto</FormLabel>
                    <FormControl>
                      <DatePicker
                        title=''
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
              name='fechaPrimerSeguimiento'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Fecha primer informe seguimiento</FormLabel>
                    <FormControl>
                      <DatePicker
                        title=''
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
              name='fechaLimiteInformeFinalTecnico'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Fecha límite entrega informe final técnico</FormLabel>
                    <FormControl>
                      <DatePicker
                        title=''
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
              name='fechaLimiteInformeFinalEconomico'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Fecha límite entrega informe final económico</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='meses'
                        {...field}
                        value={field.value instanceof Date ? field.value.toISOString() : field.value}
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
              name='seguimientoInformes'
              shouldUnregister
              render={({ field }) => (
                <FormItem className='w-1/2 px-4 mb-4'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Seguimiento de informes</FormLabel>
                    <FormControl>
                      <Input type='file' {...field} data-testid='file-memory' />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className='flex justify-center space-x-6'>
            <Button
              className='w-32 hover:bg-FF4700-dark text-white font-bold py-3 rounded'
              type='submit'
            >
              Actualizar
            </Button>
          </CardFooter>
        </form>
      </Form>
    </div>
  )
}

export default ConcessionStage
