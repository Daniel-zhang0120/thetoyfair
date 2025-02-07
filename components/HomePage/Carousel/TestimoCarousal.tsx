import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const TestimoCarousal = () => {
  const testimonials = [
    {
      quote:
        "The perfect platform to discover the next big trends in toys. We found amazing manufacturing partners!The perfect platform to discover the next big trends in toys. We found amazing manufacturing partners!The perfect platform to discover the next big trends in toys. We found amazing manufacturing partners!The perfect platform to discover the next big trends in toys. We found amazing manufacturing partners!The perfect platform to discover the next big trends in toys. We found amazing manufacturing partners!",
      author: "Emily S., Toy Designer",
    },
    {
      quote:
        "Connected with major retailers and secured distribution deals. Worth every penny!",
      author: "David L., Indie Toy Creator",
    },
    {
      quote:
        "The virtual showroom features made it easy to showcase our interactive toys.",
      author: "Rachel K., Educational Toys Director",
    },
  ];
  return (
    <section className="py-20 bg-[#EDFFF0]">
      <div className="container mx-auto px-4">
        <h3 className="text-xl md:text-[30px] leading-normal font-bold text-center mb-8 text-[#F249CD]">
          What are our exhibitors saying...
        </h3>
        <div className="relative w-full">
          {/* Added relative wrapper for carousel controls */}
          <Carousel className="max-w-[95vw] md:max-w-4xl mx-auto">
            {/* Adjusted max-w */}
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-6 md:p-8 bg-[#EDFFF0] rounded-lg">
                    {/* Added rounded-lg and responsive padding */}
                    <blockquote className="text-base md:text-xl text-center pl-5 pr-5 sm:pl-5 sm:pr-5">
                      {/* Adjusted text size */}
                      &quot;{testimonial.quote}&quot;
                      <footer className="mt-4 text-center text-muted-foreground">
                        {/* Added text-center */}
                        {testimonial.author}
                      </footer>
                    </blockquote>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Left button - stays within screen */}
            <div className="absolute top-1/2 left-[9%] sm:left-9 transform -translate-y-1/2 z-10 carousel-btn-left">
              <CarouselPrevious className="p-3 rounded-full bg-white/50 hover:bg-white/70 shadow-md " />
            </div>

            {/* Right button - stays within screen */}
            <div className="absolute top-1/2 right-[9%] sm:right-9 transform -translate-y-1/2 z-10 carousel-btn-right">
              <CarouselNext className="p-3 rounded-full bg-white/50 hover:bg-white/70 shadow-md " />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimoCarousal;
