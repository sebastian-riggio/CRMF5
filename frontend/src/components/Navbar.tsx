import MenuNav from './ui/navbar/MenuNav'
import { Search } from './ui/navbar/search'
import UserNav from './ui/navbar/user-nav'

function Navbar () {
  return (
    <>
      <MenuNav />
      <Search />
      <UserNav />
    </>
  )
}

export default Navbar
