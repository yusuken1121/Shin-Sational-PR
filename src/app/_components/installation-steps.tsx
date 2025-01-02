import { Card, CardContent } from "@/components/ui/card";

export function InstallationSteps() {
  const steps = [
    {
      number: 1,
      title: "サインアップ",
      description: "アカウントを作成して始めましょう",
    },
    {
      number: 2,
      title: "Notionと連携",
      description: "既存のメニューデータを簡単に移行",
    },
    {
      number: 3,
      title: "QRコード生成",
      description: "自動でQRコードを生成",
    },
    {
      number: 4,
      title: "運用開始",
      description: "すぐにお客様へ提供可能",
    },
  ];

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          導入手順
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#C8A97E] text-black flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
