import { Input } from '../input'
import { Label } from '../label'
import DatePicker from '../DatePicker'
import { Button } from '../button'
import { Separator } from '../separator'
import FormSectionData from './FormSectionData'
import { toast } from '../use-toast'

function ClosingStage () {
  return (
    <div className='flex flex-wrap'>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha de aprobación oficial de informe de justificación' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3'>
        <FormSectionData title='Estado de resolución' inputPlaceholder='Estado' />
      </div><Separator className='my-5' />
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha de recepción pago final' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3'>
        <FormSectionData title='Monto recibido' inputPlaceholder='€' />
      </div>

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3'>
        <FormSectionData title='Porcentaje de último pago' inputPlaceholder='%' />
      </div>

      <Separator className='my-5' />

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-6'>
        <Label htmlFor='pdf'>Documento de cierre</Label>
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

export default ClosingStage
