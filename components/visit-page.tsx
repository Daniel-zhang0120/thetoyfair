'use client'

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { PlayCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export function VisitPageComponent() {
  const categories = [
    {
      name: "Team Sports Equipment",
      image: "/images/Partner 1.png"
    },
    {
      name: "Fitness Gear",
      image: "/images/Partner 2.png"
    },
    {
      name: "Sports Apparel",
      image: "/images/Partner 3.png"
    },
    {
      name: "Training Technology",
      image: "/images/Partner 4.png"
    },
    {
      name: "Sports Nutrition",
      image: "/images/Partner 5.png"
    },
    {
      name: "Fan Merchandise",
      image: "/images/Partner 6.png"
    }
  ]

  const brands = [
    {
      name: "Brand 1",
      logo: "/images/Partner 1.png"
    },
    {
      name: "Brand 2",
      logo: "/images/Partner 2.png"
    },
    {
      name: "Brand 3",
      logo: "/images/Partner 3.png"
    },
    {
      name: "Brand 4",
      logo: "/images/Partner 4.png"
    },
    {
      name: "Brand 5",
      logo: "/images/Partner 5.png"
    },
    {
      name: "Brand 6",
      logo: "/images/Partner 6.png"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#EDFFF0]">
      <Navbar className="w-full bg-transparent" />

      {/* Hero Section with Wave_Blue */}
      <section className="relative py-20 bg-muted pt-100">
        {/* Wave_Blue background */}
        <div className="absolute inset-0 bottom-[-400px] overflow-visible pointer-events-none" style={{ zIndex: 0 }}>
          <div className="pt-56">
            <Image
              src="/images/Wave_Red.png"
              alt="Red Wave Background"
              width={1920}
              height={918}
              className="w-full"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative flex items-center justify-between" style={{ zIndex: 10, marginTop: '300px' }}>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why You Should Visit
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the latest innovations in sports equipment, connect with industry leaders, and stay ahead of market trends.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
              Register Now
            </button>
          </div>
          <div className="flex-1 relative aspect-video">
            <Image
              src="/images/exhibitor_sample.png"
              alt="Trade Show Floor"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Empty space div */}
      <div className="h-[500px]"></div>

      {/* Product Categories with Wave_Red */}
      <section className="relative py-20">
        {/* Wave_Red background */}
        <div className="absolute inset-0 bottom-[-400px] overflow-visible pointer-events-none" style={{ zIndex: 0 }}>
          <div className="pt-56 mt-10">
            <Image
              src="/images/Wave_Blue.png"
              alt="Blue Wave Background"
              width={1920}
              height={918}
              className="w-full"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative" style={{ zIndex: 1 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Product Categories
          </h2>
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {categories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <Card className="p-4">
                    <div className="aspect-square relative mb-4">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center">
                      {category.name}
                    </h3>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Show Video */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experience the Show
          </h2>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/90 text-primary-foreground hover:bg-primary transition-colors">
                <PlayCircle className="w-12 h-12" />
              </button>
            </div>
            <Image
              src="/images/Partner 1.png"
              alt="Video thumbnail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="aspect-square bg-muted rounded-lg flex items-center justify-center text-xl font-semibold"
              >
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer className="w-full" />
    </div>
  )
}