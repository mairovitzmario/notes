'use server'

import { createClient } from "@/utils/supabase/server";
import { Tables } from "@/utils/supabase/supabase-types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import getUserId from "@/utils/supabase/helpers/get-user-id";

export async function recycleNote({ note }: { note: Tables<'notes'> }) {
    const supabase = await createClient();
    const userId = await getUserId();

    // Calculate new scheduled_deletion value based on current state
    let scheduledDeletion: string | null = null;

    if (note.scheduled_deletion === null) {
        // Set deletion date to 30 days from now
        const date = new Date();
        date.setDate(date.getDate() + 30);
        scheduledDeletion = date.toISOString();
    }
    // If already has a date, it will remain null (to clear it)

    const { error } = await supabase
        .from('notes')
        .update({ scheduled_deletion: scheduledDeletion })
        .eq('id', note.id)
        .eq('user_id', userId);

    if (error) {
        console.error("Error deleting note:", error);
        throw new Error("Failed to delete note");
    }

    revalidatePath('/note[id]');
}

export async function deleteNote({ note }: { note: Tables<'notes'> }) {
    const supabase = await createClient();
    const userId = await getUserId();

    const { error } = await supabase
        .from('notes')
        .delete()
        .eq('id', note.id)
        .eq('user_id', userId);

    if (error) {
        console.error("Error deleting note:", error);
        throw new Error("Failed to delete note");
    }

    revalidatePath('/');
    redirect('/');

}

export async function pinNote({ note }: { note: Tables<'notes'> }) {
    const supabase = await createClient();
    const userId = await getUserId();

    const { error } = await supabase
        .from('notes')
        .update({ pinned: !note.pinned })
        .eq('id', note.id)
        .eq('user_id', userId);

    if (error) {
        console.error("Error pinning note:", error);
        throw new Error("Failed to pin note");
    }

    revalidatePath('/note[id]');
}

export async function updateNoteTitle({ noteId, title }: { noteId: string, title: string }) {
    const supabase = await createClient();
    const userId = await getUserId();

    const { error } = await supabase
        .from('notes')
        .update({ title })
        .eq('id', noteId)
        .eq('user_id', userId);

    if (error) {
        console.error("Error updating note title:", error);
        throw new Error("Failed to update note title");
    }

    revalidatePath(`/note/${noteId}`);
}

export async function updateNoteContent({ noteId, content }: { noteId: string, content: string }) {
    const supabase = await createClient();
    const userId = await getUserId();

    const { error } = await supabase
        .from('notes')
        .update({ content })
        .eq('id', noteId)
        .eq('user_id', userId);

    if (error) {
        console.error("Error updating note title:", error);
        throw new Error("Failed to update note title");
    }

    revalidatePath(`/note/${noteId}`);
}