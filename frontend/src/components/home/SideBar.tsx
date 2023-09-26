import { Button } from '../ui/button'

export function SideBar () {
  return (
    <div>
      <div className='space-y-4 py-4'>
        <div className='px-0 py-2'>
          <h2 className='mb-2 px-0 text-lg font-semibold tracking-tight'>
            Lorem
          </h2>
          <div className='space-y-1'>
            <Button variant='secondary' className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-4 w-4'
              >
                <path d='m16 6 4 14' />
                <path d='M12 6v14' />
                <path d='M8 8v12' />
                <path d='M4 4v16' />
              </svg>
              Lorem
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20' height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-file-plus-2 mr-2 h-4 w-4'
              >
                <path d='M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4' />
                <polyline points='14 2 14 8 20 8' />
                <path d='M3 15h6' />
                <path d='M6 12v6' />
              </svg>
              Lorem
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-4 w-4'
              >
                <rect width='7' height='7' x='3' y='3' rx='1' />
                <rect width='7' height='7' x='14' y='3' rx='1' />
                <rect width='7' height='7' x='14' y='14' rx='1' />
                <rect width='7' height='7' x='3' y='14' rx='1' />
              </svg>
              Lorem
            </Button>
          </div>
        </div>
        <div className='px-0 py-2'>
          <h2 className='mb-2 px-0 text-lg font-semibold tracking-tight'>
            Lorem
          </h2>
          <div className='space-y-1'>
            <Button variant='ghost' className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-4 w-4'
              >
                <path d='m16 6 4 14' />
                <path d='M12 6v14' />
                <path d='M8 8v12' />
                <path d='M4 4v16' />
              </svg>
              Lorem
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20' height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-file-plus-2 mr-2 h-4 w-4'
              >
                <path d='M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4' />
                <polyline points='14 2 14 8 20 8' />
                <path d='M3 15h6' />
                <path d='M6 12v6' />
              </svg>
              Lorem
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-4 w-4'
              >
                <rect width='7' height='7' x='3' y='3' rx='1' />
                <rect width='7' height='7' x='14' y='3' rx='1' />
                <rect width='7' height='7' x='14' y='14' rx='1' />
                <rect width='7' height='7' x='3' y='14' rx='1' />
              </svg>
              Lorem
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
