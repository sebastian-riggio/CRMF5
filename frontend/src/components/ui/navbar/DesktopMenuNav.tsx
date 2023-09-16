import { Link } from '@radix-ui/react-navigation-menu'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../navigation-menu'

function DesktopMenuNav () {
  return (
    <>
      <div className='flex space-x-4'>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Proyectos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href='/allprojects'>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Proyectos
                  </NavigationMenuLink>
                </Link>
                <Link href='/newproject'>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Nuevo proyecto
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Convocatorias
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href='/allcalls'>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Convocatorias
                  </NavigationMenuLink>
                </Link>
                <Link href='/newcall'>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Nuevo convocatoria
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Financistas
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href='/allfinanciers'>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Financistas
                  </NavigationMenuLink>
                </Link>
                <Link href='/newfinancer'>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Nuevo financista
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        </div>
      </div>
    </>
  )
}
export default DesktopMenuNav
