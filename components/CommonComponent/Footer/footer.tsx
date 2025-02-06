"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:daniel@xpofairs.com?subject=Newsletter Subscription&body=New subscription request from: ${email}`;
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <footer
      className={`bg-[#F5F0FF] w-full overflow-hidden  border    ${className || ""}`}
      style={{ borderTop: "40px solid #F5F0FF" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14">
          <div className="space-y-4 text-center md:text-left">
            <Image
              src="/images/Logo.png"
              alt="Toy Logo"
              width={200}
              height={200}
              className="mx-auto md:mx-0"
            />
            <p className="text-[11px]">
              The Toy Fair is the world&apos;s first online trade show dedicated
              to the UK Toy Industry.
            </p>
            <h4 className="font-bold text-[11px]">Show Days</h4>
            <p className="text-[11px]">January 08 2025 - February 28 2025</p>
            <h4 className="font-bold text-[11px]">Opening Hours</h4>
            <p className="text-[11px]">Monday - Friday 10:00 - 17:00</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-[13px] mb-4 text-[#248A37]">
                The Benefits
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-[11px] hover:text-blue-600">
                    For Visitors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/visit"
                    className="text-[11px] hover:text-blue-600"
                  >
                    For Exhibitors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[13px] mb-4 text-[#248A37]">
                Company
              </h3>
              <ul className="space-y-2">
                <li className="text-[11px]">About us</li>
                <li className="text-[11px]">Career</li>
              </ul>
            </div>
          </div>
          <div className="text-left md:text-left flex flex-col md:items-start">
              <h3 className="font-bold text-[13px] mb-4 text-[#248A37] text-left md:text-left">Newsletter</h3>
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-[300px]">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="text-[11px] px-3 py-2 border rounded-md w-full focus:ring-[#248A37]" />
                  <Button type="submit" className="bg-[#248A37] text-[11px] px-4 py-2 w-full sm:w-auto">Subscribe</Button>
                </form>
              ) : (
                <p className="text-[11px] text-[#248A37]">Thank you for subscribing! 🎉</p>
              )}
            </div>
        </div>
        <div className="mt-8 md:mt-12 pt-8 border-t text-center text-[11px]">
          <p>© The Toy Fair 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
