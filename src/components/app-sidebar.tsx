"use client"

import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

import Image from 'next/image'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const pathname = usePathname()

  console.log(pathname)


  return (
    <Sidebar {...props} className="px-2 bg-dark2">
      <SidebarHeader className="text-white pt-6 pr-2 pb-6 pl-2" >
        <div className="flex gap-2 items-center">
          <Image
            src="/image/taskflow.svg"
            width={36}
            height={36}
            alt="logo"
          />

        <div>TaskFlow</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent.
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))} */}

        <SidebarGroup className="text-white-custom">

          <div className="flex gap-2 items-center p-2">

           <Image
            src="/image/boards.svg"
            width={18}
            height={18}
            alt="boards"
          />
          <Link href="/boards" className={cn (pathname=== "/boards" ? "text-primary" : "", "") }>Boards</Link>
          
          </div>

          <div className="flex gap-2 items-center p-2">
            <Image
            src="/image/mytasks.svg"
            width={18}
            height={18}
            alt="mytasks"
          />
          <Link href="/mytasks" className={pathname === "/mytasks" ? "text-primary" : ""}>My Tasks</Link>
          </div>

          <div className="flex gap-2 items-center p-2">
            <Image
            src="/image/settings.svg"
            width={18}
            height={18}
            alt="settings"
          />
          <Link href="/settings" className={pathname === "/settings" ? "text-primary" : ""}>Settings</Link>
          </div>
          
        </SidebarGroup>



      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
