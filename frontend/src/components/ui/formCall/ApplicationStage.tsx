import { Input } from '../input';
import { Label } from '../label'
import FormSectionData from './FormSectionData';
import DatePicker from '../DatePicker';
import { Button } from '../button';
import { Separator } from '../separator';


function ApplicationStage() {
  return (
    <div className='flex flex-wrap container mx-auto'>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Proyecto Factoría F5' inputPlaceholder='Búsqueda de proyecto' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Técnico responsable de F5' inputPlaceholder='Técnico' />
      </div>

      <Separator className='my-5' />

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <DatePicker title='Fecha en la que se ha entregado la propuesta' />
      </div>

      <Separator className='my-5' />

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Número de trámite' inputPlaceholder='Número de trámite' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Número de expediente' inputPlaceholder='Número de expediente' />
      </div>
      
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Código de subvención' inputPlaceholder='Código generado por el sistema' />
      </div>

      <Separator className='my-5' />
      
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-8'>
        <Label htmlFor="pdf">Recibo oficial</Label>
        <Input type="file" />
      </div>

      <Separator className='my-5' />
      
      <div className=' w-full md:w-full mt-5 flex justify-center'>
          <Button type='submit' className='w-20 hover:bg-FF4700-dark text-white font-bold rounded mr-2'>
            Cancelar
          </Button>
          <Button type='submit' className='w-20 hover:bg-FF4700-dark text-white font-bold rounded ml-2 '>
            Crear
          </Button>
      </div>



    </div>
  )
}

export default ApplicationStage