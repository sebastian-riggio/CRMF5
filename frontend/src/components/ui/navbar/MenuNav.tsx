import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../navigation-menu'

function MenuNav () {
  return (
    <>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Proyectos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div>
                  <NavigationMenuLink>
                    Proyectos
                  </NavigationMenuLink>
                </div>
                <div>
                  <NavigationMenuLink>
                    Nuevo proyecto
                  </NavigationMenuLink>
                </div>
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
                <div>
                  <NavigationMenuLink>
                    Convocatorias
                  </NavigationMenuLink>
                </div>
                <div>
                  <NavigationMenuLink>
                    Nueva convocatoria
                  </NavigationMenuLink>
                </div>
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
                <div>
                  <NavigationMenuLink>
                    Financistas
                  </NavigationMenuLink>
                </div>
                <div>
                  <NavigationMenuLink>
                    Nuevo financista
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  )
}
export default MenuNav
