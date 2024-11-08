import { VisitPageComponent } from "@/components/visit-page"
import { PartnersCarousel } from "@/components/partners-carousel"

export default function VisitPage() {
  return (
    <div>
      <VisitPageComponent />

      <div className="relative z-10 -mt-[600px]">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Partners</h2>
        <PartnersCarousel />
      </div>
    </div>
  )
} 