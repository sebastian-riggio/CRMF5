import {
  Calendar,
  LayoutDashboard
  /* Store, */
  /* Users2 */
} from 'lucide-react'
import {
  Command,
  CommandGroup
} from '@/components/ui/command'
import { Button } from '@/components/ui/button'

export function SideBar ({ onSidebarItemClick }: { onSidebarItemClick: (component: string) => void }) {
  return (

    <Command>
      <CommandGroup>
        <div className='flex gap-4 md:p-1 md:flex-col md:gap-2'>
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

  )
}
