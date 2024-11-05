import Link from "next/link"
import { Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full bg-[#EDFFF0]">
      <div className="w-[980px] mx-auto px-4 bg-[#EDFFF0]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-6 w-6" />
              <span className="text-lg font-bold">Sports Licensing Expo</span>
            </div>
            <p className="text-sm">
              The World's Premier Sports Licensing Event
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/visit" className="text-sm hover:text-blue-600 transition-colors">
                  Visit
                </Link>
              </li>
              <li>
                <Link href="/exhibit" className="text-sm hover:text-blue-600 transition-colors">
                  Exhibit
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-sm hover:text-blue-600 transition-colors">
                  Brands
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">
                Email: info@sportslicensing.com
              </li>
              <li className="text-sm">
                Phone: +1 (555) 123-4567
              </li>
              <li className="text-sm">
                Address: Convention Center, Sports City
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to stay updated with the latest news and events
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="max-w-[200px] border rounded p-2 bg-white/80"
              />
              <Button>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm">
          <p>© 2024 Sports Licensing Expo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}