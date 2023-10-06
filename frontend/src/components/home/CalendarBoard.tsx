import { useEffect, useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Siren } from 'lucide-react'
import { getAllConvocatoria } from '@/services/registroConvocatoria'
import { formatDate } from '@/lib/utils'
interface Convocatoria {
  id: number;
  titulo: string;
  fechaApertura?: string;
}
export function CalendarBoard () {
  const [convocatoria, setConvocatoria] = useState<Convocatoria[] | null>(null)
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
                    <p>{convo?.fechaApertura ? formatDate(new Date(convo.fechaApertura)) : 'N/A'}</p>
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
