import { Contact } from "lucide-react";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";
import { InstallationSteps } from "./_components/installation-steps";
import { Pricing } from "./_components/pricing";
import { Support } from "./_components/support";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Features />

      <Pricing />
      <InstallationSteps />
      <Support />
      <Contact />
    </main>
  );
}
