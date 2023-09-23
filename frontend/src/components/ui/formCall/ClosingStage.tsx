import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../input'
import DatePicker from '../DatePicker'
import { Button } from '../button'
import { Separator } from '../separator'
import { toast } from '../use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../form'
import { CardContent } from '../card'

const closingSchema = z.object({
  aprobacionoficial: z.date().optional(),
  estadoderesolucion: z.string().optional(),
  pagofinal: z.date().optional(),
  totalrecibido: z.string().optional(),
  porcentajerecibido: z.string().optional(),
  cierre: z.string().optional()
})

type ClosingValues = z.infer<typeof closingSchema>;

function ClosingStage () {
  const form = useForm<ClosingValues>({
    resolver: zodResolver(closingSchema)
  })

  function onSubmit (data: ClosingValues) {
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
              name='aprobacionoficial'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha de aprobación oficial de informe de justificación</FormLabel>
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
              name='estadoderesolucion'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Estado de resolución</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
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
              name='pagofinal'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha de recepción pago final</FormLabel>
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
              name='totalrecibido'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Monto total concedido</FormLabel>
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
              name='porcentajerecibido'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Porcentaje de último pago</FormLabel>
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
              name='cierre'
              shouldUnregister
              render={({ field }) => (
                <FormItem className='w-1/2 px-4 mb-4'>
                  <FormLabel className='mb-2'>Documento de cierre</FormLabel>
                  <FormControl>
                    <Input type='file' {...field} data-testid='file-memory' />
                  </FormControl>
                </FormItem>
              )}
            />
            <Separator className='my-5' />
            <Button
              className='w-20 rounded ml-2 '
              variant='outline'
            >
              Actualizar
            </Button>
          </CardContent>
        </form>
      </Form>
    </div>
  )
}

export default ClosingStage
