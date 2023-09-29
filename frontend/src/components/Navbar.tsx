import { useState, useEffect } from 'react'
import { Separator } from './ui/separator'
import { Link } from 'react-router-dom'
import { SheetMenu } from './ui/navbar/SheetMenu'
import { SheetUserNav } from './ui/navbar/SheetUserNav'
import { SelectTheme } from './ui/navbar/SelectTheme'

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
      <div className='flex items-center h-full  container mx-auto'>

        <Link className='flex items-center' to='http://localhost:5173/home'>
          <img
            src='src/assets/LogoFactoria.png'
            className='max-w-[80px] h-auto mb-4 ml-0 mt-4 md:max-w-[90px]'
            alt='isologo-f5'
          />
        </Link>
        <div className='flex items-center mt-2 ml-auto'>
          <button
            className='flex items-center space-x-4 md:space-x-7'
            onClick={toggleMenu}
          >
            <SheetMenu />
            <div>
              <Separator orientation='vertical' className='w-px h-6 bg-gray-900' />
            </div>
            <SheetUserNav />
            <SelectTheme />
          </button>
        </div>
      </div>
      <Separator className='container mx-auto' />

    </>
  )
}

export default Navbar
