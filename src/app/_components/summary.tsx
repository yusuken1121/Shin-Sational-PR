import { Check, PenBoxIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TbCoinOff } from "react-icons/tb";
import { TiSpannerOutline } from "react-icons/ti";
import { IconCard } from "./common/iconCard";

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
            <IconCard
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
