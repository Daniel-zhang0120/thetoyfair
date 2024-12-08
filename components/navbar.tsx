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
<<<<<<< HEAD
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
=======
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
            <Image
              src="/images/GIF.gif"
              alt="GIF icon"
              width={150}
              height={60}
              quality={100}
              priority
              className="max-h-[60px] w-auto p-0"
            />
          </div>
>>>>>>> 470d8d7abe7005c38bd566d0d4d352253a097893
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
<<<<<<< HEAD
            className="text-[14px] hover:font-bold whitespace-nowrap"
=======
            className="text-[14px] hover:font-bold whitespace-nowrap text-[#3D9BE9] border-[#3D9BE9] hover:bg-[#3D9BE9] hover:text-white"
>>>>>>> 470d8d7abe7005c38bd566d0d4d352253a097893
          >
            BUY A TICKET
          </Button>
          <Button 
            variant="outline"
            size="custom"
<<<<<<< HEAD
            className="mr-4 whitespace-nowrap"
=======
            className="mr-4 whitespace-nowrap text-[#F249CD] border-[#F249CD] hover:bg-[#F249CD] hover:text-white"
>>>>>>> 470d8d7abe7005c38bd566d0d4d352253a097893
          >
            BOOK A STAND
          </Button>
          <ShareButton />
        </div>
      </div>

      {isMenuOpen && (
<<<<<<< HEAD
        <div className="md:hidden bg-[#4AD966] px-4 pb-4">
=======
        <div className="md:hidden bg-[#FFF8EF] px-4 pb-4">
>>>>>>> 470d8d7abe7005c38bd566d0d4d352253a097893
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  text-[17px] font-semibold font-poppins transition-all duration-200
<<<<<<< HEAD
                  hover:text-black py-2
                  ${pathname === item.href ? 'text-[#9747FF] font-bold' : 'text-white'}
=======
                  hover:text-[#F249CD] py-2
                  ${pathname === item.href ? 'text-[#F249CD] font-bold' : 'text-[#454845]'}
>>>>>>> 470d8d7abe7005c38bd566d0d4d352253a097893
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
<<<<<<< HEAD
                className="text-[14px] hover:font-bold w-full"
=======
                className="text-[14px] hover:font-bold w-full text-[#3D9BE9] border-[#3D9BE9] hover:bg-[#3D9BE9] hover:text-white"
>>>>>>> 470d8d7abe7005c38bd566d0d4d352253a097893
              >
                BUY A TICKET
              </Button>
              <Button 
<<<<<<< HEAD
                variant="default"
                size="custom"
                className="w-full"
=======
                variant="outline"
                size="custom"
                className="w-full text-[#F249CD] border-[#F249CD] hover:bg-[#F249CD] hover:text-white"
>>>>>>> 470d8d7abe7005c38bd566d0d4d352253a097893
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