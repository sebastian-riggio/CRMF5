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
import { AxiosResponse } from 'axios'
import { postGestion } from '@/services/gestion'
import { Searchconvocatoria } from './SearchConvocatoria'

const applicationStage = z.object({
  proyecto: z.string().optional(),
  responsable: z.string(),
  convocatoria: z.string().optional(),
  financiador: z.string(),
  fechaPropuesta: z.date().optional(),
  numeroTramite: z.string().optional(),
  numeroExpediente: z.string().optional(),
  reciboOficial: z.instanceof(File).optional()
})

type AccountFormValues = z.infer<typeof applicationStage>;

function ApplicationStage () {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(applicationStage)
  })
  const [selectedProject, setSelectedProject] = useState<string>()
  const [selectedConvocatoria, setSelectedConvocatoria] = useState<string>()
  async function onSubmit (data: AccountFormValues) {
    try {
      if (!selectedProject) {
        console.error('No project selected.')
      }
      console.log('Selected Project:', selectedProject)
      data.proyecto = selectedProject || ''
      data.convocatoria = selectedConvocatoria || ''
      console.log('Data:', data)
      const response: AxiosResponse = await postGestion(data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    toast({
      title: '¡Genial!',
      description: 'Acaba de realizar una gestion de convocatoria.'
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
              render={() => (
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
              name='responsable'
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
            <FormField
              control={form.control}
              name='convocatoria'
              render={() => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Convocatoria</FormLabel>
                    <FormControl>
                      <Searchconvocatoria onSelectConvocatoria={setSelectedConvocatoria} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name='financiador'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Financiador</FormLabel>
                    <FormControl>
                      <Input placeholder='financiador' {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Separator className='my-5' />
            <FormField
              control={form.control}
              name='fechaPropuesta'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Fecha Propuesta</FormLabel>
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
              name='numeroTramite'
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
              name='numeroExpediente'
              render={({ field }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Código de subvención</FormLabel>
                    <FormControl>
                      <Input placeholder='Numero de expediente' {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Separator className='my-5' />
            <FormField
              control={form.control}
              name='reciboOficial'
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                  <div className='my-2'>
                    <FormLabel className='mb-2'>Recibo Oficial</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={value?.fileName}
                        onChange={(event) => {
                          onChange(event.target.files[0])
                        }}
                        type='file'
                        id='reciboOficial'
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
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
                Crear
              </Button>
            </div>
          </CardContent>
        </form>
      </Form>
    </div>
  )
}

export default ApplicationStage
