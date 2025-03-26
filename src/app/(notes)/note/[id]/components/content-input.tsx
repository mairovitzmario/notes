'use client'

import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import { useNote } from "../context/note-context";
import { Textarea } from "@/components/ui/textarea";
import { updateNoteContent } from "../actions";

export default function ContentInput() {

    const { note } = useNote();
    const [content, setContent] = useState(note.content || "");
    const [debouncedContent] = useDebounce(content, 1000);
    const contentRef = useRef<HTMLTextAreaElement>(null);

    // Update title in db on debounce
    useEffect(() => {
        if (debouncedContent !== note.content && debouncedContent !== "") {
            updateNoteContent({ noteId: note.id, content: debouncedContent });
        }
    }, [debouncedContent]);



    // Update title in db on unmount
    useEffect(() => {
        const currentRef = contentRef.current;

        return () => {
            const currentContent = currentRef?.value;
            if (currentContent && currentContent !== note.content && currentContent !== "") {
                updateNoteContent({ noteId: note.id, content: currentContent });
            }
        };
    }, []);
    return (
        <Textarea
            ref={contentRef}
            onChange={(e) => setContent(e.target.value)}
            value={content}
            variant={'ghost'} placeholder="Start writing here..." size={'lg'} className="flex-1 resize-none" />
    );
}