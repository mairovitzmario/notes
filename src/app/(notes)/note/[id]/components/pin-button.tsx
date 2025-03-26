'use client'

import { Pin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pinNote } from '../actions';
import { useNote } from '../context/note-context';

export default function PinButton() {
    const { note } = useNote();

    return (
        <Button size={'icon'} variant={note?.pinned ? 'ghostSelected' : 'ghost'}
            onClick={() => pinNote({ note })}>
            <Pin className="scale-100 sm:scale-110" />
        </Button>
    );
}