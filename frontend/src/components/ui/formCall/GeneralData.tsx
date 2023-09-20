import { Separator } from '../separator'
import FormSectionData from './FormSectionData'

function GeneralData () {
  return (
    <div className='flex flex-wrap container mx-auto'>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Temática' />
      </div>
      <Separator className='my-5' />
      <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Entidad convocante' />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData title='Entidades a las que se dirige' />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData title='Departamento o centro gestor' />
      </div>
      <Separator className='my-5' />
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData title='Enlace a publicación oficial' />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData title='Enlace a bases de convocatoria' />
      </div>
      <Separator className='my-5' />
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData title='Líneas específicas de trabajo' isTextarea />
      </div>
      <Separator className='my-5' />
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData title='Auditoría externa obligatoria' isSwitch />
      </div>
      <Separator className='my-5' />
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData
          title='Fecha de apertura'
        />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData
          title='Fecha de cierre'
        />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData
          title='Fecha limite de resolución'
        />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData title='Fecha límite de justificación' />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData title='Período máximo de ejecución' />
      </div>
      <Separator className='my-5' />
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData title='Presupuesto máximo solicitable' />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData title='Otra información' isTextarea />
      </div>
      <Separator className='my-5' />
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData
          title='Información de interés'
          pdfUrl='URL_del_archivo_PDF'
        />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData
          title='Información de interés'
          pdfUrl='URL_del_archivo_PDF'
        />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
        <FormSectionData
          title='Información de interés'
          pdfUrl='URL_del_archivo_PDF'
        />
      </div>
    </div>
  )
}

export default GeneralData
