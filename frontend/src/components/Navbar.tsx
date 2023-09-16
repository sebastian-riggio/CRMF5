import { useState, useEffect } from 'react'
import { Separator } from './ui/separator'
import MobileMenuNav from './ui/navbar/MobileMenuNav'
import UserNav from './ui/navbar/user-nav'
import { Menu } from 'lucide-react'
import { SearchInput } from './ui/navbar/search'

function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCrossIcon, setIsCrossIcon] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)

    setIsCrossIcon(!isCrossIcon)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(false)
      setIsCrossIcon(false) 
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className='flex items-center justify-between h-full p-3'>
        <img
          src='src/assets/LogoFactoria.png'
          className='max-w-[90px] h-auto mb-7 ml-5 mt-2'
          alt='isologo-f5'
        />
        <div className="mr-5">
        <button
          className='md:hidden flex items-center space-x-4'
          onClick={toggleMenu}
        >
          {isCrossIcon
            ? (
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-6 h-6'>
                <path fillRule='evenodd' d='M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
              )
            : (
              <Menu />
            )}
          <div><Separator orientation="vertical" className='w-px h-6 bg-gray-900' /></div>
          <UserNav />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='flex-grow' >
          <MobileMenuNav />
        </div>
      )}
      <Separator />
      {!isMenuOpen && (
        <div className='md:hidden flex justify-start ml-4 mt-3'>
          <SearchInput />
        </div>
      )}
    </>
  )
}

export default Navbar
