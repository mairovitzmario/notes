import { createClient } from "@/utils/supabase/server";
import getUserId from "@/utils/supabase/helpers/get-user-id";

async function getNote(id: string) {
    const supabase = await createClient()

    // Get the current user using the correct destructuring pattern
    const userId = await getUserId();

    // Query only notes belonging to the logged-in user
    const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', userId)
        .eq('id', id)
        .single()

    if (error) {
        console.error("Error fetching note:", error);
        return null;
    }

    return data;
}

export default async function NotePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const note = await getNote(id);
    console.log(note)

    return (
        <div>

        </div>
    );
}