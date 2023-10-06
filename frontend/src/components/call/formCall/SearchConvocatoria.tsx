import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { useEffect, useState } from 'react'
import { ConvocatoriaRegistro } from '@/interfaces/convocatoriaRegistro'
import { getAllConvocatoria } from '@/services/registroConvocatoria'

interface SearchConvocatoria {
  onSelectConvocatoria: (titulo: string) => void;
}

export function Searchconvocatoria ({ onSelectConvocatoria }: SearchConvocatoria) {
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string>('')
  const [data, setData] = useState<ConvocatoriaRegistro[]>([])
  useEffect(() => {
    getAllConvocatoria().then((response) => {
      if (Array.isArray(response.data.convocatoria)) {
        setData(response.data.convocatoria)
      } else {
        console.error('Los datos de convocatoria no son una matriz:', response.data)
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
          {selectedValue || 'convocatoria'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px]p - 0'>
        <Command>
          <CommandInput placeholder='Search framework...' />
          <CommandEmpty>Convocatoria no encontrada.</CommandEmpty>
          <CommandGroup>
            {data.map((convocatoria) => (
              <CommandItem
                key={convocatoria._id}
                onSelect={() => {
                  setSelectedValue(convocatoria.titulo)
                  onSelectConvocatoria(convocatoria.titulo)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    selectedValue === convocatoria.titulo ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {convocatoria.titulo}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
