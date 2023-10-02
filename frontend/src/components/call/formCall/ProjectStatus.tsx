import * as React from 'react'

import { Button } from '../../ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '../../ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '../../ui/popover'

type Status = {
    value: string
    label: string
}

const statuses: Status[] = [
  {
    value: 'denegado',
    label: 'Denegado'
  },
  {
    value: 'cancelado',
    label: 'Cancelado'
  },
  {
    value: 'otorgado',
    label: 'Otorgado'
  }
]

export function ProjectStatus () {
  const [open, setOpen] = React.useState(false)
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null
  )

  return (
    <div className='flex items-center space-x-4'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant='outline' className='w-[150px] justify-start'>
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ definir estado</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='p-0' side='right' align='start'>
          <Command>
            <CommandInput placeholder='Cambia el estado...' />
            <CommandList>
              <CommandEmpty>sin resultados.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    onSelect={(value) => {
                      setSelectedStatus(
                        statuses.find((priority) => priority.value === value) ||
                                                null
                      )
                      setOpen(false)
                    }}
                  >
                    {status.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
