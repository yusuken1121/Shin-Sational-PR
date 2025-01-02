import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container px-4 md:px-6 text-center">
        <p className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 mb-6">
          モダンなQRコードメニューシステム
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          デジタルで革新する
          <br />
          レストランメニュー体験
        </h1>
        <p className="max-w-[600px] mx-auto text-zinc-300 md:text-xl mb-8">
          QRコードを活用したモダンなデジタルメニューで、
          お客様により良い体験を提供します
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#C8A97E] hover:bg-[#B69A71] text-black"
          >
            デモを見る
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-black"
          >
            お問い合わせ
          </Button>
        </div>
      </div>
    </section>
  );
}
