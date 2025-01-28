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
      style={{ backgroundColor: '#FFD6FF' }}
    >
      <div className="flex h-16 items-center px-4 w-full justify-between">
        <div className="flex-[0_0_150px] md:flex-[0_0_200px] flex items-center justify-start mr-2">
          <div className="flex items-center justify-start mr-2">
            <Image
              src="/images/Logo.png"
              alt="Toy show icon"
              width={150}
              height={60}
              quality={100}
              priority
              className="max-h-[60px] w-auto"
            />
          </div>
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
                  hover:text-[#F249CD]
                  ${pathname === item.href ? 'text-[#F249CD] font-bold' : 'text-[#454845]'}
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
            className="text-[14px] hover:font-bold whitespace-nowrap text-[#3D9BE9] border-[#3D9BE9] hover:bg-[#3D9BE9] hover:text-white"
          >
            BUY A TICKET
          </Button>
          <Button 
            variant="outline"
            size="custom"
            className="mr-4 whitespace-nowrap text-[#F249CD] border-[#F249CD] hover:bg-[#F249CD] hover:text-white"
          >
            BOOK A STAND
          </Button>
          <ShareButton />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#F5F0FF] px-4 pb-4">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  text-[17px] font-semibold font-poppins transition-all duration-200
                  hover:text-[#F249CD] py-2
                  ${pathname === item.href ? 'text-[#F249CD] font-bold' : 'text-[#454845]'}
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
                className="text-[14px] hover:font-bold w-full text-[#3D9BE9] border-[#3D9BE9] hover:bg-[#3D9BE9] hover:text-white"
              >
                BUY A TICKET
              </Button>
              <Button 
                variant="outline"
                size="custom"
                className="w-full text-[#F249CD] border-[#F249CD] hover:bg-[#F249CD] hover:text-white"
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