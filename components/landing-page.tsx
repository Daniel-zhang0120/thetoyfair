"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import LinkBanner from "./HomePage/Statics/LinkPage";
import IndustryPartners from "./HomePage/Industry/IndustryPartners";
import TestimoCarousal from "./HomePage/Carousel/TestimoCarousal";
import VideoSection from "./HomePage/Video/VideoSection";
import HomeHeroSection from "./HomePage/HomeHero/HomeHeroSection";

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F0FF]">
      <Navbar className="w-full bg-transparent" />
      <HomeHeroSection />
      <VideoSection />
      <IndustryPartners />
      <TestimoCarousal />
      <LinkBanner />
      <Footer className="w-full" />
    </div>
  );
}
