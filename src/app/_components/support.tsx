import { Check, Info, RefreshCcw, Settings, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { IconCard, IconCardProps } from "./common/iconCard";

export function Support() {
  // const supportItems = [
  //   "Initial Setup Support",
  //   "Operational Support",
  //   "Technical Inquiry Handling",
  //   "Update Information Delivery",
  // ];

  const supportItems: IconCardProps[] = [
    {
      title: "Initial Setup Support",
      icon: <Settings className="w-full h-full text-foreground" />,
      description:
        "We provide comprehensive assistance to get you started. Our team will guide you through the initial setup of your digital menu, ensuring a smooth and confident onboarding experience.",
    },
    {
      title: "Operational Support",
      icon: <Wrench className="w-full h-full text-foreground" />,
      description:
        "Our dedicated support team is here to assist you during your day-to-day operations. We help resolve any challenges you face while using our digital menu system.",
    },
    {
      title: "Technical Inquiry Handling",
      icon: <Info className="w-full h-full text-foreground" />,
      description:
        "Have technical questions or issues? Our experts are ready to address your inquiries and provide solutions to keep your system running seamlessly.",
    },
    {
      title: "Update Information Delivery",
      icon: <RefreshCcw className="w-full h-full text-foreground" />,
      description:
        "Stay informed about the latest updates and features. We'll keep you up to date with important changes and improvements to enhance your experience.",
    },
  ];

  return (
    <section className="flex items-center justify-center w-full h-full py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Support Contents
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {supportItems.map((item, index) => {
            return (
              <IconCard
                key={index}
                title={item.title}
                icon={item.icon}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
