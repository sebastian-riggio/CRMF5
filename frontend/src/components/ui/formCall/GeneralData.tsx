import FormSectionData from './FormSectionData';

function GeneralData() {
    return (
        <div className='flex flex-wrap'>
            <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
                <FormSectionData title='Temática' inputPlaceholder='Temática' />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-2'>
                <FormSectionData title='Entidad convocante' inputPlaceholder='Entidad convocante' />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData title='Departamento o centro gestor' inputPlaceholder='Departamento o centro gestor' />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData title='Enlace a publicación oficial' inputPlaceholder="https://www.ejemplo.com" />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData title='Enlace a bases de convocatoria' inputPlaceholder="https://www.ejemplo.com" />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData title="Líneas específicas de trabajo" isTextarea />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData title='Entidades a las que se dirige' inputPlaceholder="Entidades a las que se dirige" />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData title="Auditoría externa obligatoria" isSwitch />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData
                    title="Fecha de apertura"
                    inputPlaceholder="Selecciona una fecha"
                    showCalendarIcon
                />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData
                    title="Fecha de cierre"
                    inputPlaceholder="Selecciona una fecha"
                    showCalendarIcon
                />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData
                    title="Fecha limite de resolución"
                    inputPlaceholder="Selecciona una fecha"
                    showCalendarIcon
                />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData title='Período máximo de ejecución' inputPlaceholder="24 meses" />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData title='Fecha límite de justificación' inputPlaceholder="24 meses" />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData title='Presupuesto máximo solicitable' inputPlaceholder="20000 €" />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData title="Otra información" isTextarea />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData
                    title="Información de interés"
                    inputPlaceholder="Nombre del archivo PDF"
                    pdfUrl='URL_del_archivo_PDF'
                />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData
                    title="Información de interés"
                    inputPlaceholder="Nombre del archivo PDF"
                    pdfUrl='URL_del_archivo_PDF'
                />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                <FormSectionData
                    title="Información de interés"
                    inputPlaceholder="Nombre del archivo PDF"
                    pdfUrl='URL_del_archivo_PDF'
                />
            </div>
        </div>
    );
}

export default GeneralData;