"use client";

import { useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import HeroSection from "./ExhibitorPage/HeroSection";
import PurpleWave from "./ExhibitorPage/PurpleWave";
import PinkWave from "./ExhibitorPage/PinkWave";
import GreenWave from "./ExhibitorPage/GreenWave";
import BookComponent from "./ExhibitorPage/BookComponent";

export function VisitPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar className="w-full bg-transparent" />
      <HeroSection title={"Why you should visit?"} />
      <PurpleWave color={"#FB8383"} type={"visit"} />
      <PinkWave color={"#8CD3FB"} title={"A whole new experience"} />
      <HeroSection title={"a better way to visit"} />
      <GreenWave />
      <section className="relative bg-white" style={{ marginTop: "10px" }}>
        <div className="container mx-auto px-4">
          <Image
            src="/images/item_list.png"
            alt="Sample List"
            width={1600}
            height={4800}
            className="w-full"
            priority
          />
        </div>
      </section>
      <BookComponent />
      <Footer className="w-full" />
    </div>
  );
}
