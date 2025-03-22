'use client'

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Plus } from "lucide-react";

export default function AddNoteButton() {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Button size={'icon'} variant={'ghost'}>
                <Plus className="scale-125" />
            </Button >
        )
    }

    return (
        <Button size="lg" className="gap-2" variant={'ghost'}>
            <Plus />
            Add Note
        </Button>
    );
}