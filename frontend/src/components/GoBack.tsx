export default function GoBack () {
  return (
    <div className='container mx-auto flex justify-end'>
      <p className='hover:text-orange-600 font-semibold mb-5 mx-10 mt-5'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-arrow-left-circle'><circle cx='12' cy='12' r='10' /><path d='M16 12H8' /><path d='m12 8-4 4 4 4' data-testid='go-back-input' /></svg></p>
    </div>
  )
}
