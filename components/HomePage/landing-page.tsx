"use client";
import { Navbar } from "@/components/CommonComponent/Navbar/navbar";
import { Footer } from "@/components/CommonComponent/Footer/footer";
import LinkBanner from "./Statics/LinkPage";
import IndustryPartners from "./Industry/IndustryPartners";
import TestimoCarousal from "./Carousel/TestimoCarousal";
import VideoSection from "./Video/VideoSection";
import HomeHeroSection from "./HomeHero/HomeHeroSection";

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
