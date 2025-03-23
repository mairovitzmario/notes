import { ReactNode } from 'react';

export interface SectionItem {
    id: string;
    title: string;
    url: string;
}

export interface Section {
    title: string;
    url: string;
    items: SectionItem[];
    icon?: ReactNode;
}

export interface Sections {
    navMain: Section[];
}



