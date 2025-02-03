"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "Viet Nam",
    url: "/top-100/vietnam",
  },
  {
    title: "US-UK",
    url: "/top-100/us-uk",
  },
  {
    title: "Asia",
    url: "/top-100/asia",
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menu, index) => {
          const isActive = menu.url === pathname;

          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
                active={isActive}
              >
                <Link href={menu.url}>{menu.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
