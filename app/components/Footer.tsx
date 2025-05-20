"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { cormorantGaramond } from '../fonts'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Company Info - Always visible */}
        <div className="text-center sm:text-left mb-8 sm:mb-0">
          <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4">
            <Image
              src="/logo.PNG"
              alt="Puntas Azules Logo"
              width={45}
              height={45}
              className="rounded-full"
            />
            <h2 className={`text-2xl font-light tracking-wider ${cormorantGaramond.className}`}>
              Puntas Azules
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
            Your premium destination for fine spirits and exceptional service.
          </p>
          <div className="flex justify-center sm:justify-start space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Grid Layout for larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mt-8 sm:mt-12">
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className={`text-xl font-bold tracking-wider mb-4 sm:mb-6 ${cormorantGaramond.className}`}>
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/spirits" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm inline-block">
                  Spirits
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm inline-block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className={`text-xl font-bold tracking-wider mb-4 sm:mb-6 ${cormorantGaramond.className}`}>
              Contact Us
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start justify-center sm:justify-start space-x-3">
                <MapPin className="h-4 w-4 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Spirits Street, City, Country</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+1 234 567 890</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@puntazules.com</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center sm:text-left">
            <h3 className={`text-xl font-bold tracking-wider mb-4 sm:mb-6 ${cormorantGaramond.className}`}>
              Legal
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm inline-block">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm inline-block">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/age-verification" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm inline-block">
                  Age Verification
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-16 pt-6 sm:pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Puntas Azules. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-xs mt-2">
            Please drink responsibly. Must be 21 or older to purchase alcohol.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer