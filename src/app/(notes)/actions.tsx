'use server'
import getUserId from "@/utils/supabase/helpers/get-user-id"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function addNote() {
    const supabase = await createClient()
    const userId = await getUserId();

    const { data, error } = await supabase
        .from('notes')
        .insert([{ user_id: userId }]).select()

    if (error) {
        console.error(error)
        redirect('/error')
    }


    redirect(`/note/${data[0].id}`)
}