"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from 'embla-carousel-autoplay'

const partners = [
  {
    name: "Partner 1",
    image: "/images/Partner 1.png"
  },
  {
    name: "Partner 2",
    image: "/images/Partner 2.png"
  },
  {
    name: "Partner 3",
    image: "/images/Partner 3.png"
  },
  {
    name: "Partner 4",
    image: "/images/Partner 4.png"
  },
  {
    name: "Partner 5",
    image: "/images/Partner 5.png"
  },
  {
    name: "Partner 6",
    image: "/images/Partner 6.png"
  }
]

export function PartnersCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      skipSnaps: true,
      dragFree: true,
      containScroll: false,
    },
    [
      Autoplay({
        delay: 1000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playOnInit: true,
      })
    ]
  )

  const doubledPartners = [...partners, ...partners]

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 md:gap-5 px-2 md:px-5">
          {doubledPartners.map((partner, index) => (
            <div 
              key={index} 
              className="flex-[0_0_auto]"
            >
              <div className="flex items-center justify-center">
                <div className="h-[120px] w-[120px] md:h-[202px] md:w-[202px] relative bg-white rounded-lg shadow-sm overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain p-2 md:p-4"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 