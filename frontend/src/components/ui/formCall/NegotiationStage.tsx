import { Input } from '../input'
import { Label } from '../label'
import DatePicker from '../DatePicker'
import { Button } from '../button'
import { Separator } from '../separator'
import { toast } from '../use-toast'

function NegotationStage () {
  return (
    <div className='flex flex-wrap'>

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha de resolución provisional' />
      </div>

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha límite de entrega de reformulación' />
      </div>

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha real de entrega de reformlación' />
      </div>

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha límite para responder requerimientos' />
      </div>

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
        <DatePicker title='Fecha real para responder requerimientos' />
      </div>

      <Separator className='my-5' />

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-6'>
        <Label htmlFor='pdf'>Resolución provisional</Label>
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

export default NegotationStage
