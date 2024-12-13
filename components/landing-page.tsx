'use client'

import Image from "next/image"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { PlayCircle, PauseCircle, VolumeX, Volume2, Maximize2 } from "lucide-react"
import { Navbar } from "@/components/navbar" 
import { Footer } from "@/components/footer" 
import Link from 'next/link';

export function LandingPageComponent() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)

  const testimonials = [
    {
      quote: "The perfect platform to discover the next big trends in toys. We found amazing manufacturing partners!The perfect platform to discover the next big trends in toys. We found amazing manufacturing partners!The perfect platform to discover the next big trends in toys. We found amazing manufacturing partners!The perfect platform to discover the next big trends in toys. We found amazing manufacturing partners!The perfect platform to discover the next big trends in toys. We found amazing manufacturing partners!",
      author: "Emily S., Toy Designer"
    },
    {
      quote: "Connected with major retailers and secured distribution deals. Worth every penny!",
      author: "David L., Indie Toy Creator"
    },
    {
      quote: "The virtual showroom features made it easy to showcase our interactive toys.",
      author: "Rachel K., Educational Toys Director"
    }
  ]

  const stats = [
    { 
      number: "4,000+", 
      label: "Visitors",
      subText1: "Anticipated visitors",
      subText2: "Register now >",
      link: "/visitors"
    },
    { 
      number: "200+", 
      label: "Brands",
      subText1: "Leading manufacturers",
      subText2: "See who's exhibiting >",
      link: "/brands"
    },
    { 
      number: "30+", 
      label: "Days",
      subText1: "Of virtual networking",
      subText2: "See the schedule >",
      link: "/schedule"
    },
    { 
      number: "24/7", 
      label: "Convenience",
      subText1: "Access anytime",
      subText2: "How to visit",
      link: "/access"
    }
  ]

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8EF]">
      {/*
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet" />
      </Head>
      */}
      <Navbar className="w-full bg-transparent" /> {/* Made navbar background transparent */}

      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
            src="/images/TGFUSA.png"
            alt="The gift fair USA"
            fill
            className="object-cover brightness-100"
            priority
            quality={100}
            sizes="100vw"
          />
      {/*
        <video
            src="/videos/homeHero_lowQuality copy.mp4" // Update with your video source
            className="object-cover w-full h-full"
            autoPlay
            loop
            muted
            playsInline
          />
          */}
        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start text-white text-center" style={{ width: '800px', marginLeft: '100px' }}>
            <p className="text-white text-lg md:text-[30px] leading-normal tracking-[0px] font-poppins font-bold animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]" style={{ alignSelf: 'flex-start', position: 'relative', top: '500px' }}>
              12 January 2026 - 28 February 2026
            </p>
            <h1 className="text-4xl md:text-[96px] leading-tight md:leading-[93.5px] tracking-[-2px] md:tracking-[-8px] font-normal mb-4 font-tilt-warp text-right" style={{ width: '100%', marginLeft: '700px' }}>
              <div className="inline-block animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]" style={{ fontSize: '96px', lineHeight: '96px', letterSpacing: '-0.08em' }}>
                Bringing you the 
              </div>
              <span className="inline-block animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]" style={{ fontSize: '96px', lineHeight: '96px', letterSpacing: '-0.08em' }}>
                best the US has to offer 
              </span>
            </h1>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.8s]" style={{ marginTop: '50px' }}>
              Join the Fun!
            </button>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-[1300px] mx-auto px-4 py-20">
        <div className="aspect-video relative rounded-xl overflow-hidden">
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
              onLoadedData={() => {
                videoRef.current?.play();
                setIsPlaying(true);
              }}
              onClick={() => {
                if (videoRef.current?.paused) {
                  videoRef.current?.play();
                  setIsPlaying(true);
                } else {
                  videoRef.current?.pause();
                  setIsPlaying(false);
                }
              }}
            />
            
            {/* Video Controls Overlay - appears on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Progress Bar */}
              <input 
                type="range"
                className="w-full h-1 bg-gray-400 rounded-lg appearance-none cursor-pointer"
                value={(videoRef.current?.currentTime || 0) / (videoRef.current?.duration || 1) * 100}
                onChange={(e) => {
                  if (videoRef.current) {
                    const time = (videoRef.current.duration * parseInt(e.target.value)) / 100;
                    videoRef.current.currentTime = time;
                  }
                }}
              />
              
              {/* Controls Row */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-4">
                  {/* Play/Pause */}
                  <button onClick={() => {
                    if (videoRef.current?.paused) {
                      videoRef.current?.play();
                      setIsPlaying(true);
                    } else {
                      videoRef.current?.pause();
                      setIsPlaying(false);
                    }
                  }}>
                    {isPlaying ? 
                      <PauseCircle size={24} className="text-white" /> : 
                      <PlayCircle size={24} className="text-white" />
                    }
                  </button>
                  
                  {/* Volume Control */}
                  <button onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.muted = !videoRef.current.muted;
                      setIsMuted(prev => !prev);
                    }
                  }}>
                    {isMuted ? 
                      <VolumeX size={24} className="text-white" /> : 
                      <Volume2 size={24} className="text-white" />
                    }
                  </button>
                  
                  {/* Time Display */}
                  <span className="text-white text-sm">
                    {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(videoRef.current?.duration || 0)}
                  </span>
                </div>
                
                {/* Fullscreen Button */}
                <button onClick={() => {
                  if (videoRef.current) {
                    if (document.fullscreenElement) {
                      document.exitFullscreen();
                    } else {
                      videoRef.current.requestFullscreen();
                    }
                  }
                }}>
                  <Maximize2 size={24} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Partners Section */}
      <section className="py-20 bg-[#FFF8EF]">
        <div className="w-full max-w-[1300px] mx-auto px-4">
          <h2 className="text-3xl md:text-[80px] leading-tight md:leading-[90px] tracking-[-2px] md:tracking-[-8px] text-center mb-12 font-tilt-warp text-[#287838]">
            Be at the frontier of fun - the toy industry is evolving 
          </h2>
          <h3 className="text-xl md:text-[30px] leading-normal font-semibold text-center mb-8 text-[#F249CD]">
            Industry Partners
          </h3>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-[0px] max-w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
                {[
                  { src: "/images/Partner 1.png", alt: "Partner 1" },
                  { src: "/images/Partner 2.png", alt: "Partner 2" },
                  { src: "/images/Partner 3.png", alt: "Partner 3" },
                  { src: "/images/Partner 4.png", alt: "Partner 4" },
                  { src: "/images/Partner 5.png", alt: "Partner 5" },
                  { src: "/images/Partner 6.png", alt: "Partner 6" },
                  { src: "/images/Partner 7.png", alt: "Partner 7" },
                ].map((partner) => (
                  <div key={partner.alt} className="h-[60px] md:h-[80px] w-[120px] md:w-[160px] relative flex items-center justify-center">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      className="object-contain max-h-[60px] md:max-h-[80px] w-auto"
                      width={160}
                      height={80}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-[#FFF8EF]">
        <div className="container mx-auto px-4">
          <h3 className="text-xl md:text-[30px] leading-normal font-bold text-center mb-8 text-[#F249CD]">
            What are our exhibitors saying...
          </h3>
          <Carousel className="max-w-[90vw] md:max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-8 bg-[#FFF8EF]">
                    <blockquote className="text-xl text-center">
                      `&quot;`{testimonial.quote} `&quot;`
                      <footer className="mt-4 text-muted-foreground">
                        {testimonial.author}
                      </footer>
                    </blockquote>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-[#FFF8EF]">
        <div className="relative w-full h-auto md:h-[360px] py-12 md:py-0 flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/Gradient Background.png"
              alt="Statistics background"
              fill
              className="object-cover brightness-110"
              quality={100}
              sizes="100vw"
            />
            {/* Lighter overlay */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          {/* Stats content */}
          <div className="relative z-10 w-full">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4 h-[90px] md:h-[120px] flex items-center justify-center">
                      <Image
                        src={
                          index === 0 ? "/images/Visitor_icon.png" :
                          index === 1 ? "/images/Brands_icon.png" :
                          index === 2 ? "/images/globe_icon.png" :
                          "/images/convenice_icon_svg.svg"
                        }
                        alt={`${stat.label} icon`}
                        width={110}
                        height={120}
                        className="object-contain h-[90px] md:h-[120px] w-auto"
                      />
                    </div>
                    <div className="text-3xl md:text-[47px] leading-tight md:leading-[56.4px] tracking-[-1px] md:tracking-[-2.35px] font-bold font-poppins text-[#212121]">
                      {stat.number}
                    </div>
                    <div className="text-xl md:text-[30px] leading-tight md:leading-[42px] tracking-[-0.75px] md:tracking-[-1.5px] font-bold font-poppins text-[#212121]">
                      {stat.label}
                    </div>
                    <div className="text-sm md:text-base leading-tight md:leading-[24px] font-normal font-poppins text-[#212121] mt-1">
                      {stat.subText1}
                    </div>
                    <Link 
                      href={stat.link}
                      className="text-sm md:text-base leading-tight md:leading-[24px] font-bold text-[#FF54FB] mt-4 block hover:text-[#FF54FB]/80 transition-colors"
                    >
                      {stat.subText2}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer className="w-full" /> {/* Made footer background transparent */}
    </div>
  )
}