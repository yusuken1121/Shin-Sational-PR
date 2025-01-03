import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";

const laptopDesigns = [
  { title: "Home", img: "/Home/Home.jpg", entireImg: "/Home/Home_Entire.jpg" },
  { title: "Menu", img: "/Menu/Menu.jpg", entireImg: "/Menu/Menu_Entire.jpg" },
  {
    title: "Contact Us",
    img: "/Contact/Contact.jpg",
    entireImg: "/Contact/Contact_Entire.jpg",
  },
];
const mobileDesigns = [
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
                      <Dialog>
                        <DialogTrigger className="w-full h-full" asChild>
                          <Card className="border border-none">
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
                        </DialogTrigger>
                        <DialogContent className="flex flex-col items-center justify-center h-4/5 overflow-y-scroll bg-secondary">
                          <DialogHeader className="hidden">
                            <DialogTitle>{design.title}</DialogTitle>
                          </DialogHeader>
                          <div className="w-full h-full">
                            <Image
                              src={design.entireImg}
                              alt={design.title}
                              unoptimized={true}
                              width={500}
                              height={800}
                              className="object-cover "
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
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
                  <CarouselItem key={index} className="pl-1">
                    <h4 className="flex items-center justify-center">
                      {design.title}
                    </h4>
                    <div className="flex justify-center items-center p-1">
                      <Card className="w-[56%] md:max-w-[350px] xl:max-w-[400px]">
                        <AspectRatio ratio={9 / 16}>
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
