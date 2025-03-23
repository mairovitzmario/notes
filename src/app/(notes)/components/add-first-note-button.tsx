'use client'

import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { addNote } from "../actions";

export default function AddFirstNoteButton() {



    return (
        <Button size="lg" className="gap-2" onClick={addNote}>
            <FileText className="w-4 h-4" />
            Create Your First Note
        </Button>
    )
}