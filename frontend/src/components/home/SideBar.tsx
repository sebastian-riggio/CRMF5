import {
  Calendar,
  LayoutDashboard
  /* Store, */
  /* Users2 */
} from 'lucide-react'
import {
  Command,
  CommandGroup
} from '../ui/command'
import { Button } from '../ui/button'

export function SideBar ({ onSidebarItemClick }: { onSidebarItemClick: (component: string) => void }) {
  return (
    <div>
      <div className='py-4 md:mx-4'>
        <Command>
          <CommandGroup>
            <div className='flex flex-col items-start mr-5'>
              <Button onClick={() => onSidebarItemClick('resume')} className='px-0 border-none bg-transparent hover:bg-transparent text-muted-foreground justify-start hover:text-orange-600'>
                <LayoutDashboard className='md:mr-2 h-4 w-4' />
                <span className='hidden md:flex '>Resumen</span>
              </Button>
              <Button onClick={() => onSidebarItemClick('calendar')} className='px-0 border-none bg-transparent hover:bg-transparent text-muted-foreground justify-start hover:text-orange-600'>
                <Calendar className='md:mr-2 h-4 w-4 mx-auto md:mx-0' />
                <span className='w-4 hidden md:flex'>Calendario</span>
              </Button>
              {/*             <Button onClick={() => onSidebarItemClick('user')} className='px-0 border-none bg-transparent hover:bg-transparent text-muted-foreground justify-start hover:text-orange-600'>
                <Users2 className='md:mr-2 h-4 w-4 mx-auto md:mx-0' />
                <span className='hidden md:flex'>Usuarios</span>
              </Button> */}
              {/*  <Button onClick={() => onSidebarItemClick('store')} className='border-none bg-transparent hover:bg-transparent text-muted-foreground justify-start hover:text-orange-600'>
                  <Store className='md:mr-2 h-4 w-4 mx-auto md:mx-0' />
                  <span className='hidden md:flex'>Centros</span>
                </Button> */}
            </div>
          </CommandGroup>
        </Command>
      </div>
    </div>
  )
}
