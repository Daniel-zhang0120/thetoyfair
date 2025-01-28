'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ShareButton from './ui/ShareButton'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navigation = [
    { name: 'HOME', href: '/', className: 'md:ml-32' },
    { name: 'VISIT', href: '/visit' },
    { name: 'EXHIBIT', href: '/exhibit' },
    { name: 'BRANDS', href: '/brands' },
    { name: 'MEDIA', href: '/media' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-sm font-poppins ${className || ''}`}
      style={{ backgroundColor: '#4AD966' }}
    >
      <div className="flex h-16 items-center px-4 w-full justify-between">
        <div className="flex-[0_0_150px] md:flex-[0_0_200px] flex items-center justify-center mr-2">
          <Image
            src="/images/toy_logo.png"
            alt="Toy show icon"
            width={180}
            height={40}
            quality={100}
            priority
            className="w-[140px] md:w-[180px]"
          />
        </div>

        <button 
          className="md:hidden p-2 ml-auto mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>

        <div className="hidden md:flex flex-1 justify-center mr-[30px]">
          <nav className="flex items-center space-x-9">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  text-[17px] font-semibold font-poppins transition-all duration-200
                  hover:text-black
                  ${pathname === item.href ? 'text-[#9747FF] font-bold' : 'text-white'}
                  ${item.className || ''}
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex flex-[0_0_200px] items-center justify-end gap-4 mr-8">
          <Button 
            variant="outline"
            size="custom"
            className="text-[14px] hover:font-bold whitespace-nowrap"
          >
            BUY A TICKET
          </Button>
          <Button 
            variant="default"
            size="custom"
            className="mr-4 whitespace-nowrap"
          >
            BOOK A STAND
          </Button>
          <div className="flex-1" />
          <ShareButton />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#4AD966] px-4 pb-4">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  text-[17px] font-semibold font-poppins transition-all duration-200
                  hover:text-black py-2
                  ${pathname === item.href ? 'text-[#9747FF] font-bold' : 'text-white'}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
              <Button 
                variant="outline"
                size="custom"
                className="text-[14px] hover:font-bold w-full"
              >
                BUY A TICKET
              </Button>
              <Button 
                variant="default"
                size="custom"
                className="w-full"
              >
                BOOK A STAND
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}