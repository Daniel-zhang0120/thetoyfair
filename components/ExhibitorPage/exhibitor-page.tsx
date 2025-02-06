"use client";


import { Navbar } from "@/components/CommonComponent/Navbar/navbar";
import { Footer } from "@/components/CommonComponent/Footer/footer";
import HeroSection from "@/components/ExhibitorPage/HeroSection";
import BookComponent from "@/components/ExhibitorPage/BookComponent";
import ExhibitorWay from "@/components/ExhibitorPage/ExhibitorWay";
import GreenWave from "@/components/ExhibitorPage/GreenWave";
import PinkWave from "@/components/ExhibitorPage/PinkWave";
import PurpleWave from "@/components/ExhibitorPage/PurpleWave";

export function ExhibitorPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar className="w-full bg-transparent" />
      <HeroSection title={"Why should you exhibit?"}/>
      <PurpleWave color={"#9F70FD"} type={"exhibit"}/>
      {/* <HeroSection title={"What To Expect?"}/> */}
      <PinkWave color={"#E770C1"} title={"What To Expect?"}/>
      <ExhibitorWay />
      <GreenWave />
      <BookComponent />
      <Footer  />
    </div>
  );
}
