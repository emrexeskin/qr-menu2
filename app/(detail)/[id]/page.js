import { Button } from "@/components/ui/button";
import Image from "next/image";
import image from "@/public/assets/food.png"
import { LuStar , LuClock3 } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";
import { Separator } from "@/components/ui/separator"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="flex flex-col text-[#E9E9E9]">
        <div className="flex flex-col py-12 px-6">
      <header className="flex items-center justify-between w-full mb-8">
      <Button className="bg-[#1A1A1A] w-14  h-14">
      <LuChevronLeft className="h-8 w-8"/>
        </Button>
      </header>
      
      <div className="flex items-center justify-center mb-20">
      <Carousel className="w-4/5 max-w-xs p-0">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Image src={image} width={256} height={256} alt="image" className=""></Image>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent p-0 text-[#E9E9E9] border-0 focus:bg-transparent focus:text-[#E9E9E9] disabled:bg-transparent disabled:text-[#E9E9E9]" />
      <CarouselNext className="bg-transparent p-0 text-[#E9E9E9] border-0 focus:bg-transparent focus:text-[#E9E9E9] disabled:bg-transparent disabled:text-[#E9E9E9]"  />
    </Carousel>
    </div>
    </div>
    <div className="flex flex-col rounded-t-3xl px-8 py-8 h-svh bg-gradient-to-b from-[#1A1A1A] to-[#11100f]">

            <div className="flex flex-col items-start justify-center gap-2 mb-8">
                <h1 className="font-normal tracking-tight font-normal text-tight text-2xl">Salmon Sushi Matcha</h1>
                <p className="text-sm opacity-70">Classic Japanese dish of raw fish</p>
            </div>


             
            <div className="flex items-center justify-around w-full py-3 rounded-lg bg-[#232323] opacity-70 h-14">
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
    </div>
  );
}
