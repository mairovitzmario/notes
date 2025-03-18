import { Roboto } from 'next/font/google';


export default function Title({ text, className }: { text: string, className?: string }) {
    return (
        <div className={`text-2xl font-semibold text-sidebar-foreground ${className}`}>
            <h1>{text}</h1>
        </div>
    );
}