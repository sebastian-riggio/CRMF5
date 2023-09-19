import { Input } from '../input';
import { Label } from '../label'
import DatePicker from '../DatePicker';
import { Button } from '../button';
import { Separator } from '../separator';
import FormSectionData from './FormSectionData';


function ConcessionStage() {
    return (
        <div className='flex flex-wrap container mx-auto'>

            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
                <FormSectionData title='Estado de solicitud' inputPlaceholder='Estado' />
            </div>
            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
                <FormSectionData title='Monto final concedido' inputPlaceholder='€' />
            </div>

            <Separator className='my-5' />
            
            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 flex justify-center'>
                <DatePicker title='Fecha prevista de primer desembolso' />
            </div>
            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
                <FormSectionData title='Monto de primer desembolso' inputPlaceholder='€' />
            </div>
            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
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

            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
                <FormSectionData title='Periocidad de informes de seguimiento' inputPlaceholder=' meses' />
            </div>

            <Separator className='my-5' />
            
            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-8'>
                <Label htmlFor="pdf">Resolución de otorgamiento</Label>
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

export default ConcessionStage