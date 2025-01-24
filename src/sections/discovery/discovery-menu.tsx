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
    title: "New & Hot",
    url: "/new-hot",
  },
  {
    title: "Viet Nam",
    url: "/vietnam",
  },
  {
    title: "US-UK",
    url: "/us-uk",
  },
  {
    title: "Other",
    url: "/other",
  },
];

const DiscoveryMenu = ({ basePath }: { basePath: string }) => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menu, index) => {
          const isActive = `${basePath}${menu.url}` === pathname;

          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
                active={isActive}
              >
                <Link
                  href={{
                    pathname: `${basePath}${menu.url}`,
                    query: { page: 1 },
                  }}
                >
                  {menu.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DiscoveryMenu;
