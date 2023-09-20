import { Input } from '../input'
import { Label } from '../label'
import DatePicker from '../DatePicker'
import { Button } from '../button'
import { Separator } from '../separator'
import FormSectionData from './FormSectionData'

function ClosingStage () {
return (
    <div className='flex flex-wrap'>
        <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
            <DatePicker title='Fecha de aprobación oficial de informe de justificación' />
        </div>

            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3'>
                <FormSectionData title='Estado de resolución' inputPlaceholder='Estado' />
            </div>

            <Separator className='my-5' />

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
                <Label htmlFor="pdf">Documento de cierre</Label>
                <Input type="file" />
            </div>
            <Separator className='my-5' />
            <div className=' w-full md:w-full mt-5 flex justify-center'>
                <Button type='submit' className='w-20 hover:bg-FF4700-dark text-white font-bold rounded mr-2'>
                    Cancelar
                </Button>
                <Button type='submit' className='w-20 hover:bg-FF4700-dark text-white font-bold rounded ml-2 '>
                    Actualizar
                </Button>
            </div>
        </div>
)
}

export default ClosingStage
