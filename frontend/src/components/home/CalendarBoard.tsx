import { useEffect, useState } from 'react'
import { Calendar } from '../ui/calendar'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'
import { Siren, FileStack } from 'lucide-react'
import { getAllConvocatoria} from '@/services/registroConvocatoria'
import React from 'react'
/* import { DiaryBox } from './DiaryBox' */

function CalendarBoard () {
  const [convocatoria, setConvocatoria] = useState()

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
            selected={date}
            onSelect={setDate}
            className='rounded-md border'
          />
        </div>
        <ScrollArea className='h-[310px] w-[280px] md:w-[800px] md:h-[309px] rounded-md border p-4'>
          <div className='p-4'>
            <ul>
              <Siren className='mb-4 text-sm font-medium leading-none'> </Siren>
              {convocatoria?.map(convo => (
                <><li className='text-sm'>
                  <h2>Información de Convocatoria: {convo.titulo}</h2>
                  <p>Fecha de Cierre: {convo.fechaCierre?.toString()}</p>
                  </li><Separator className='my-2' />
                </>
              ))}
            </ul>

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

export default CalendarBoard()