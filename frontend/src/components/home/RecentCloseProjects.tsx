import {
  CheckCheck
} from 'lucide-react'
export function RecentCloseProjects () {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <CheckCheck />
        </div>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Convocatoria</p>
          <p className='text-sm font-medium text-muted-foreground'>Financiador</p>
        </div>
        <div className='ml-auto font-medium'>Presupuesto aportado</div>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <CheckCheck />
        </div>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Convocatoria</p>
          <p className='text-sm font-medium text-muted-foreground'>Financiador</p>
        </div>
        <div className='ml-auto font-medium'>Presupuesto aportado</div>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <CheckCheck />
        </div>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>P9 Mixta Full-Stack</p>
          <p className='text-sm font-medium text-muted-foreground'>
            Barcelona
          </p>
        </div>
        <div className='ml-auto font-medium'>+€299.00</div>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <CheckCheck />
        </div>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Java Bootcamp</p>
          <p className='text-sm font-medium text-muted-foreground'>Asturias</p>
        </div>
        <div className='ml-auto font-medium'>+€99.00</div>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <CheckCheck />
        </div>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>HTML Bootcamp</p>
          <p className='text-sm font-medium text-muted-foreground'>Dirección general</p>
        </div>
        <div className='ml-auto font-medium'>+€39.00</div>
      </div>
    </div>
  )
}
