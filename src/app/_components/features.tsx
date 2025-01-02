import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          商品の特徴
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-tertiary">
            <CardContent className="p-6">
              <div className="mb-4 text-accent">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">洗練されたデザイン</h3>
              <p>
                モダンでエレガントなデザインで、あなたのブランドを際立たせます
              </p>
            </CardContent>
          </Card>
          <Card className="border-tertiary">
            <CardContent className="p-6">
              <div className="mb-4 text-accent">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">マルチデバイス対応</h3>
              <p>
                スマートフォン、タブレット、PCなど、あらゆるデバイスで最適な表示を実現
              </p>
            </CardContent>
          </Card>
          <Card className="border-tertiary">
            <CardContent className="p-6">
              <div className="mb-4 text-accent">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">簡単導入</h3>
              <p>専門知識不要で、すぐにデジタルメニューを始められます</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
