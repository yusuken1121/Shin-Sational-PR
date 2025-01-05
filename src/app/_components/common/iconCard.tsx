import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface IconCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  description2?: string;
  className?: string;
}

export function IconCard({
  title,
  icon,
  description,
  description2,
  className,
}: IconCardProps) {
  return (
    <Card className={cn("border-zinc-700", className)}>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4 min-h-[50px] ">
          <Check className="w-6 h-6 text-accent" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-20 h-20 my-2">{icon}</div>
        </div>
        <div className="flex flex-col gap-2 text-zinc-400">
          <p>{description}</p>
          {description2 && <p>{description2}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
