import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import { LuStar , LuClock3 } from "react-icons/lu";
import image from "@/public/assets/food.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <main className="flex flex-col py-5 px-6 text-[#E9E9E9]">
      <header className="flex items-center justify-between w-full mb-8">
        <Image src="/assets/logo.png" width={64} height={64} alt="logo"></Image>
        <Button variant="outline"  size="icon" className="bg-[#181915]">
      <LuStar className="h-4 w-4" />
        </Button>
      </header>
      <div className="flex items-center justify-start text-3xl tracking-normal leading-tight font-normal mb-10">
        <p>Explore Menu And<br></br>Find Your Best Meal</p>
      </div>
      <Input type="search" placeholder="Search for something..." className="w-full h-12 mb-10 bg-[#181915] border-0 focus:ring-offset-transparent placeholder:italic">
      </Input>

      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-max mb-8"
    >
      <CarouselContent className="basis-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="!basis-auto">
            <Button className="w-24 h-11 bg-[#181915] selected:bg-[#1E1F1A]">{index+1}</Button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>



    <div>
           <div className="flex items-center justify-between mb-6">
               <h2 className="text-2xl font-normal tracking-tight">Recommended</h2>
               <Button variant="ghost" className="opacity-70">See All</Button>
           </div>

           <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-max mb-10"
    >
      <CarouselContent className="basis-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="!basis-auto">
            <div className="flex flex-col items-center justify-between px-4 pt-2 pb-4 gap-2 bg-[#181915] rounded-lg">
                <Image src={image} width={192} height={192} alt="image"></Image>
                <div className="flex items-center justify-between w-full text-[#E9E9E9]">
                      
                      <h3 className="font-normal tracking-tight font-medium text-lg">Salmon Sushi<br></br> Matcha</h3>
                      
                      <div className="flex items-center justify-center gap-1 ">
                      <p className="self-start">$</p>
                      <h3 className="font-normal tracking-tight font-semibold text-2xl">25</h3>
                      </div>
                      
                </div>

                <div className="flex items-center justify-evenly w-full py-3 h-9 rounded-lg bg-[#1E1F1A] opacity-70 mt-2">
                  <div className="flex items-center justify-between gap-1">
                    <LuStar></LuStar>
                    <p className="text-sm font-semibold">4.8</p>
                  </div>
                  <Separator orientation="vertical"/>
                  <div className="flex items-center justify-between gap-1">
                    <LuClock3></LuClock3>
                    <p className="text-sm font-semibold">10 dk</p>
                    
                  </div>
                </div>
                
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </div>
    </main>
  );
}
