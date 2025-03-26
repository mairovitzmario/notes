import { Skeleton } from "@/components/ui/skeleton"

function TextLines({ count = 5 }: { count?: number }) {
    const widths = ["w-full", "w-3/4", "w-4/5", "w-2/3", "w-1/2", "w-2/3", "w-4/5"];

    return (
        <>
            {Array.from({ length: count }).map((_, index) => {

                const randomWidth = widths[index % widths.length];
                return (
                    <Skeleton key={index} className={`h-4 ${randomWidth} mb-4`} />
                );
            })}
        </>
    );
}

export default function Loading() {
    return (
        <div className="p-4">
            <Skeleton className="h-10 w-1/2 mb-4" />
            <TextLines count={20} />
        </div>
    )
}