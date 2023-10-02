import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '../../../lib/utils'
import { Button } from '../../ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '../../ui//command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '../../ui/popover'
/* import { getProjects } from '@/services/proyectos'
import { useEffect, useState } from 'react' */

// get all projects
const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js'
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit'
  }
]

interface SearchProjectsProps {
  onSelectProject: (projectValue: string) => void;
}

export function SearchProjects ({ onSelectProject }: SearchProjectsProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState('')
/*   const [data, setData] = useState()
  useEffect(() => {
    getProjects().then((response) => {
      setData(response.data.proyectos)
      console.log(data)
    })
  }, []) */

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'
        >
          {selectedValue ? frameworks.find((framework) => framework.value === selectedValue)?.label : 'Proyectos...'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Search framework...' />
          <CommandEmpty>Proyecto no encontrado.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={() => {
                  setSelectedValue(framework.value)
                  onSelectProject(framework.value)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    selectedValue === framework.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
