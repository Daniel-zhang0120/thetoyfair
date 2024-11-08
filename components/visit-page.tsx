'use client'

import { useRef} from "react"
import Image from "next/image"
import { PlayCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PartnersCarousel } from "./partners-carousel"

export function VisitPageComponent() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
        
        <div className="container mx-auto px-4 relative flex items-center justify-between" 
          style={{ 
            zIndex: 10, 
            marginTop: '300px',
            maxWidth: '1400px',
            height: '918px',
            width: '100%'
          }}>
          <div className="flex-1 px-8" style={{ marginTop: '-330px' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find fabulous recognized brands as well as the hottest newcomers at the <span className="text-[#00A651]">UK`&apos;`s first online Toy</span> trade show.
            </h1>
            
            <ul className="list-disc pl-6 mb-8 text-white" style={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: 600 }}>
              <li className="mb-4">
                For the first time trade shows work around you
                <p className="text-base font-normal mt-1">No need to re-arrange your schedule or arrange cover. Come and go as you please, whenever it suits you.</p>
              </li>
              <li className="mb-4">
                Reduce the hassle and cost
                <p className="text-base font-normal mt-1">No need to re-arrange your schedule or arrange cover. Come and go as you please, whenever it suits you.</p>
              </li>
              <li className="mb-4">
                Get more information - faster
                <p className="text-base font-normal mt-1">No need to re-arrange your schedule or arrange cover. Come and go as you please, whenever it suits you.</p>
              </li>
            </ul>

            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
              Register Now
            </button>
          </div>
          <div className="flex-1 relative h-[800px]" style={{ marginTop: '-250px' }}>
            <Image
              src="/images/exhibitor_sample.png"
              alt="Trade Show Floor"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Empty space div */}
      <div className="h-[500px]"></div>

      {/* Product Categories with Wave_Blue */}
      <section className="relative py-20">
        {/* Wave_Blue background */}
        <div className="absolute inset-0 bottom-[-400px] overflow-visible pointer-events-none" style={{ zIndex: 0 }}>
          <div className="pt-56 -mt-[800px]">
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
        
        <div className="container mx-auto px-4 relative" style={{ zIndex: 1, marginTop: '-400px' }}>
          <PartnersCarousel />
          
          {/* Video Section */}
          <div className="w-[1300px] h-[800px] mx-auto rounded-xl overflow-hidden mt-20 relative">
            <div className="relative h-full group">
              <video
                ref={videoRef}
                src="/videos/Xpo720p.mp4"
                className="object-cover w-full h-full rounded-xl cursor-pointer"
                loop
                playsInline
                preload="auto"
                muted
                autoPlay
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = !videoRef.current.muted;
                  }
                }}
              />
            </div>
          </div>
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

      <Footer className="w-full" />
    </div>
  )
}