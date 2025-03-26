'use client'

import { Button } from "@/components/ui/button";
import { recycleNote } from "../actions";
import { useNote } from "../context/note-context";
import { Undo2 } from "lucide-react";

export default function RevertButton() {
    const { note } = useNote();

    return (
        <Button
            size={'icon'}
            variant={'ghost'}
            onClick={() => recycleNote({ note })}

        >
            <Undo2 className="scale-100 sm:scale-110" />
        </Button>

    )
}