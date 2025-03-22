import * as React from "react"
import { ChevronRight, Pin, FileText, Trash } from "lucide-react"
import { SearchForm } from "@/components/sidebar/search-form"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { SectionItem, Sections, } from "@/components/sidebar/sidebar-types"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

import SignOutButton from "@/components/sidebar/sign-out-button"


export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const supabase = await createClient()

  // Get the current user using the correct destructuring pattern
  const { data: { user } } = await supabase.auth.getUser()

  // Redirect to login if no active session
  if (!user) {
    redirect('/login')
  }

  // Get user ID from the user object
  const userId = user.id

  // Query only notes belonging to the logged-in user
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .eq('user_id', userId)

  if (error) {
    console.log('error', error)
    redirect('/error')

  }

  // Use section type with integrated icons
  const sections: Sections = {
    navMain: [
      {
        title: 'Pinned',
        url: "#",
        icon: <Pin className="w-4 h-4 mr-2" />,
        items: data?.filter(note => note.pinned === true)
          .map((note): SectionItem => ({
            title: note.title || 'Untitled Note',
            url: `/notes/${note.id}`
          })) || []
      },
      {
        title: 'Notes',
        url: "#",
        icon: <FileText className="w-4 h-4 mr-2" />,
        items: data?.filter(note => note.pinned !== true && note.scheduled_deletion === null)
          .map((note): SectionItem => ({
            title: note.title || 'Untitled Note',
            url: `/notes/${note.id}`
          })) || []
      },
      {
        title: 'Recycled',
        url: "#",
        icon: <Trash className="w-4 h-4 mr-2" />,
        items: data?.filter(note => note.scheduled_deletion !== null)
          .map((note): SectionItem => ({
            title: note.title || 'Untitled Note',
            url: `/notes/${note.id}`
          })) || []
      }
    ]
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>

        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {sections.navMain.map((section) => (
          <Collapsible
            key={section.title}
            title={section.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              >
                <CollapsibleTrigger>
                  <span className="flex items-center">
                    {section.icon}
                    {section.title}
                  </span>{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items?.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={false}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SignOutButton />
      </SidebarFooter>
    </Sidebar>
  )
}
