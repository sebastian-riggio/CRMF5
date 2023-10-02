import {
  Calendar,
  LayoutDashboard,
  Store,
  Users2
} from 'lucide-react'
import {
  Command,
  CommandGroup
} from '../ui/command'
import { Button } from '../ui/button'

export function SideBar ({ onSidebarItemClick }: { onSidebarItemClick: (component: string) => void }) {
  console.log('onSidebarItemClick recibido correctamente:', onSidebarItemClick)
  return (
    <div>
      <div className='py-4'>
        <div className='px-0 py-2'>
          <Command>
            <CommandGroup>
              <p className='text-sm text-muted-foreground mb-2 ml-2 md:ml-4'>Hola!</p>
              <div className='flex flex-col'>
                <Button onClick={() => onSidebarItemClick('resume')} className='border-none bg-transparent hover:bg-transparent text-muted-foreground justify-start hover:text-orange-600'>
                  <LayoutDashboard className='md:mr-2 h-4 w-4 mx-auto md:mx-0' />
                  <span className='hidden md:flex '>Resumen</span>
                </Button>
                <Button onClick={() => onSidebarItemClick('calendar')} className='border-none bg-transparent hover:bg-transparent text-muted-foreground justify-start hover:text-orange-600'>
                  <Calendar className='md:mr-2 h-4 w-4 mx-auto md:mx-0' />
                  <span className='w-4 hidden md:flex'>Calendario</span>
                </Button>
                <Button onClick={() => onSidebarItemClick('user')} className='border-none bg-transparent hover:bg-transparent text-muted-foreground justify-start hover:text-orange-600'>
                  <Users2 className='md:mr-2 h-4 w-4 mx-auto md:mx-0' />
                  <span className='hidden md:flex'>Usuarios</span>
                </Button>
                <Button onClick={() => onSidebarItemClick('store')} className='border-none bg-transparent hover:bg-transparent text-muted-foreground justify-start hover:text-orange-600'>
                  <Store className='md:mr-2 h-4 w-4 mx-auto md:mx-0' />
                  <span className='hidden md:flex'>Centros</span>
                </Button>
              </div>
            </CommandGroup>
          </Command>
        </div>
      </div>
    </div>
  )
}
