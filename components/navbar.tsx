'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ShareButton from './ui/ShareButton';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname()
  
  const navigation = [
    { name: 'HOME', href: '/', className: 'ml-32' },
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
        <div className="flex-[0_0_200px] flex items-center justify-center mr-2">
          <Image
            src="/images/toy_logo.png"
            alt="Toy show icon"
            width={180}
            height={40}
            quality={100}
            priority
            className="hidden md:block"
          />
        </div>

        <div className="flex-1 flex justify-center mr-[30px]">
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

        <div className="flex-[0_0_200px] flex items-center justify-end gap-4 mr-8">
          <Button 
            variant="outline"
            size="custom"
            className="text-[14px] hover:font-bold"
          >
            BUY A TICKET
          </Button>
          <Button 
            variant="default"
            size="custom"
            className="mr-4"
          >
            BOOK A STAND
          </Button>
          <ShareButton />
        </div>
      </div>
    </header>
  )
}