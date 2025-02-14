import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center bg-primary bg-center">
      {/* Transparent background image */}
      <div
        className="absolute inset-0 bg-[url('/Background/background.png')] bg-center opacity-60"
        aria-hidden="true"
      />
      {/* Overlay for additional color */}
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative z-10 container px-4 md:px-6 text-center">
        <p className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 mb-6">
          Modern QR code menu system.
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Shin-Sational 2.0:
          <br />
          Your Partner in{" "}
          <span className="text-accent shadow-text-accent">
            Restaurant
          </span>{" "}
          Branding
        </h1>
        <p className="max-w-[600px] mx-auto text-zinc-300 md:text-xl mb-8">
          Innovating a digital Restaurant menu experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#designs">
            <Button size="lg" variant="default">
              Design
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline">
              Contact us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
