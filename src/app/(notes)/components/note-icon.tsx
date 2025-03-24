


interface NoteLineProps {
    width: string; // "3/4", "full", "5/6", etc.
    className?: string;
}

function NoteLine({ width, className = "" }: NoteLineProps) {
    return <div className={`w-${width} h-3 bg-primary opacity-10 rounded ${className}`}></div>;
}


export default function NoteIcon() {
    return (
        <div className="relative w-48 h-64 md:w-56 md:h-72 animate-wiggle group">
            <div className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105">
                <div className="absolute inset-0 bg-background border border-border rounded-lg shadow-md transform rotate-[-5deg]"></div>
                <div className="absolute inset-0 bg-background border border-border rounded-lg shadow-md transform rotate-[3deg]"></div>
                <div className="absolute inset-0 bg-background border border-border rounded-lg shadow-md flex flex-col p-4">

                    <div className="space-y-2">
                        <NoteLine width="3/4" />
                        <NoteLine width="full" />
                        <NoteLine width="5/6" />
                        <NoteLine width="full" />
                        <NoteLine width="4/5" />
                        <NoteLine width="5/6" />
                        <NoteLine width="full" />
                        <NoteLine width="4/5" />
                        <NoteLine width="5/6" />
                        <NoteLine width="full" />
                        <NoteLine width="4/5" />
                        <NoteLine width="full" className="hidden md:block" />
                        <NoteLine width="5/6" className="hidden md:block" />
                    </div>
                </div>
            </div>
        </div>
    );
}