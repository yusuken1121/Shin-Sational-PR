import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section className="flex items-center justify-center w-full h-full py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pricing
        </h2>
        <Card className="max-w-lg mx-auto bg-primary border-zinc-700">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Support Plan</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center mb-2">
              <span className="text-2xl font-bold mb-2 line-through">
                $10/month
              </span>
              <div className="text-4xl font-bold text-accent mb-2">
                {/* 取り消し線を追加 */}
                $0/month
              </div>
              <div className="text-zinc-400">First month free</div>
            </div>
            <div className="flex items-center justify-center w-full">
              <ul className="space-y-4 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-2" />
                  <span>Free installation</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-2" />
                  <span>24-hour technical support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-2" />
                  <span>Free updates</span>
                </li>
              </ul>
            </div>
            <Button variant="default" className="w-full">
              Get started now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
