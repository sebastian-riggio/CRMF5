import {
  Calendar,
  LayoutDashboard,
  Store,
  Users2
} from 'lucide-react'
import {
  Command,
  CommandGroup,
  CommandItem
} from '../ui/command'

export function SideBar () {
  return (
    <div>
      <div className='space-y-4 py-4'>
        <div className='px-0 py-2'>
          <div className='space-y-1'>
            <Command>
              <p className='text-sm text-muted-foreground mb-2 ml-3'>Hola Admin!</p>
              <CommandGroup>
                <CommandItem>
                  <LayoutDashboard className='md:mr-2 h-4 w-4 mx-auto md:mx-0' />
                  <span className='hidden md:flex'>Resumen</span>
                </CommandItem>
                <CommandItem>
                  <Calendar className='md:mr-2 h-4 w-4 mx-auto md:mx-0' />
                  <span className='hidden md:flex'>Calendario</span>
                </CommandItem>
                <CommandItem>
                  <Users2 className='md:mr-2 h-4 w-4 mx-auto md:mx-0' />
                  <span className='hidden md:flex'>Usuarios</span>
                </CommandItem>
                <CommandItem>
                  <Store className='md:mr-2 h-4 w-4 mx-auto md:mx-0' />
                  <span className='hidden md:flex'>Centros</span>
                </CommandItem>
              </CommandGroup>
            </Command>
          </div>
        </div>
      </div>
    </div>
  )
}
