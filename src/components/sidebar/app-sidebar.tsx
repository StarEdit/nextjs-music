"use client";

import {
  Compass,
  Guitar,
  Headphones,
  House,
  LifeBuoy,
  Search,
  Send,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Search",
      url: "/search",
      icon: Search,
    },
    {
      title: "Home",
      url: "/",
      icon: House,
    },
    {
      title: "Discovery",
      icon: Compass,
      subMenus: [
        {
          title: "Song",
          url: "/song/new-hot",
        },
        {
          title: "Playlist",
          url: "/playlist/new-hot",
        },
        {
          title: "Video",
          url: "/video/new-hot",
        },
        {
          title: "Artist",
          url: "/artist",
        },
      ],
    },
    {
      title: "What Listen Today",
      icon: Headphones,
      openDefault: true,
      subMenus: [
        {
          title: "Topic",
          url: "/topic",
        },
        {
          title: "Collection",
          url: "/collection",
        },
        {
          title: "Top 100",
          url: "/top-100",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="sidebar" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Guitar className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">T-music</span>
                  <span className="truncate text-xs">Enjoy the music</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain menus={data.navMain} />
        <NavSecondary menus={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
