import { useEffect, useState } from 'react'
import { Calendar } from '../ui/calendar'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'
import { Siren, FileStack } from 'lucide-react'
import { getAllConvocatoria } from '@/services/registroConvocatoria'
import { formatDate } from '@/lib/utils'

export function CalendarBoard () {
  const [convocatoria, setConvocatoria] = useState()
  const [date, setDate] = useState<Date | null | undefined>(null)

  useEffect(() => {
    getAllConvocatoria()
      .then((response) => {
        setConvocatoria(response.data.convocatoria)
        console.log(response.data.convocatoria)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <div className='flex justify-center flex-wrap gap-5'>
        <div>
          <Calendar
            mode='single'
            selected={date || undefined}
            onSelect={(newDate) => setDate(newDate)}
            className='rounded-md border'
          />
        </div>
        <ScrollArea className='h-[310px] w-[280px] md:w-[800px] md:h-[309px] rounded-md border p-4'>
          <div className='p-4'>
            <Siren className='mb-4 text-sm font-medium leading-none' />
            <h1>PRÓXIMAS APERTURAS DE CONVOCATORIAS</h1>
            <Separator className='my-2' />
            <ul>
              {convocatoria?.map(convo => (
                // eslint-disable-next-line react/jsx-key
                <>
                  <li key={convo.id} className='text-sm'>
                    <h2> {convo.titulo}</h2>
                    <p>{convo?.fechaApertura ? formatDate(convo.fechaApertura) : 'N/A'}</p>
                  </li><Separator className='my-2' />
                </>
              ))}
            </ul>
          </div>
        </ScrollArea>

        <ScrollArea className='h-[310px] w-[280px] md:w-[1100px] md:h-[255px] rounded-md border p-4'>
          <div className='p-4 '>
            <FileStack className='mb-4 text-sm font-medium leading-none' />
            <ul>
              {convocatoria?.map(convo => (
                // eslint-disable-next-line react/jsx-key
                <>
                  <li key={convo.id} className='text-sm'>
                    <h2>{convo.titulo}</h2>
                    <p>Fecha de Apertura: {convo?.fechaApertura ? formatDate(convo.fechaApertura) : 'N/A'}</p>
                    <p>Fecha de Cierre: {convo?.fechaCierre ? formatDate(convo.fechaCierre) : 'N/A'}</p>
                    <p>Presupuesto: {convo.presupuesto}</p>

                  </li><Separator className='my-2' />
                </>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </div>
    </>
  )
}
