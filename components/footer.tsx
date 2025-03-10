import { useState } from 'react';
import Image from 'next/image'
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface FooterProps {
  className?: string;
}

// This component renders the footer of the website, including branding, information, and a newsletter subscription form.
// To edit the footer, modify the content within the respective sections below.

export const Footer = ({ className }: FooterProps) => {
  // State to manage email input and subscription status
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Function to handle subscription form submission
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirects to email client with pre-filled subject and body
    window.location.href = `mailto:daniel@xpofairs.com?subject=Newsletter Subscription&body=New subscription request from: ${email}`;
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className={`bg-custom-green ${className || ''}`} style={{ borderTop: '80px solid #EDFFF0' }}>
      <div className="max-w-[980px] w-full mx-auto px-4 sm:px-6 bg-[#EDFFF0]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14">
          <div className="space-y-4">
            {/* Branding section with logo and description */}
            <div className="flex items-center justify-center lg:justify-start">
              <Image 
                src="/images/toy_logo.png"
                alt="Toy Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="space-y-4 max-w-[400px] w-full mx-auto lg:mx-0">
              <p className="text-[11px]">
                The Toy Fair is the world&apos;s first online trade show dedicated to the UK toy industry. 
                The Toy Fair is brought to you by Acquamelon and powered by XpoFairs.
              </p>
              
              {/* Show days information */}
              <div>
                <h4 className="font-bold text-[11px] mb-1">Show Days</h4>
                <p className="text-[11px]">January 08 2025 - February 28 2025</p>
              </div>

              {/* Opening hours information */}
              <div>
                <h4 className="font-bold text-[11px] mb-1">Opening Hours</h4>
                <p className="text-[11px]">
                  Although the show is accessible 24 hours a day 7 days a week, exhibitors will be available:
                </p>
                <p className="text-[11px] mt-1">Monday - Friday 10:00 - 17:00</p>
              </div>
            </div>
          </div>
          
          {/* Benefits and company information sections */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-end gap-8 lg:gap-10">
            <div className="w-full sm:w-auto">
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

            <div className="w-full sm:w-auto">
              <h3 className="font-bold text-[13px] mb-4 text-[#248A37]">Company</h3>
              <ul className="space-y-2">
                <li className="text-[11px] font-normal">
                  About Us
                </li>
                <li className="text-[11px] font-normal">
                  Career
                </li>
                <li className="text-[11px] font-normal">
                  Blogs
                </li>
              </ul>
            </div>

            {/* Newsletter subscription section */}
            <div className="w-full sm:w-auto">
              <h3 className="font-bold text-[13px] mb-4 text-[#248A37]">Newsletter</h3>
              <p className="text-[11px] font-normal mb-3">
                Subscribe to stay updated with the latest news and events
              </p>
              <div className="w-full max-w-[300px]">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email" 
                      required
                      className="text-[11px] px-3 py-2 border rounded-md flex-1 min-w-0 focus:outline-none focus:ring-1 focus:ring-[#248A37]"
                    />
                    <Button 
                      type="submit"
                      className="bg-[#248A37] hover:bg-[#248A37]/90 text-[11px] px-4 py-2 whitespace-nowrap"
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

        {/* Footer copyright information */}
        <div className="mt-12 pt-8 border-t text-center text-[11px]">
          <p>© The Toy Fair 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}