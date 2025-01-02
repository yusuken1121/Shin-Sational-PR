import { Check, PenBoxIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="border-tertiary">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4 ">
          <Check className="w-6 h-6 text-accent" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-20 h-20 my-2">{icon}</div>
        </div>
        <p>{description}</p>
        <p>{description2}</p>
      </CardContent>
    </Card>
  );
}

// Features コンポーネント
export function Features() {
  const features = [
    {
      title: "Sophisticated Design",
      icon: <Check className="w-full h-full text-foreground" />,
      description:
        "モダンでエレガントなデザインで、あなたのブランドを際立たせます",
    },
    {
      title: "For Free",
      icon: <PenBoxIcon className="w-full h-full text-foreground" />,
      description: "No installation cost",
      description2: "*Support fee will be charged from second month",
    },
    {
      title: "Technical Support",
      icon: <Check className="w-full h-full text-foreground" />,
      description: "専門知識不要で、すぐにデジタルメニューを始められます",
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
