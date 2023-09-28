import * as React from 'react'
import { Calendar, MoreHorizontal, Trash, CalendarPlus } from 'lucide-react'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'

export function DiaryBox () {
  const [open, setOpen] = React.useState(false)

  return (
    <div className='flex w-200 flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center'>
      <p className='text-sm font-medium leading-none'>
        <div className='flex items-center gap-3'>
          <CalendarPlus className='text-2x1' />
          <span className='text-muted-foreground'>Agendar</span>
        </div>

      </p>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='sm'>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-[200px]'>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Calendar className='mr-2 h-4 w-4' />
              Fecha importante...
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-red-600'>
              <Trash className='mr-2 h-4 w-4' />
              Borrar
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
