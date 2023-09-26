import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '../../lib/utils'
import { Button } from './button'
import { Calendar } from './calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from './popover'
import { FormItem, FormLabel } from './form'
import es from 'date-fns/locale/es'

interface DateProps {
  title: string;
  onChange: (date: Date | undefined) => void;
}

function DatePicker ({ title, onChange }: DateProps) {
  const [date, setDate] = React.useState<Date | undefined>()

  React.useEffect(() => {
    onChange(date)
  }, [date, onChange])

  return (
    <div className='flex flex-wrap mx-6'>
      <FormItem>
        <div className='my-3'>
          <FormLabel className='mb-2'> {title} </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant='outline'
                className={cn(
                  'w-[250px] justify-start text-left font-normal',
                  !date && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className='mr-2 h-4 w-4' />
                {date ? format(date, 'dd MMMM yyyy', { locale: es }) : <span>Elige una fecha</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                selected={date}
                onSelect={(newDate) => setDate(newDate)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </FormItem>
    </div>
  )
}
export default DatePicker
