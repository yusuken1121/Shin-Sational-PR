import { Card, CardContent } from "@/components/ui/card";

export function InstallationSteps() {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description:
        "Register with Shin-Sational 2.0, choose a plan, and make a secure payment. Start easily and with confidence.",
    },
    {
      number: 2,
      title: "Connect with Notion",
      description:
        "Link your Notion account and copy the dedicated template. Smoothly input your information.",
    },
    {
      number: 3,
      title: "Input Data",
      description:
        "Enter your menu and store details into Notion. Configure the basic settings of your website here.",
    },
    {
      number: 4,
      title: "Publish Website & Start Operations",
      description:
        "Once all information and settings are complete, your restaurant's website will go live.",
    },
  ];

  return (
    <section className="flex items-center justify-center w-full h-full py-24 ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Installation steps
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-accent text-black flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
