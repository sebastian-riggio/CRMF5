import React, { useEffect, useState } from 'react'
import { Calendar } from '../ui/calendar'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'
import { Siren, FileStack } from 'lucide-react'
import { ConvocatoriaRegistro } from '@/interfaces/convocatoriaRegistro'
import { getAllConvocatoria } from '@/services/registroConvocatoria'
/* import { DiaryBox } from './DiaryBox' */

function CalendarBoard() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [convocatorias, setConvocatorias] = useState<{ titulo: string; fechaCierre: Date }[]>([])

  useEffect(() => {
    const fetch
  })
    
  return (
    <>
      <div className='flex justify-center flex-wrap gap-5'>
        <div>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            className='rounded-md border'
          />
        </div>
        <ScrollArea className='h-[310px] w-[280px] md:w-[800px] md:h-[309px] rounded-md border p-4'>
          <div className='p-4'>
            <Siren className='mb-4 text-sm font-medium leading-none'> </Siren>
            {callNext && (
              <>
                <h2>Información de Convocatoria: {callNext.titulo}
                </h2>
                <p>Fecha de Cierre: {callNext.fechaCierre?.toString()}</p>
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
                <li className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ante a ex vulputate, id facilisis ipsum ultrices
                </li>
                <Separator className='my-2' />
              </>
            )}
          </div>
        </ScrollArea>
        {/* definir bien - Hector tenía una buena idea- */}
        <ScrollArea className='h-[310px] w-[280px] md:w-[1100px] md:h-[255px] rounded-md border p-4'>
          <div className='p-4 '>
            <FileStack className='mb-4 text-sm font-medium leading-none' />
            <ul> {/* esto está a modo de ejemplo de la info que debe aparecer */}
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
