'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const brands = [
  {
    type: "Premium",
    standNumber: "Stand #101",
    title: "Brand 1",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 1",
    jobTitle: "CEO",
  },
  {
    type: "Standard",
    standNumber: "Stand #102",
    title: "Brand 2",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 2",
    jobTitle: "Marketing Manager",
  },
  {
    type: "Economy",
    standNumber: "Stand #103",
    title: "Brand 3",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 3",
    jobTitle: "Sales Director",
  },
  {
    type: "Premium",
    standNumber: "Stand #104",
    title: "Brand 4",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 4",
    jobTitle: "Product Manager",
  },
  {
    type: "Standard",
    standNumber: "Stand #105",
    title: "Brand 5",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 5",
    jobTitle: "Operations Manager",
  },
  {
    type: "Economy",
    standNumber: "Stand #106",
    title: "Brand 6",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 6",
    jobTitle: "HR Manager",
  },
  {
    type: "Premium",
    standNumber: "Stand #107",
    title: "Brand 7",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 7",
    jobTitle: "CTO",
  },
  {
    type: "Standard",
    standNumber: "Stand #108",
    title: "Brand 8",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 8",
    jobTitle: "CFO",
  },
  {
    type: "Economy",
    standNumber: "Stand #109",
    title: "Brand 9",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 9",
    jobTitle: "COO",
  },
  {
    type: "Premium",
    standNumber: "Stand #110",
    title: "Brand 10",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 10",
    jobTitle: "Chief Designer",
  },
  {
    type: "Standard",
    standNumber: "Stand #111",
    title: "Brand 11",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 11",
    jobTitle: "Chief Engineer",
  },
  {
    type: "Economy",
    standNumber: "Stand #112",
    title: "Brand 12",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 12",
    jobTitle: "Chief Scientist",
  },
  {
    type: "Premium",
    standNumber: "Stand #113",
    title: "Brand 13",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 13",
    jobTitle: "Chief Architect",
  },
  {
    type: "Standard",
    standNumber: "Stand #114",
    title: "Brand 14",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 14",
    jobTitle: "Chief Strategist",
  },
  {
    type: "Economy",
    standNumber: "Stand #115",
    title: "Brand 15",
    companyImage: "/images/brand1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 15",
    jobTitle: "Chief Analyst",
  },
];

function BrandsGrid() {
  return (
    <div className="grid grid-cols-4 gap-3 p-4" style={{ paddingLeft: '350px', paddingRight: '350px', minHeight: '100vh' }}>
      {brands.map((brand, index) => (
        <div
          key={index}
          className="border rounded-lg flex flex-col items-center"
          style={{ 
            width: "278px", 
            margin: "6.25px", 
            backgroundColor: "#FFF8EF", 
            borderRadius: "20px",
            padding: "20px",
            justifyContent: "space-between",
          }}
        >
          <div className="flex flex-col items-center">
            <span className="bg-gray-200 text-black px-2 py-1 rounded-full text-xs mb-5">{brand.type}</span>
            <span className="text-xs text-black mb-5">{brand.standNumber}</span>
            <Image
              src={brand.companyImage}
              alt={`${brand.title} Image`}
              width={250}
              height={150}
              className="mb-5"
            />
            <h2 className="text-lg font-bold mb-5 text-black">{brand.title}</h2>
            <p className="text-sm text-black text-center" style={{ marginBottom: "20px" }}>{brand.description}</p>
            <Button className="mb-5 border-black text-black">Visit Booth</Button>
          </div>
          <div className="flex items-center" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <Image
              src={brand.exhibitorImage}
              alt={`${brand.exhibitorName} Image`}
              width={50}
              height={50}
              className="rounded-full mr-2"
            />
            <div className="text-center">
              <h3 className="font-semibold text-black">{brand.exhibitorName}</h3>
              <p className="text-xs text-black">{brand.jobTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function BrandsPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar className="w-full bg-transparent" />

      {/* Brands Page Information Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Brands Page</h1>
          <p className="text-lg">Discover a wide range of brands and their latest offerings.</p>
        </div>
      </div>

      {/* Brands Grid Section */}
      <BrandsGrid />

      <Footer className="w-full" />
    </div>
  )
}