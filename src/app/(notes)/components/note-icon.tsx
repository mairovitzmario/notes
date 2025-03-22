import { Pencil } from "lucide-react"

export default function NoteIcon() {
    return (
        <div className="relative w-48 h-64 md:w-56 md:h-72 animate-wiggle group">
            <div className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105">
                <div className="absolute inset-0 bg-background border border-border rounded-lg shadow-md transform rotate-[-5deg]"></div>
                <div className="absolute inset-0 bg-background border border-border rounded-lg shadow-md transform rotate-[3deg]"></div>
                <div className="absolute inset-0 bg-background border border-border rounded-lg shadow-md flex flex-col p-4">

                    <div className="space-y-2">
                        <div className="w-3/4 h-3 bg-muted/70 rounded"></div>
                        <div className="w-full h-3 bg-muted/70 rounded"></div>
                        <div className="w-5/6 h-3 bg-muted/70 rounded"></div>
                        <div className="w-full h-3 bg-muted/70 rounded"></div>
                        <div className="w-4/5 h-3 bg-muted/70 rounded"></div>
                        <div className="w-5/6 h-3 bg-muted/70 rounded"></div>
                        <div className="w-full h-3 bg-muted/70 rounded"></div>
                        <div className="w-4/5 h-3 bg-muted/70 rounded"></div>
                        <div className="w-5/6 h-3 bg-muted/70 rounded"></div>
                        <div className="w-full h-3 bg-muted/70 rounded"></div>
                        <div className="w-4/5 h-3 bg-muted/70 rounded"></div>
                        <div className="w-full h-3 bg-muted/70 rounded hidden md:block"></div>
                        <div className="w-5/6 h-3 bg-muted/70 rounded hidden md:block"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}