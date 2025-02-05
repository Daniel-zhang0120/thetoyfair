"use client";

import { useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/ExhibitorPage/HeroSection";
import BookComponent from "@/components/ExhibitorPage/BookComponent";
import ExhibitorWay from "@/components/ExhibitorPage/ExhibitorWay";
import GreenWave from "@/components/ExhibitorPage/GreenWave";
import PinkWave from "@/components/ExhibitorPage/PinkWave";
import PurpleWave from "@/components/ExhibitorPage/PurpleWave";
import PageHead from "./CommonComponent/PageHead/PageHead";

export function ExhibitorPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar className="w-full bg-transparent" />
      <HeroSection title={"Why should you exhibit?"}/>
      <PurpleWave />
      {/* <HeroSection title={"What To Expect?"}/> */}
      <PinkWave />
      <ExhibitorWay />
      <GreenWave />
      <BookComponent />
      <Footer  />
    </div>
  );
}
