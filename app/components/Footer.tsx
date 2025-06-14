"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import { cormorantGaramond } from '../fonts'

const Footer = () => {
  return (
    <footer className="bg-white text-white border-t border-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo and Brand */}
          <div className="lg:col-span-1">
              <div className="relative h-12 w-32 mb-4">
               <Link href="/" className="block">
                <Image
                  src="/logo.PNG"
                  alt="Puntas Azules Logo"
                  fill
                  className="object-contain hover:scale-110 hover:rotate-360 transition-all duration-600"
                  quality={50}
                  sizes="128px"
                  loading="lazy"
                />
               </Link>
              </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Premium tequila crafted with tradition and passion. Experience the authentic taste of Mexico's finest spirits.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-[#5197A6] transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#5197A6] transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#5197A6] transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-black text-base font-bold mb-4 ${cormorantGaramond.className}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#5197A6] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages/tequilas" className="text-gray-600 hover:text-[#5197A6] transition-colors text-sm">
                  Our Tequilas
                </Link>
              </li>
              <li>
                <Link href="/pages/about" className="text-gray-600 hover:text-[#5197A6] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pages/cart" className="text-gray-600 hover:text-[#5197A6] transition-colors text-sm">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className={`text-black text-base font-bold mb-4 ${cormorantGaramond.className}`}>
              Products
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Tequila Blanco</li>
              <li className="text-gray-600 text-sm">Tequila Reposado</li>
              <li className="text-gray-600 text-sm">Tequila Añejo</li>
              <li className="text-gray-600 text-sm">Limited Editions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`text-black text-base font-bold mb-4 ${cormorantGaramond.className}`}>
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:info@senicinternational.com" 
                  className="text-gray-600 hover:text-[#5197A6] transition-colors text-sm flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  info@senicinternational.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+19093215600" 
                  className="text-gray-600 hover:text-[#5197A6] transition-colors text-sm flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (909) 321-5600
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=1670+Hammer+Ave+Ste+3+norco+CA+92860" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#5197A6] transition-colors text-sm flex items-center"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  1670 Hammer Ave Ste 3<br/>Norco, CA 92860
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-black/10 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Puntas Azules. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer