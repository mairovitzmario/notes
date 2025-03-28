import React from "react";


import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'


import Title from "@/components/title";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Button } from "@/components/ui/button";
import AddNoteButton from "@/app/(notes)/components/add-note-button";


export default async function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()



  if (error || !data?.user) {
    redirect('/login')
  }

  return (

    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Title text="Notes" className="text-xl mt-[-1]" />
          <span className="absolute right-2 flex items-center gap-2">
            {error || !data?.user ? <Button variant={'ghost'}>Log in</Button> : null}
            <AddNoteButton />
            <ThemeToggleButton />
          </span>
        </header>
        <main>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>

  );
}
