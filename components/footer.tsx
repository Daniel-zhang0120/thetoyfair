import { useState } from 'react';
import Image from 'next/image'
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:daniel@xpofairs.com?subject=Newsletter Subscription&body=New subscription request from: ${email}`;
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className={`bg-[#F5F0FF] ${className || ''}`} style={{ borderTop: '80px solid #F5F0FF' }}>
      <div className="w-[980px] mx-auto px-4 bg-[#F5F0FF]">
        <div className="grid grid-cols-1 md:grid-cols-[550px_1fr] gap-14">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="/images/Logo.png"
                alt="Toy Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="space-y-4 w-[400px]">
              <p className="text-[11px]">
                The Gift Fair is the world&apos;s first online trade show dedicated to the US toy Industry. 
                The Gift Fair is brought to you by Acquamelon and powered by XpoFairs.
              </p>
              
              <div>
                <h4 className="font-bold text-[11px] mb-1">Show Days</h4>
                <p className="text-[11px]">January 08 2025 - February 28 2025</p>
              </div>

              <div>
                <h4 className="font-bold text-[11px] mb-1">Opening Hours</h4>
                <p className="text-[11px]">
                  Although the show is accessible 24 hours a day, 7 days a week. Exhibitors will be available:
                </p>
                <p className="text-[11px] mt-1">Monday - Friday 10:00 - 17:00</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-10">
            <div className="w-[100px]">
              <h3 className="font-bold text-[13px] mb-4 text-[#248A37]">The Benefits</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-[11px] font-normal hover:text-blue-600 transition-colors">
                    For Visitors
                  </Link>
                </li>
                <li>
                  <Link href="/visit" className="text-[11px] font-normal hover:text-blue-600 transition-colors">
                    For Exhibitors
                  </Link>
                </li>
                <li>
                  <Link href="/exhibit" className="text-[11px] font-normal hover:text-blue-600 transition-colors">
                    For Organisers
                  </Link>
                </li>
                <li>
                  <Link href="/brands" className="text-[11px] font-normal hover:text-blue-600 transition-colors">
                    For the planet
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[13px] mb-4 text-[#248A37]">Company</h3>
              <ul className="space-y-2">
                <li className="text-[11px] font-normal">
                  About us
                </li>
                <li className="text-[11px] font-normal">
                  Career
                </li>
                <li className="text-[11px] font-normal">
                  Blogs
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[13px] mb-4 text-[#248A37]">Newsletter</h3>
              <p className="text-[11px] font-normal mb-3">
                Subscribe to stay updated with the latest news and events
              </p>
              <div className="w-[300px]">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email" 
                      required
                      className="text-[11px] px-3 py-2 border rounded-md w-[200px] focus:outline-none focus:ring-1 focus:ring-[#248A37]"
                    />
                    <Button 
                      type="submit"
                      className="bg-[#248A37] hover:bg-[#248A37]/90 text-[11px] px-4 py-2"
                    >
                      Subscribe
                    </Button>
                  </form>
                ) : (
                  <div className="h-[38px] flex items-center">
                    <p className="text-[11px] text-[#248A37]">
                      Thank you for subscribing! 🎉
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-[11px]">
          <p>©  The Toy Fair 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}