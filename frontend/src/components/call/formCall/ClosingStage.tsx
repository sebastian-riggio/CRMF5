import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import DatePicker from '@/components/ui/DatePicker'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { toast } from '@/components/ui/use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { CardContent, CardFooter } from '@/components/ui/card'
import { StatusClose } from './StatusClose'

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
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <CardContent className='flex flex-wrap'>
            <FormField
              control={form.control}
              name='aprobacionoficial'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                    <FormLabel className='text-sm text-gray-600'>Fecha de aprobación oficial de informe de justificación</FormLabel>
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
                  <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                    <FormLabel className='text-sm text-gray-600'>Estado de resolución</FormLabel>
                    <FormControl>
                      <StatusClose />
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
                  <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                    <FormLabel className='text-sm text-gray-600'>Fecha de recepción pago final</FormLabel>
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
                  <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                    <FormLabel className='text-sm text-gray-600'>Monto total concedido</FormLabel>
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
                  <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                    <FormLabel className='text-sm text-gray-600'>Porcentaje de último pago</FormLabel>
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
                  <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                    <FormLabel className='text-sm text-gray-600'>Documento de cierre</FormLabel>
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

export default ClosingStage
