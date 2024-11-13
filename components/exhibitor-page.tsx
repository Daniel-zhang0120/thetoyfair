'use client'

import { useRef} from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PartnersCarousel } from "./partners-carousel"
import { Button } from "@/components/ui/button"

export function ExhibitorPageComponent() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar className="w-full bg-transparent" />

      {/* Hero Section with Wave_Red */}
      <section className="relative py-20 bg-white pt-100">
        {/* Text positioned above Wave_Red */}
        <div className="absolute inset-0" style={{ zIndex: 1, top: '90px', left: '560px' }}>
          <div style={{ bottom: '200px' }}>
            <h1
              className="font-poppins font-extrabold"
              style={{
                fontSize: '80px',
                letterSpacing: '-4.25px',
                lineHeight: '90px',
                background: 'linear-gradient(90deg, #F249CD 24%, #5D43FF 49%, #9747FF 85%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Why should you visit?
            </h1>
          </div>
        </div>

        {/* Wave_Red Section */}
        <section className="relative">
          {/* First Wave_Red background */}
          <div className="absolute inset-0 top-[-100px] overflow-visible pointer-events-none" style={{ zIndex: 0 }}>
            <div className="pt-56">
              <Image
                src="/images/Wave_Purple.png"
                alt="Purple Wave Background"
                width={1920}
                height={918}
                className="w-full"
                priority
              />
            </div>
          </div>

          {/* Second Wave_Red background with padding */}
          <div className="absolute inset-0 top-[-100px] overflow-visible pointer-events-none" style={{ zIndex: 0, paddingTop: '150px'}}>
            <div className="pt-56">
              <Image
                src="/images/Wave_Purple.png"
                alt="Purple Wave Background"
                width={1920}
                height={918}
                className="w-full"
                priority
              />
            </div>
          </div>
          {/* Spacer element to add space below the wave */}
          <div style={{ height: '300px' }}></div>
        </section>

        <div className="container mx-auto px-4 relative flex items-center justify-between" 
          style={{ 
            zIndex: 10, 
            marginTop: '200px',
            maxWidth: '1400px',
            height: '918px',
            width: '100%'
          }}>
          <div className="flex-1 px-8" style={{ marginTop: '-600px', maxWidth: '600px' }}>
            <h1 className="font-bold mb-6" style={{ fontSize: '40px', letterSpacing: '-2.5px', lineHeight: '53px', fontWeight: '900' }}>
              Find fabulous recognized brands as well as the hottest newcomers at the <span className="text-[#00A651]">UK&apos;s first online Toy</span> trade show.
            </h1>
            
            <ol className="list-decimal pl-6 mb-8 text-white" style={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: 600, lineHeight: '30px' }}>
              <li className="mb-4">
                <div style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '400px' }}>
                  For the first time trade shows work around you
                </div>
                <p className="mt-1" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400', maxWidth: '500px', marginLeft: '0', fontFamily: 'Poppins' }}>
                  No need to re-arrange your schedule or arrange cover. Come and go as you please, whenever it suits you.
                </p>
                <div style={{ width: '300px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)', marginTop: '10px' }}></div>
              </li>
              <li className="mb-4">
                <div style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '400px' }}>
                  Reduce the hassle and cost
                </div>
                <p className="mt-1" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400', maxWidth: '500px', marginLeft: '0', fontFamily: 'Poppins' }}>
                  Say goodbye to cramped commuter trains, car park shuttles and expensive hotels.
                </p>
                <div style={{ width: '300px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)', marginTop: '10px' }}></div>
              </li>
              <li className="mb-4">
                <div style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '400px' }}>
                  Get more information - faster
                </div>
                <p className="mt-1" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400', maxWidth: '500px', marginLeft: '0', fontFamily: 'Poppins' }}>
                  Find a larger choice of exhibitors across more sectors of your market in a fraction of the time - find what you want faster.
                </p>
                <div style={{ width: '300px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)', marginTop: '10px' }}></div>
              </li>
            </ol>

            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
              Register Now
            </button>
          </div>
          <div className="flex-1 relative" style={{ marginTop: '-550px', width: '583px', height: '652px' }}>
            <Image
              src="/images/exhibitor_sample2.png"
              alt="Trade Show Floor"
              width={583}
              height={652}
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Empty space div */}
      <div className="h-[500px] bg-white"></div>

      {/* Container for the entire Pink Section */}
      <div className="relative" style={{ marginTop: '-200px' }}>
        {/* Text positioned above Wave_Pink */}
        <section className="relative py-20 bg-white pt-100">
          <div className="absolute inset-0" style={{ zIndex: 1, top: '-610px', left: '650px' }}>
            <div style={{ bottom: '200px' }}>
              <h1
                className="font-poppins font-extrabold"
                style={{
                  fontSize: '80px',
                  letterSpacing: '-4.25px',
                  lineHeight: '90px',
                  background: 'linear-gradient(90deg, #F249CD 24%, #5D43FF 49%, #9747FF 85%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                What to expect
              </h1>
            </div>
          </div>
        </section>

        {/* Wave_Pink Section */}
        <section className="relative">
          {/* First Wave_Pink background */}
          <div className="absolute inset-0 top-[-800px] overflow-visible pointer-events-none" style={{ zIndex: 0 }}>
            <div className="pt-56">
              <Image
                src="/images/Wave_Pink.png"
                alt="Pink Wave Background"
                width={1920}
                height={918}
                className="w-full"
                priority
              />
            </div>
          </div>

          {/* Second Wave_Pink background with padding, positioned 110px below the first */}
          <div className="absolute inset-0 top-[-600px] overflow-visible pointer-events-none" style={{ zIndex: 0, paddingTop: '150px', paddingBottom: '100px' }}>
            <div className="pt-56">
              <Image
                src="/images/Wave_Pink.png"
                alt="Pink Wave Background"
                width={1920}
                height={918}
                className="w-full"
                priority
              />
            </div>
          </div>
          {/* Spacer element to add space below the wave */}
          <div style={{ height: '500px' }}></div>
        </section>
      </div>

      <div className="container mx-auto px-4 relative" style={{ zIndex: 1, marginTop: '-900px' }}>
        <PartnersCarousel />
        
        {/* Video Section */}
        <div className="w-[1300px] h-[800px] mx-auto rounded-xl overflow-hidden mt-5 relative">
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

       {/* Green Wave Section with Content */}
       <section className="relative py-20 bg-white" style={{ paddingTop: '800px' }}>
        {/* Content Section */}
        <div className="container mx-auto px-4 relative" 
          style={{ 
            zIndex: 1, 
            marginTop: '-470px',
            maxWidth: '1400px',
            width: '100%',
            paddingRight: '200px'
          }}>
          {/* Title spanning full width */}
          <h2 className="text-[64px] leading-[56px] tracking-[-4.25px] font-bold mb-10 text-white w-full font-poppins" 
            style={{ marginTop: '130px', marginLeft: '100px' }}>
            ...and it&apos;s better for the <span className="text-[64px]">environment</span>
          </h2>
          
          {/* Content flex container */}
          <div className="flex items-center justify-between" style={{ marginTop: '-130px' }}>
            <div className="flex-1 px-8" style={{ maxWidth: '700px', marginLeft: '50px', marginTop: '-110px' }}>
              <p className="text-[20px] leading-[1.5] tracking-normal font-medium text-white font-poppins">
                Feel good about drastically reducing your carbon footprint by eliminating the scandalous waste of traditional trade shows.<br /><br />
                No more single use stands. No reckless waste bound for landfill. No more emission-heavy flights and travel.
              </p>
            </div>
            <div className="flex-1 relative h-[800px]" style={{ marginTop: '-120px' }}>
              <Image
                src="/images/enviorment.png"
                alt="Environmental Impact"
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Wave_Green background */}
        <div className="absolute inset-0 bottom-[-400px] overflow-visible pointer-events-none" style={{ zIndex: 0, paddingTop: '700px' }}>
          <div className="pt-56 -mt-[700px]">
            <Image
              src="/images/Wave_Green.png"
              alt="Green Wave Background"
              width={1920}
              height={918}
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Duplicate "Why should you visit?" Text Below Green Section */}
      <section className="relative py-20 bg-white pt-100">
        <div className="absolute inset-0" style={{ zIndex: 1, top: '90px', left: '560px' }}>
          <div style={{ bottom: '200px' }}>
            <h1
              className="font-poppins font-extrabold"
              style={{
                fontSize: '80px',
                letterSpacing: '-4.25px',
                lineHeight: '90px',
                background: 'linear-gradient(90deg, #F249CD 24%, #5D43FF 49%, #9747FF 85%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Why should you visit?
            </h1>
          </div>
        </div>

        {/* Image with increased padding below the text */}
        <div className="mt-[200px] flex justify-center">
          <Image
            src="/images/exhibiting_benefits.png"
            alt="Exhibiting Benefits"
            width={1200}
            height={0} // Set height to 0 to allow it to hug the content
            className="w-[1200px] h-auto" // Ensure the image maintains aspect ratio
            priority
          />
        </div>
      </section>

      {/* Empty space div */}
      <div className="h-[100px] bg-white"></div>

      {/* Join Us Text Section */}
      <section className="relative bg-white" style={{ marginTop: '100px' }}>
        <div 
          className="mx-auto text-center flex flex-col items-center"
          style={{ 
            width: '1200px',
            minHeight: '500px', // Adjusted height to ensure text fits
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h2 
            className="font-poppins font-extrabold"
            style={{ 
              fontSize: '80px',
              letterSpacing: '0',
              lineHeight: '1.2', // Adjusted line height for better fit
              background: 'linear-gradient(90deg, #9747FF 0%, #349EFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            come join us and be the change
          </h2>
          <Button 
            variant="outline" 
            className="mt-[30px] border-[#3D9BE9] text-[#3D9BE9] hover:bg-[#3D9BE9]"
          >
            Buy Ticket
          </Button>
        </div>
      </section>

      {/* Add spacing before Footer */}
      <div className="h-[100px] bg-white"></div>

      <Footer className="w-full" />
    </div>
  )
}