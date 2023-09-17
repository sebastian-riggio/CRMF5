import { Link } from '@radix-ui/react-navigation-menu'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../navigation-menu'

function DesktopMenuNav() {
  return (
    <>
      <div className='flex space-x-4'>

        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  PROYECTOS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href='/allprojects'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      PROYECTOS
                    </NavigationMenuLink>
                  </Link>
                  <Link href='/newproject'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      SUBIR NUEVO PROYECTO
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
                  CONVOCATORIAS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href='/allcalls'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      CONVOCATORIAS
                    </NavigationMenuLink>
                  </Link>
                  <Link href='/newcall'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      SUBIR NUEVA CONVOCATORIA
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
                  FINANCISTAS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href='/allfinanciers'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      FINANCISTAS
                    </NavigationMenuLink>
                  </Link>
                  <Link href='/newfinancer'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      SUBIR NUEVO FINANCISTA
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
                  USUARIOS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href='/allfinanciers'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      USUARIOS
                    </NavigationMenuLink>
                  </Link>
                  <Link href='/registeruser'>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      CREAR NUEVO USUARIO
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
