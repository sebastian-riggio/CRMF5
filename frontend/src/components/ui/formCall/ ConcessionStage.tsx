import { Input } from '../input'
import { Label } from '../label'
import DatePicker from '../DatePicker'
import { Separator } from '../separator'
import FormSectionData from './FormSectionData'
import { ProjectStatus } from './ProjectStatus'
import { useToast } from '../use-toast'
import { Button } from '../button'

function ConcessionStage () {
  const { toast } = useToast()

  return (
    <div className='flex flex-wrap'>

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 m-6 flex flex-col my-4'>
        <Label className='mb-1'>Estado de solicitud</Label>
        <ProjectStatus />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3'>
        <FormSectionData title='Monto final concedido' inputPlaceholder='€' />
      </div>

      <Separator className='my-5' />

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha prevista de primer desembolso' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3'>
        <FormSectionData title='Monto de primer desembolso' inputPlaceholder='€' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3'>
        <FormSectionData title='Porcentaje de primer desembolso' inputPlaceholder='%' />
      </div>

      <Separator className='my-5' />

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha aprobada de inicio de gasto' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha aprobada de finalización de gasto' />
      </div>

      <Separator className='my-5' />

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha de primer informe de seguimiento' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha límite para entrega de informe final técnico' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha límite para entrega de informe final económico' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha límite para entrega de informe final económico' />
      </div>

      <Separator className='my-5' />

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3'>
        <FormSectionData title='Periocidad de informes de seguimiento' inputPlaceholder=' meses' />
      </div>

      <Separator className='my-5' />

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-6'>
        <Label htmlFor='pdf'>Resolución de otorgamiento</Label>
        <Input type='file' />
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

export default ConcessionStage
