import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { Textarea } from '../textarea'

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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name='informejustificativo'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha de entrega de informe justificativo</FormLabel>
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
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha límite para responder requerimiento 1</FormLabel>
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
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha en que se respondió requerimiento 1</FormLabel>
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
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha límite para responder requerimiento 2</FormLabel>
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
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha en que se respondió requerimiento 2</FormLabel>
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
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Nota de seguimiento</FormLabel>
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
            <Separator className='my-5' />

            <div className=' w-full md:w-full mt-5 flex justify-center'>
              <Button
                className='w-20 rounded ml-2 '
                variant='outline'
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

export default JustificationStage
