import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../input'
import { Label } from '../label'
import FormSectionData from './FormSectionData'
import DatePicker from '../DatePicker'
import { Button } from '../button'
import { Separator } from '../separator'
import accountFormSchema from '../../accountFormSchema'
import { SearchProjects } from './SearchProjects'
import { toast } from '../use-toast'

type AccountFormValues = z.infer<typeof accountFormSchema>;

function ApplicationStage () {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema)
  })
  // Registrar campos de entrada con reglas de validación
  const { register, handleSubmit, formState } = form

  // Define your form submission handler
  const onSubmit = (data: AccountFormValues) => {
    // Aca realizar acciones para  cuando se envía el formulario
  }
  return (
    <div className='flex flex-wrap'>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 m-6 flex flex-col my-4'>
        <Label className='mb-1'>Proyecto Factoria F5</Label>
        <SearchProjects />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3'>
        <FormSectionData
          title='Técnico responsable de F5'
          inputPlaceholder='Técnico'
          {...register('tecnico')}
        />
      </div>

      <Separator className='my-5' />

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker
          title='Fecha en la que se ha entregado la propuesta'
          {...register('fechadeinicio')}
        />
      </div>

      <Separator className='my-5' />

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3'>
        <FormSectionData
          title='Número de trámite' inputPlaceholder='Número de trámite'
          {...register('numerotramite')}
        />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3'>
        <FormSectionData
          title='Número de expediente' inputPlaceholder='Número de expediente'
          {...register('numeroexpediente')}
        />
      </div>

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3'>
        <FormSectionData
          title='Código de subvención' inputPlaceholder='Código generado por el sistema'
        />
      </div>

      <Separator className='my-5' />

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-6'>
        <Label htmlFor='pdf'>Recibo oficial</Label>
        <Input
          type='file'
          {...register('recibooficial')}
        />
      </div>

      <Separator className='my-5' />

      <div className=' w-full md:w-full mt-5 flex justify-center'>
        <Button
          variant='outline'
          onClick={() => {
            toast({
              title: 'Acaba de borrar su formulario.',
              description: 'Ya no podrá modificarlo.'
            })
          }}
        >
          Cancelar
        </Button>
        <Button
          className='w-20 rounded ml-2 '
          variant='outline'
          onClick={() => {
            toast({
              title: 'Acaba de actualizar su formulario.',
              description: 'Ya no podrá modificarlo.'
            })
          }}
        >
          Actualizar
        </Button>
      </div>

    </div>
  )
}

export default ApplicationStage
