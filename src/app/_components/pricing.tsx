import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section className="py-24 bg-primary">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          料金プラン
        </h2>
        <Card className="max-w-lg mx-auto bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              サポートプラン
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold mb-2">¥0</div>
              <div className="text-zinc-400">初月無料</div>
            </div>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-2" />
                <span>無料インストール</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-2" />
                <span>24時間テクニカルサポート</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-2" />
                <span>アップデート無料</span>
              </li>
            </ul>
            <Button className="w-full bg-accent hover:bg-accent/60 text-black">
              今すぐ始める
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
