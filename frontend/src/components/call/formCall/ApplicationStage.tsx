import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchProjects } from './SearchProjects'
import { useState } from 'react'
import { toast } from '../../ui/use-toast'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form'
import { CardContent } from '../../ui/card'
import { Input } from '../../ui/input'
import { Separator } from '../../ui/separator'
import DatePicker from '../../ui/DatePicker'
import { Button } from '../../ui/button'

const applicationStage = z.object({
  proyecto: z.string().optional(),
  tecnico: z.string(),
  propuesta: z.date().optional(),
  numerotramite: z.string().optional(),
  numeroexpediente: z.string().optional(),
  codigosistema: z.string().optional(),
  recibooficial: z.string().optional()
})

type AccountFormValues = z.infer<typeof applicationStage>;

function ApplicationStage () {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(applicationStage)
  })
  const [selectedProject, setSelectedProject] = useState<string>('')

  function onSubmit (data: AccountFormValues) {
    data.proyecto = selectedProject
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
              name='proyecto'
              render={({}) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Proyecto Factoria F5</FormLabel>
                    <FormControl>
                      <SearchProjects onSelectProject={setSelectedProject} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='tecnico'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Técnico responsable</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='Técnico'
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
              name='propuesta'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha en la que se ha entregado la propuesta</FormLabel>
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
              name='numerotramite'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Número de trámite</FormLabel>
                    <FormControl>
                      <Input placeholder='Número de trámite' {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='numeroexpediente'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Número de expediente</FormLabel>
                    <FormControl>
                      <Input placeholder='Número de expediente' {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='codigosistema'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Código de subvención</FormLabel>
                    <FormControl>
                      <Input placeholder='código generado por el sistema' {...field} />
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
                  <FormLabel className='mb-2'>Recibo oficial</FormLabel>
                  <FormControl>
                    <Input type='file' {...field} data-testid='file-memory' />
                  </FormControl>
                </FormItem>
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

export default ApplicationStage
