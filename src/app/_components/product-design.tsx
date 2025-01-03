import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const laptopDesigns = [
  { title: "menu", img: "design1.jpg" },
  { title: "menu", img: "design1.jpg" },
  { title: "homepage", img: "design1.jpg" },
  { title: "homepage", img: "design1.jpg" },
  { title: "homepage", img: "design1.jpg" },
];
const mobileDesigns = [
  { title: "homepage", img: "design1.jpg" },
  { title: "homepage", img: "design1.jpg" },
  { title: "homepage", img: "design1.jpg" },
  { title: "homepage", img: "design1.jpg" },
  { title: "homepage", img: "design1.jpg" },
];

export function ProductDesign() {
  return (
    <section className="flex items-center justify-center w-full h-full py-24 bg-primary">
      <div className="w-full px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Designs
        </h2>
        <div className="flex flex-col items-center justify-center space-y-10 w-full">
          {/* ラップトップ版 */}
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <h3 className="text-xl text-accent">Laptop</h3>
            <Carousel className="w-4/5">
              <CarouselContent className="-ml-1">
                {laptopDesigns.map((design, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-2/3 lg:basis-4/5"
                  >
                    <h4 className="flex items-center justify-center">
                      {design.title}
                    </h4>
                    <div className="p-1">
                      <Card>
                        <AspectRatio ratio={16 / 9}>
                          {/* 画像を表示したい場合は以下のように img タグを使用 */}
                          <Image
                            src={design.img}
                            alt={design.title}
                            fill={true}
                            className="w-full h-full object-cover"
                            unoptimized={true}
                          />
                        </AspectRatio>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious variant="default" />
              <CarouselNext variant="default" />
            </Carousel>
          </div>

          {/* 携帯版 */}
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <h3 className="text-xl text-accent">Mobile</h3>
            <Carousel className="w-4/5">
              <CarouselContent className="-ml-1">
                {mobileDesigns.map((design, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-2/3 lg:basis-4/5"
                  >
                    <h4 className="flex items-center justify-center">
                      {design.title}
                    </h4>
                    <div className="flex justify-center items-center p-1">
                      <Card className="w-[56%]">
                        <AspectRatio ratio={9 / 16}>
                          {/* 画像を表示したい場合は以下のように img タグを使用 */}
                          <Image
                            src={design.img}
                            alt={design.title}
                            fill={true}
                            className="w-full h-full object-cover"
                            unoptimized={true}
                          />
                        </AspectRatio>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious variant="default" />
              <CarouselNext variant="default" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
