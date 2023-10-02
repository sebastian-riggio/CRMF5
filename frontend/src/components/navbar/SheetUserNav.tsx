import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from '../ui/sheet'
import { Separator } from '../ui/separator'
import { LogOut } from 'lucide-react'

export function SheetUserNav () {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <Avatar className='h-7 w-7 md:h-8 md:w-8'>
            <AvatarImage src='/avatars/01.png' alt='@shadcn' />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </SheetTrigger>
      <SheetContent className='w-[250px] sm:w-[540px]'>
        <SheetHeader>
          <div className='mt-10'>
            <p className='text-sm font-medium leading-none'>shadcn</p>
            <p className='text-xs leading-none text-muted-foreground'>
              m@example.com
            </p>
          </div>
        </SheetHeader>
        <Separator className='mt-5' />
        <div>
          <div className='my-4'>
            <Link to='#'>Perfil<span className='shortcut'>⇧⌘P</span></Link>
          </div>
          <div className='mb-4'>
            <Link to='#'>Cofiguración<span className='shortcut'>⌘S</span></Link>
          </div>
          <div>
            <Link to='#'><LogOut /></Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
