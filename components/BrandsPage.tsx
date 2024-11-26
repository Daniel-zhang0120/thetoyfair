"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import BrandCard from "./ui/brand-card";

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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 2",
    jobTitle: "Marketing Manager",
  },
  {
    type: "Economy",
    standNumber: "Stand #103",
    title: "Brand 3",
    companyImage: "/images/brand1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 5",
    jobTitle: "Operations Manager",
  },
  {
    type: "Economy",
    standNumber: "Stand #106",
    title: "Brand 6",
    companyImage: "/images/brand1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 8",
    jobTitle: "CFO",
  },
  {
    type: "Economy",
    standNumber: "Stand #109",
    title: "Brand 9",
    companyImage: "/images/brand1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 11",
    jobTitle: "Chief Engineer",
  },
  {
    type: "Economy",
    standNumber: "Stand #112",
    title: "Brand 12",
    companyImage: "/images/brand1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 14",
    jobTitle: "Chief Strategist",
  },
  {
    type: "Economy",
    standNumber: "Stand #115",
    title: "Brand 15",
    companyImage: "/images/brand1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    exhibitorImage: "/images/exhibitor1.png",
    exhibitorName: "Exhibitor 15",
    jobTitle: "Chief Analyst",
  },
];

function BrandsGrid() {
  return (
    <div className="mt-4 columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-x-8">
      {brands.map((card, index) => (
        <BrandCard key={index} brandData={card} />
      ))}
    </div>
  );
}

export function BrandsPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar className="w-full bg-transparent" />

      {/* Brands Page Information Section */}
      <div className="flex items-center justify-center py-8 bg-gray-100">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Brands Page
          </h1>
          <p className="text-lg text-gray-600">
            Discover a wide range of brands and their latest offerings.
          </p>
        </div>
      </div>

      {/* Brands Grid Section */}
      <div className="container mx-auto py-8">
        <BrandsGrid />
      </div>

      <Footer className="w-full" />
    </div>
  );
}