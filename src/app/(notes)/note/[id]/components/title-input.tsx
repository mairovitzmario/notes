'use client'

import { Input } from '@/components/ui/input';
import { useNote } from '../context/note-context';
import { useDebounce } from 'use-debounce'
import { useState, useEffect, useRef } from 'react';
import { updateNoteTitle } from '../actions';

export default function TitleInput() {
    const { note } = useNote();
    const [title, setTitle] = useState(note.title || "");
    const [debouncedTitle] = useDebounce(title, 500);
    const inputRef = useRef<HTMLInputElement>(null);

    // Update title in db on debounce
    useEffect(() => {
        if (debouncedTitle !== note.title && debouncedTitle !== "") {
            updateNoteTitle({ noteId: note.id, title: debouncedTitle });
        }
    }, [debouncedTitle]);



    // Update title in db on unmount
    useEffect(() => {
        const currentInput = inputRef.current;

        return () => {
            const currentTitle = currentInput?.value;
            if (currentTitle && currentTitle !== note.title && currentTitle !== "") {
                updateNoteTitle({ noteId: note.id, title: currentTitle });
            }
        };
    }, []);

    return (
        <Input
            ref={inputRef}
            variant="ghost"
            placeholder="Untitled Note"
            size={'xl'}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
    );
}
