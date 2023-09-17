import { Link } from '@radix-ui/react-navigation-menu';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from './navigation-menu';

interface MenuItemProps {
    title: string; 
    links: Array<{ url: string; text: string }>;
}

function MenuItem({ title, links }: MenuItemProps) {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            {title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            {links.map((link, index) => (
                                <Link key={index} href={link.url}>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {link.text}
                                    </NavigationMenuLink>
                                </Link>
                            ))}
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export default MenuItem;
