import { Hero } from "./_components/hero";
import { InstallationSteps } from "./_components/installation-steps";
import { Pricing } from "./_components/pricing";
import { Support } from "./_components/support";
import { Summaries } from "./_components/summary";
import { Contact } from "./_components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Summaries />

      <Pricing />
      <InstallationSteps />
      <Support />
      <Contact />
    </main>
  );
}
