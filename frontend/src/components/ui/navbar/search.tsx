import { Input } from '../input'

export function Search () {
  return (
    <>
      <Input
        type='search'
        placeholder='Search...'
        className='md:w-[100px] lg:w-[300px]'
      />
    </>
  )
}
