import { Input } from '../input';
import { Label } from '../label'
import DatePicker from '../DatePicker';
import { Button } from '../button';
import { Separator } from '../separator';
import FormSectionData from './FormSectionData';


function JustificationStage() {
    return (
        <div className='flex flex-wrap container mx-auto'>

            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
                <DatePicker title='Fecha de entrega de informe justificativo' />
            </div>

            <Separator className='my-5' />

            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
                <DatePicker title='Fecha límite para responder requerimiento 1' />
            </div>

            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
                <DatePicker title='Fecha en que se respondió requerimiento 1' />
            </div>

            <Separator className='my-5' />

            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
                <DatePicker title='Fecha límite para responder requerimiento 2' />
            </div>

            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
                <DatePicker title='Fecha en que se respondió requerimiento 2' />
            </div>

            <Separator className='my-5' />

            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-8'>
                <Label htmlFor="pdf">Resolución provisional</Label>
                <Input type="file" />
            </div>

            <Separator className='my-5' />

            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData title="Nota de seguimiento" isTextarea />
            </div>

            <Separator className='my-5' />
            
            <div className=' w-full md:w-full mt-5 flex justify-center'>
                <Button type='submit' className='w-20 hover:bg-FF4700-dark text-white font-bold rounded mr-2'>
                    Cancelar
                </Button>
                <Button type='submit' className='w-20 hover:bg-FF4700-dark text-white font-bold rounded ml-2 '>
                    Acualizar
                </Button>
            </div>
        </div>
    )
}

export default JustificationStage