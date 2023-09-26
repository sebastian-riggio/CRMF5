export function RecentCloseProjects () {
  const CheckIcon = (<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-check-check'><path d='M18 6 7 17l-5-5' /><path d='m22 10-7.5 7.5L13 16' /></svg>)

  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <div className='flex items-center'>
          {CheckIcon}
        </div>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>P8 Mixta Fullstack</p>
          <p className='text-sm font-medium text-muted-foreground'>Madrid</p>
        </div>
        <div className='ml-auto font-medium'>+€1,999.00</div>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center'>
          {CheckIcon}
        </div>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>P72 Mixta Full-Stack</p>
          <p className='text-sm font-medium text-muted-foreground'>Asturias</p>
        </div>
        <div className='ml-auto font-medium'>+€39.00</div>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center'>
          {CheckIcon}
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
          {CheckIcon}
        </div>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Java Bootcamp</p>
          <p className='text-sm font-medium text-muted-foreground'>Asturias</p>
        </div>
        <div className='ml-auto font-medium'>+€99.00</div>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center'>
          {CheckIcon}
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
