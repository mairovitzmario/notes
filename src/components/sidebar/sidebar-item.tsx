'use client'

import { SectionItem } from "./sidebar-types";
import { SidebarMenuItem, SidebarMenuButton } from "../ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";



export default function SidebarItem({ item }: { item: SectionItem }) {
    const pathname = usePathname();



    return (
        <Suspense fallback={<Skeleton className="h-4 w-[20px]" />}>
            <SidebarMenuItem key={item.id}>
                <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>{item.title}</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </Suspense>

    );

}