import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const laptopDesigns = [
  { img: "design1.jpg" },
  { img: "design1.jpg" },
  { img: "design1.jpg" },
  { img: "design1.jpg" },
  { img: "design1.jpg" },
];
const mobileDesigns = [
  { img: "design1.jpg" },
  { img: "design1.jpg" },
  { img: "design1.jpg" },
  { img: "design1.jpg" },
  { img: "design1.jpg" },
];

export function ProductDesign() {
  return (
    <section className="flex items-center justify-center w-full h-full py-24 bg-primary">
      <div className="w-full px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Designs
        </h2>
        <div className="flex items-center justify-center w-full">
          {/* ラップトップ版 */}
          <Carousel className="w-4/5">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-2/3 lg:basis-4/5"
                >
                  <div className="p-1">
                    <Card>
                      <AspectRatio ratio={16 / 9}>
                        <CardContent className="flex w-full h-full items-center justify-center p-6">
                          <span className="text-2xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
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
    </section>
  );
}
