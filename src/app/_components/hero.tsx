import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-[url('/placeholder.svg?height=1080&width=1920')] bg-primary bg-center">
      <div className="absolute inset-0 bg-primary" />
      <div className="relative z-10 container px-4 md:px-6 text-center">
        <p className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 mb-6">
          Modern QR code menu system.
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Innovating a digital
          <br />
          <span className="text-accent shadow-text-accent">
            Restaurant
          </span>{" "}
          menu experience
        </h1>
        <p className="max-w-[600px] mx-auto text-zinc-300 md:text-xl mb-8">
          Modern digital menus with QR codes for a better customer experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="default">
            Demo
          </Button>
          <Button size="lg" variant="outline">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
