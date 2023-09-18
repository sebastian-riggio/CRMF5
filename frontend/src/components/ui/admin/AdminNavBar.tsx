import { useState, useEffect } from 'react'
import { Separator } from '../separator'
import UserNav from '../navbar/user-nav'
import { Menu } from 'lucide-react'
import { SearchInput } from '../navbar/search'
import AdminMobileMenuNav from './AdminMobileMenuNav'
import AdminDesktopMenuNav from './AdminDesktopMenuNav'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCrossIcon, setIsCrossIcon] = useState(false)
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        setIsCrossIcon(!isCrossIcon)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMenuOpen(false)
            setIsCrossIcon(false)
            setIsMobileView(window.innerWidth <= 768);
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <div className='flex items-center h-full p-3 justify-between'>

                <div className='flex items-center'>
                    <img
                        src='src/assets/LogoFactoria.png'
                        className='max-w-[90px] h-auto mb-7 ml-5 mt-2 md:max-w-[100px] md:ml-10'
                        alt='isologo-f5'
                    />
                </div>
                <div className='flex items-center  mt-2'>
                    <div className='ml-10 mt-2 mr-10'>
                        {!isMobileView && <AdminDesktopMenuNav />}
                    </div>
                    <div className='mr-5  ml-15 '>
                        {!isMobileView && <SearchInput />}
                    </div>
                    <div className='mr-5'>
                        {!isMobileView && <UserNav />}
                    </div>
                </div>

                <div className='mr-5 ml-15'>
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
                    <AdminMobileMenuNav />
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
