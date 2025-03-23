'use client'

import { SectionItem } from "./sidebar-types";
import { SidebarMenuItem, SidebarMenuButton } from "../ui/sidebar";
import { usePathname } from "next/navigation";



export default function SidebarItem({ item }: { item: SectionItem }) {
    const pathname = usePathname();
    console.log('url', item.url, 'pathname', pathname)


    return (
        <SidebarMenuItem key={item.id}>
            <SidebarMenuButton asChild isActive={pathname === item.url}>
                <a href={item.url}>{item.title}</a>
            </SidebarMenuButton>
        </SidebarMenuItem>

    );

}