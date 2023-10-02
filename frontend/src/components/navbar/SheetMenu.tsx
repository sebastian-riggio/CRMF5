import { Link } from 'react-router-dom'
import {
  Sheet,
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
          className='h-7 w-18 md:h-8'
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
          <Link className='block mb-4 hover:text-orange-600' to='http://localhost:5173/allprojects'>
            Proyectos
          </Link>
          <Link className='block mb-4 hover:text-orange-600' to='http://localhost:5173/newproject'>
            Nuevo proyecto
          </Link>
        </div>
        <div className='text-left mt-10 mb-6'>
          <SheetTitle className='text-sm block'>CONVOCATORIAS</SheetTitle>
          <Separator className='mb-4' />
          <Link className='block mb-4 hover:text-orange-600' to='http://localhost:5173/allcalls'>
            Convocatorias
          </Link>
          <Link className='block mb-4 hover:text-orange-600' to='http://localhost:5173/newcall'>
            Nueva convocatoria
          </Link>
        </div>
        <div className='text-left mt-10 mb-6'>
          <SheetTitle className='text-sm block'>FINANCISTAS</SheetTitle>
          <Separator className='mb-4' />
          <Link className='block mb-4 hover:text-orange-600' to='http://localhost:5173/allfinancers'>
            Financistas
          </Link>
          <Link className='block mb-4 hover:text-orange-600' to='http://localhost:5173/newfinancer'>
            Nuevo financista
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}