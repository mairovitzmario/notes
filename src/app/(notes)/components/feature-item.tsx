import { LucideIcon } from "lucide-react";


interface FeatureItemProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export function FeatureItem({ icon: Icon, title, description }: FeatureItemProps) {
    return (
        <li className="flex items-center gap-3 my-8">
            <div className="bg-primary/10 p-2 rounded-full text-primary">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <p className="font-medium">{title}</p>
                <p className="text-muted-foreground text-sm">{description}</p>
            </div>
        </li>
    );
}
