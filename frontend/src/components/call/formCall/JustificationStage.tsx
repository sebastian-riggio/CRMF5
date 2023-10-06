import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import DatePicker from '../../ui/DatePicker'
import { Button } from '../../ui/button'
import { Separator } from '../../ui/separator'
import { toast } from '../../ui/use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../ui/form'
import { CardContent, CardFooter } from '../../ui/card'
import { Textarea } from '../../ui/textarea'

const justificationSchema = z.object({
  informejustificativo: z.date().optional(),
  limiterespuestarequerimiento1: z.date().optional(),
  respuestarequerimiento1: z.date().optional(),
  limiterespuestarequerimiento2: z.date().optional(),
  respuestarequerimiento2: z.date().optional(),
  seguimiento: z.string().optional()
})
type JustificationValues = z.infer<typeof justificationSchema>;

function JustificationStage () {
  const form = useForm<JustificationValues>({
    resolver: zodResolver(justificationSchema)
  })

  function onSubmit (data: JustificationValues) {
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
              name='informejustificativo'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Fecha de entrega de informe justificativo</FormLabel>
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
              name='limiterespuestarequerimiento1'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Fecha límite para responder requerimiento 1</FormLabel>
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
              name='respuestarequerimiento1'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Fecha en que se respondió requerimiento 1</FormLabel>
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
              name='limiterespuestarequerimiento2'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Fecha límite para responder requerimiento 2</FormLabel>
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
              name='respuestarequerimiento2'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Fecha en que se respondió requerimiento 2</FormLabel>
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
              name='seguimiento'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='flex flex-col space-y-2 mt-5'>
                    <FormLabel className='text-sm text-gray-600'>Nota de seguimiento</FormLabel>
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

export default JustificationStage
