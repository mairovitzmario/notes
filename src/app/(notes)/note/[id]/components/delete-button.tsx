'use client'

import { Trash } from "lucide-react";
import { Button } from '@/components/ui/button'
import { Tables } from "@/utils/supabase/supabase-types";
import { deleteNote, recycleNote } from "../actions";
import { useNote } from "../context/note-context";


export default function DeleteButton() {
    const { note } = useNote();
    return (
        <Button
            size={'icon'}
            variant={'ghost'}
            onClick={() => {
                if (note.scheduled_deletion) {
                    deleteNote({ note });
                }
                else {
                    recycleNote({ note });
                }
            }}

        >
            <Trash className="scale-100 sm:scale-110" />
        </Button>
    )
}