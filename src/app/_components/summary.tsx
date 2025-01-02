import { Check, PenBoxIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TbCoinOff } from "react-icons/tb";
import { TiSpannerOutline } from "react-icons/ti";

// FeatureCard コンポーネント
interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  description2?: string;
}

function FeatureCard({
  title,
  icon,
  description,
  description2,
}: FeatureCardProps) {
  return (
    <Card className="border-zinc-700">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4 ">
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

// Features コンポーネント
export function Summaries() {
  const features = [
    {
      title: "Sophisticated Design",
      icon: <PenBoxIcon className="w-full h-full text-foreground" />,
      description:
        "Elevate your brand with a sleek, modern design. Our digital menu adds a touch of class that sets you apart from the competition.",
    },
    {
      title: "For Free",
      icon: <TbCoinOff className="w-full h-full text-foreground" />,
      description:
        "Get started for free! No initial setup fees. It's the perfect opportunity to upgrade your menu without breaking the bank.",
      description2: "*Support fee will be charged from the second month.",
    },
    {
      title: "Technical Support",
      icon: <TiSpannerOutline className="w-full h-full text-foreground" />,
      description:
        "No tech expertise needed! We offer comprehensive support from setup to ongoing management, so you can focus on what you do best - running your restaurant.",
    },
  ];

  return (
    <section className="flex items-center justify-center w-full h-full py-24 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Product Summary
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              description2={feature.description2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
