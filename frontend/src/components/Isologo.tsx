import { Link } from 'react-router-dom'

function Isologo () {
  return (
    <div className='pt-10 pb-8 md:text-left max-w-[400px] mx-auto'>
      <div className='flex justify-center items-center h-full mt-14 pt-5'>
        <Link to='/'>
          <img
            src='/logo.png'
            className='max-w-[300px] h-auto mb-10'
            alt='isologo-f5'
          />
        </Link>
      </div>
    </div>
  )
}

export default Isologo
