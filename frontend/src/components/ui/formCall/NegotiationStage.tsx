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

const negotationSchema = z.object({
  resolucionprovisional: z.string().optional(),
  limitedeentrega: z.string().optional(),
  realdeentrega: z.date().optional(),
  limiterespuesta: z.string().optional(),
  realrespuesta: z.string().optional(),
  resolucion: z.string().optional()
})

type NegotationValues = z.infer<typeof negotationSchema>;

function NegotationStage () {
  const form = useForm<NegotationValues>({
    resolver: zodResolver(negotationSchema)
  })

  function onSubmit (data: NegotationValues) {
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
              name='resolucionprovisional'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha de resolución provisional</FormLabel>
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
              name='limitedeentrega'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha límite de entrega de reformulación</FormLabel>
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
              name='realdeentrega'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha real de entrega de reformlación</FormLabel>
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
              name='limiterespuesta'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha límite para responder requerimientos</FormLabel>
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
            /> <FormField
              control={form.control}
              name='realrespuesta'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha real para responder requerimientos</FormLabel>
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
              name='recibooficial'
              shouldUnregister
              render={({ field }) => (
                <FormItem className='w-1/2 px-4 mb-4'>
                  <FormLabel className='mb-2'>Resolución provisional</FormLabel>
                  <FormControl>
                    <Input type='file' {...field} data-testid='file-memory' />
                  </FormControl>
                </FormItem>
              )}
            />
            <Separator className='my-5' />
            <div className=' w-full md:w-full mt-5 flex justify-center'>
              <div>
                <Button
                  className='w-20 rounded ml-2 '
                  variant='outline'
                  type='submit'
                >
                  Actualizar
                </Button>
              </div>
            </div>
          </CardContent>
        </form>
      </Form>
    </div>
  )
}

export default NegotationStage
