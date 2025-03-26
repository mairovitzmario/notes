'use client'

import { Tables } from '@/utils/supabase/supabase-types';
import { createContext, useContext, ReactNode } from 'react';

type NoteContextType = {
    note: Tables<'notes'>;
};

const NoteContext = createContext<NoteContextType | null>(null);

export function NoteProvider({ children, note }: { children: ReactNode; note: Tables<'notes'> }) {
    return (
        <NoteContext.Provider value={{ note }}>
            {children}
        </NoteContext.Provider>
    );
}

export function useNote() {
    const context = useContext(NoteContext);
    if (context === null) {
        throw new Error('useNote must be used within a NoteProvider');
    }
    return context;
}
