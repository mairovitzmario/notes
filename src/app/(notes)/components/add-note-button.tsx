'use client'

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Plus } from "lucide-react";
import { addNote } from "../actions";

export default function AddNoteButton() {



    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Button size={'icon'} variant={'ghost'} onClick={addNote}>
                <Plus className="scale-125" />
            </Button >
        )
    }

    return (
        <Button size="lg" className="gap-2" variant={'ghost'} onClick={addNote}>
            <Plus />
            Add Note
        </Button>
    );
}