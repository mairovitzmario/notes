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
  SidebarRail,
} from "@/components/ui/sidebar"

import SignOutButton from "@/components/sidebar/sign-out-button"
import SidebarItem from "./sidebar-item"
import { Tables } from "@/utils/supabase/supabase-types"
import getUserId from "@/utils/supabase/helpers/get-user-id"

async function getSections() {
  const supabase = await createClient()

  // Get the current user using the correct destructuring pattern
  const userId = await getUserId();

  // Query only notes belonging to the logged-in user
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .eq('user_id', userId)

  console.log('data', data)

  if (error) {
    console.log('error', error)
    redirect('/error')

  }

  // Filter notes based on the their category (PINNED, NOTES, RECYCLED)
  const mapNotes = (predicate: (note: Tables<'notes'>) => boolean): SectionItem[] =>
    (data?.filter(predicate) ?? []).map((note): SectionItem => ({
      id: note.id,
      title: note.title || 'Untitled Note',
      url: `/note/${note.id}`
    }));

  const sections: Sections = {
    navMain: [
      {
        title: 'Pinned',
        url: "#",
        icon: <Pin className="w-4 h-4 mr-2" />,
        items: mapNotes(note => note.pinned === true)
      },
      {
        title: 'Notes',
        url: "#",
        icon: <FileText className="w-4 h-4 mr-2" />,
        items: mapNotes(note => note.pinned !== true && note.scheduled_deletion === null)
      },
      {
        title: 'Recycled',
        url: "#",
        icon: <Trash className="w-4 h-4 mr-2" />,
        items: mapNotes(note => note.scheduled_deletion !== null)
      }
    ]
  };


  return sections;
}


export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const sections = await getSections();
  console.log('sections', sections);

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
                      <SidebarItem item={item} key={item.id} />
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <SignOutButton />
      </SidebarFooter>
    </Sidebar>
  )
}
