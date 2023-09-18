import { Input } from '../input';
import FormSectionData from './FormSectionData';


function ApplicationStage() {
  return (
    <div className='flex flex-wrap'>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Proyecto Factoría F5' inputPlaceholder='Búsqueda de proyecto' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Técnico responsable de F5' inputPlaceholder='Técnico' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Número de trámite' inputPlaceholder='Número de trámite' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Número de expediente' inputPlaceholder='Número de expediente' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Código de subvención' inputPlaceholder='Código generado por el sistema' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Número de expediente' inputPlaceholder='Número de expediente' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <Input type='file' />
      </div>


    </div>
  )
}

export default ApplicationStage