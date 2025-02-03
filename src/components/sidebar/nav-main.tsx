"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({
  menus,
}: {
  menus: {
    title: string;
    url?: string;
    icon: LucideIcon;
    openDefault?: boolean;
    subMenus?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {menus.map((menu) => {
          const currentUrl =
            (menu.subMenus?.length &&
              menu.subMenus.find((item) => pathname.includes(item.url))?.url) ||
            menu?.url;

          const isActive = !!(currentUrl && pathname.includes(currentUrl));

          return (
            <Collapsible
              key={menu.title}
              asChild
              defaultOpen={menu.openDefault || isActive}
            >
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip={menu.title}
                  isActive={isActive}
                >
                  {menu.url ? (
                    <Link href={menu.url}>
                      <menu.icon />
                      <span>{menu.title}</span>
                    </Link>
                  ) : (
                    <div>
                      <menu.icon />
                      <span>{menu.title}</span>
                    </div>
                  )}
                </SidebarMenuButton>
                {menu.subMenus?.length ? (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction className="data-[state=open]:rotate-90">
                        <ChevronRight />
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {menu.subMenus?.map((subMenu) => (
                          <SidebarMenuSubItem key={subMenu.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname.includes(subMenu.url)}
                            >
                              <Link href={subMenu.url}>
                                <span>{subMenu.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                ) : null}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
