"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Wine, ShoppingCart, Menu, Info, X, Mail } from "lucide-react";
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  
  return (
    <nav className="bg-white backdrop-blur-md fixed w-full z-50 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-32 sm:h-14 sm:w-40 md:h-16 md:w-48 overflow-hidden">
              <Image
                src="/logo.PNG"
                alt="Puntas Azules Logo"
                fill
                className="object-contain transform group-hover:scale-110 hover:rotate-360 transition-all duration-600"
                priority
                quality={50}
                sizes="(max-width: 768px) 128px, (max-width: 1200px) 160px, 192px"
              />
            </div>
          </Link>

          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/pages/tequilas"
              className="text-black hover:text-[#5197A6] transition-colors flex items-center space-x-2 group"
            >
              <Wine className="h-5 w-5 group-hover:text-[#5197A6] transition-colors" />
              <span className="text-sm tracking-wider">TEQUILAS</span>
            </Link>
            <Link
              href="/pages/about"
              className="text-black hover:text-[#5197A6] transition-colors flex items-center space-x-2 group"
            >
              <Info className="h-5 w-5 group-hover:text-[#5197A6] transition-colors" />
              <span className="text-sm tracking-wider">ABOUT</span>
            </Link>
            <Link
              href="/pages/contact"
              className="text-black hover:text-[#5197A6] transition-colors flex items-center space-x-2 group"
            >
              <Mail className="h-5 w-5 group-hover:text-[#5197A6] transition-colors" />
              <span className="text-sm tracking-wider">CONTACT</span>
            </Link>
          </div>

          {/* Right Section - Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link
              href="/pages/cart"
              className="relative text-black hover:text-[#5197A6] transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#5197A6] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-black hover:text-[#5197A6] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-black/10 animate-fadeIn">
            <div className="flex flex-col py-4">
              <Link
                href="/pages/tequilas"
                className="text-black hover:text-[#5197A6] transition-colors flex items-center space-x-2 px-4 py-3 hover:bg-black/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Wine className="h-5 w-5" />
                <span>TEQUILAS</span>
              </Link>
              <Link
                href="/pages/about"
                className="text-black hover:text-[#5197A6] transition-colors flex items-center space-x-2 px-4 py-3 hover:bg-black/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Info className="h-5 w-5" />
                <span>ABOUT</span>
              </Link>
              <Link
                href="/pages/contact"
                className="text-black hover:text-[#5197A6] transition-colors flex items-center space-x-2 px-4 py-3 hover:bg-black/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail className="h-5 w-5" />
                <span>CONTACT</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;