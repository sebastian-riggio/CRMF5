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
import { getProjects } from '@/services/proyectos'
import { useEffect, useState } from 'react'
import { Projects } from '@/interfaces/projects'

interface SearchProjectsProps {
  onSelectProject: (proyectoNombre: string) => void;
}

export function SearchProjects ({ onSelectProject }: SearchProjectsProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState<string>('')
  const [data, setData] = useState<Projects[]>([])
  useEffect(() => {
    getProjects().then((response) => {
      if (Array.isArray(response.data.proyectos)) {
        setData(response.data.proyectos)
      } else {
        console.error('Los datos de proyectos no son una matriz:', response.data)
      }
    })
  }, [])
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'
          onClick={() => setOpen(!open)}
        >
          {selectedValue || 'proyecto'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Search framework...' />
          <CommandEmpty>Proyecto no encontrado.</CommandEmpty>
          <CommandGroup>
            {data.map((proyecto) => (
              <CommandItem
                key={proyecto._id}
                onSelect={() => {
                  setSelectedValue(proyecto.proyectoNombre)
                  onSelectProject(proyecto.proyectoNombre)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    selectedValue === proyecto.proyectoNombre ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {proyecto.proyectoNombre}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
