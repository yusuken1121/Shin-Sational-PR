import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Support() {
  const supportItems = [
    "初期設定サポート",
    "運用サポート",
    "技術的なお問い合わせ対応",
    "アップデート情報の提供",
  ];

  return (
    <section className="flex items-center justify-center w-full h-full py-24 bg-primary">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Support Contents
        </h2>
        <Card className="max-w-lg mx-auto bg-zinc-800 border-zinc-700">
          <CardContent className="p-6">
            <ul className="space-y-4">
              {supportItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
