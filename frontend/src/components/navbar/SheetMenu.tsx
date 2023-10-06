import { Link } from 'react-router-dom'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '../ui/sheet'
import SearchInput from './search'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'

export function SheetMenu () {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className='h-7 w-18 md:h-8 hover:text-orange-600'
          variant='outline'
        >
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent className='text-sm w-[250px] sm:w-[540px]'>
        <div className='text-left mt-10 mb-9'>
          <SearchInput />
        </div>
        <div className='text-left mb-6'>

          <SheetTitle className='text-sm block'>PROYECTOS</SheetTitle>

          <Separator className='mb-4' />
          <SheetClose asChild>
            <Link className='block mb-4 hover:text-orange-600' to='/allprojects'>
              Proyectos
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className='block mb-4 hover:text-orange-600' to='/newproject'>
              Nuevo proyecto
            </Link>
          </SheetClose>
        </div>
        <div className='text-left mt-10 mb-6'>
          <SheetTitle className='text-sm block'>CONVOCATORIAS</SheetTitle>
          <Separator className='mb-4' />
          <SheetClose asChild>
            <Link className='block mb-4 hover:text-orange-600' to='/allcalls'>
              Convocatorias
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className='block mb-4 hover:text-orange-600' to='/newcall'>
              Nueva convocatoria
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
