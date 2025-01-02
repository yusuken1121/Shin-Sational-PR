import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section className="flex items-center justify-center w-full h-full py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact
        </h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <Input
                placeholder="Name"
                className="bg-primary border-zinc-700"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Mail Address"
                className="bg-primary border-zinc-700"
              />
            </div>
            <div>
              <Textarea
                placeholder="Message"
                className="bg-primary border-zinc-700"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent text-black"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
