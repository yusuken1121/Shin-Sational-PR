import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          お問い合わせ
        </h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <Input
                placeholder="お名前"
                className="bg-zinc-800 border-zinc-700"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="メールアドレス"
                className="bg-zinc-800 border-zinc-700"
              />
            </div>
            <div>
              <Textarea
                placeholder="お問い合わせ内容"
                className="bg-zinc-800 border-zinc-700"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#C8A97E] hover:bg-[#B69A71] text-black"
            >
              送信する
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
