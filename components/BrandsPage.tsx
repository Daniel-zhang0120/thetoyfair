"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import BrandCard from "./ui/brand-card";
import { useEffect, useState } from "react";

// Define the types based on your API response
interface Exhibitor {
  ExhibitorID: string;
  name: string;
  profile_picture: string;
  position: string;
  company: string;
}

interface APIBrand {
  BrandID: string;
  brand_name: string;
  image_url: string;
  description: string;
  stand_number: string;
  product_tag: string;
  location: string;
  hall: string;
  exhibitor_id: string;
  exhibitor: Exhibitor | null;
}

function BrandsGrid() {
  const [brands, setBrands] = useState<APIBrand[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/brands')
      .then(response => response.json())
      .then(data => {
        setBrands(data.data);
        setIsLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch brands');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div className="text-2xl text-center py-10">Loading...</div>;
  if (error) return <div className="text-2xl text-red-500 text-center py-10">{error}</div>;

  return (
    <div className="mt-4 columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-x-8">
      {brands.map((brand) => (
        <BrandCard
          key={brand.BrandID}
          brandData={{
            standNumber: brand.stand_number,
            type: "Standard",
            companyImage: brand.image_url,
            title: brand.brand_name,
            description: brand.description,
            exhibitorImage: brand.exhibitor?.profile_picture || "/placeholder.jpg",
            exhibitorName: brand.exhibitor?.name || "No Exhibitor",
            jobTitle: brand.exhibitor?.position || "N/A",
            hall: brand.hall,
            productTags: brand.product_tag.split(',').map(tag => tag.trim())
          }}
        />
      ))}
    </div>
  );
}

export function BrandsPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar className="w-full bg-transparent" />

      <div className="flex items-center justify-center py-8 bg-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Brands Page
          </h1>
          <p className="text-lg text-gray-600">
            Discover a wide range of brands and their latest offerings.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <BrandsGrid />
      </div>

      <Footer className="w-full" />
    </div>
  );
}