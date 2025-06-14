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
                <Link href="/pages/account" className="text-gray-600 hover:text-[#5197A6] transition-colors text-sm">
                  Account
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
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 text-sm">
                <Mail className="h-3 w-3 mr-2 text-[#5197A6]" />
                info@puntasazules.com
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <Phone className="h-3 w-3 mr-2 text-[#5197A6]" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <MapPin className="h-3 w-3 mr-2 text-[#5197A6]" />
                Jalisco, Mexico
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-black/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 Puntas Azules. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-[#5197A6] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-[#5197A6] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer