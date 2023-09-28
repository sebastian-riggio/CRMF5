import { useState } from 'react'
import { Calendar } from '../ui/calendar'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'
import {
  Siren
} from 'lucide-react'
import { DiaryBox } from './DiaryBox'

function CalendarBoard () {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <>
      <div className='flex justify-center flex-wrap gap-5'>
        {/* traer fechas de vencimiento/cierre de convocatorias para marcar en el calendario */}
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          className='rounded-md border'
        />
        {/* listar las mismas fechas de vencimiento/cierre que se han marcado en el calendario */}
        <ScrollArea className='h-[310px] w-[280px] md:w-[450px] rounded-md border p-4'>
          <div className='p-4'>
            <Siren className='mb-4 text-sm font-medium leading-none'> </Siren>
            <ul>
              <li className='text-sm'>
                traer del backen la lista de fecha simportantes de la mas cercana hacia atrás (esta lista hce scroll)
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                traer del backen la lista de fecha simportantes de la mas cercana hacia atrás (esta lista hce scroll)
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                traer del backen la lista de fecha simportantes de la mas cercana hacia atrás (esta lista hce scroll)
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                traer del backen la lista de fecha simportantes de la mas cercana hacia atrás (esta lista hce scroll)
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                traer del backen la lista de fecha simportantes de la mas cercana hacia atrás (esta lista hce scroll)
              </li>
              <Separator className='my-2' />
            </ul>
          </div>
        </ScrollArea>
        <DiaryBox />

      </div>
    </>
  )
}

export default CalendarBoard
