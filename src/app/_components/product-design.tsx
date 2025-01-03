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
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Designs
        </h2>
        <div className="flex items-center justify-center">
          <Carousel className="w-4/5 max-w-sm bg-red-200">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
