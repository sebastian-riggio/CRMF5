import { Card } from './ui/card'
import MenuNav from './ui/navbar/MenuNav'
import { Search } from './ui/navbar/search'
import UserNav from './ui/navbar/user-nav'
import { Menu } from 'lucide-react'

function Navbar () {
  return (
    <>
      <Card className='bg-transparent h-22'>
        <div className='flex items-center justify-between h-full p-4'>
          <div className='flex items-center space-x-4'>
            <img
              src='src/assets/LogoFactoria.png'
              className='max-w-[100px] h-auto mb-7 ml-7'
              alt='isologo-f5'
            />
            <MenuNav />
            <Search />
            <UserNav />
            <Menu />
          </div>
        </div>
      </Card>
    </>
  )
}

export default Navbar
