import FormSectionData from '../formCall/FormSectionData'

function GeneralProject () {
  return (
    <div className='flex flex-wrap container mx-auto'>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Departamento o centro gestor' />
      </div>
      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Persona Responsable Factoria F5' />
      </div>

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Meses de duración' />
      </div>

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Presupuesto global' />
      </div>

      <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
        <FormSectionData title='Presupuesto Factoria F5' />
      </div>
    </div>
  )
}

export default GeneralProject
