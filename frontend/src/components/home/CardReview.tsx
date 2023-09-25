import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

function CardReviw () {
  return (
    <>
      <div className='flex space-x-4'>
        <Card className='w-64'>
          <CardHeader className='flex flex-row justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Proyectos
            </CardTitle>
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
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>155</div> {/* traer total de proyectos aqui */}
          </CardContent>
        </Card>
        <Card className='w-64'>
          <CardHeader className='flex flex-row justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium max-lines-2'>
              Total Convocatorias Aprobadas
            </CardTitle>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36' height='36'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-file-heart mr-2 h-5 w-5'
            >
              <path d='M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4' />
              <polyline points='14 2 14 8 20 8' />
              <path d='M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z' />
            </svg>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>50</div> {/* traer total de convocatorias aqui */}
          </CardContent>
        </Card>
        <Card className='w-64'>
          <CardHeader className='flex flex-row justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Convocatorias en proceso
            </CardTitle>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36' height='36'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-kanban-square-dashed mr-2 h-5 w-5'
            >
              <path d='M8 7v7' />
              <path d='M12 7v4' />
              <path d='M16 7v9' />
              <path d='M5 3a2 2 0 0 0-2 2' />
              <path d='M9 3h1' />
              <path d='M14 3h1' />
              <path d='M19 3a2 2 0 0 1 2 2' />
              <path d='M21 9v1' />
              <path d='M21 14v1' />
              <path d='M21 19a2 2 0 0 1-2 2' />
              <path d='M14 21h1' />
              <path d='M9 21h1' />
              <path d='M5 21a2 2 0 0 1-2-2' />
              <path d='M3 14v1' /><path d='M3 9v1' />
            </svg>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>10</div> {/* traer total de convocatorias sin respuesta aun */}
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default CardReviw
