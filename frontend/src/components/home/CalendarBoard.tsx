import { useState } from 'react'
import { Calendar } from '../ui/calendar'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'
import {
  Siren,
  FileStack
} from 'lucide-react'
/* import { DiaryBox } from './DiaryBox' */

function CalendarBoard () {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <>
      <div className='flex justify-center flex-wrap gap-5'>
        {/* traer fechas de vencimiento/cierre de convocatorias para marcar en el calendario */}
        <div>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            className='rounded-md border'
          />
        </div>
        {/* listar todas las fechas de venciamiento anteriormente marcadas en calendario */}
        <ScrollArea className='h-[310px] w-[280px] md:w-[800px] md:h-[309px] rounded-md border p-4'>
          <div className='p-4'>
            <Siren className='mb-4 text-sm font-medium leading-none'> </Siren>
            <ul> {/* esto esta a modo de ejemplo de la info que debe aparecer */}
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
            </ul>
          </div>
        </ScrollArea>
        {/* definir bien - Hector tenía una buena idea- */}
        <ScrollArea className='h-[310px] w-[280px] md:w-[1100px] md:h-[255px] rounded-md border p-4'>
          <div className='p-4 '>
            <FileStack className='mb-4 text-sm font-medium leading-none' />
            <ul> {/* esto esta a modo de ejemplo de la info que debe aparecer */}
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
              <li className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
              </li>
              <Separator className='my-2' />
            </ul>
          </div>
        </ScrollArea>
        {/* <DiaryBox /> */}

      </div>
    </>
  )
}

export default CalendarBoard
