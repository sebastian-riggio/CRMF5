import { Input } from '../input';
import { Label } from '../label'
import DatePicker from '../DatePicker';
import { Button } from '../button';
import { Separator } from '../separator';


function NegotationStage() {
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
                <Label htmlFor="pdf">Resolución provisional</Label>
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

export default NegotationStage