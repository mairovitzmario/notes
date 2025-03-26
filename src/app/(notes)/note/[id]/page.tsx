import { createClient } from "@/utils/supabase/server";
import getUserId from "@/utils/supabase/helpers/get-user-id";
import DeleteButton from "./components/delete-button";
import PinButton from "./components/pin-button";
import TitleInput from "./components/title-input";
import { redirect } from "next/navigation";
import { NoteProvider } from "./context/note-context";
import ContentInput from "./components/content-input";
import RevertButton from "./components/revert-button";

async function getNote(id: string) {
    const supabase = await createClient()


    const userId = await getUserId();


    const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', userId)
        .eq('id', id)
        .single()

    if (error || !data) {
        console.error("Error fetching note:", error);
        return null;
    }

    return data;
}

export default async function NotePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const note = await getNote(id);

    if (note === null) {
        redirect('/error');
    }
    else {
        return (
            <NoteProvider note={note}>
                <div>
                    <div className="flex flex-row items-baseline sm:items-center justify-between p-2">
                        <TitleInput />
                        <div className="flex flex-row items-center gap-2">
                            {note.scheduled_deletion ? <RevertButton /> : <PinButton />}
                            <DeleteButton />
                        </div>
                    </div>
                    <section className="px-2 pt-1 pb-5">
                        <ContentInput />
                    </section>
                </div>
            </NoteProvider>
        );
    }
}