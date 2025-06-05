"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Wine, User, ShoppingCart, LogOut, ChevronDown, Search, Menu, Package, Info } from "lucide-react";
import { cormorantGaramond } from "../fonts";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-md fixed w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-32 sm:h-14 sm:w-40 md:h-16 md:w-48 overflow-hidden">
              <Image
                src="/logo.PNG"
                alt="Puntas Azules Logo"
                fill
                className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>

          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/tequilas"
              className="text-white/80 hover:text-cyan-400 transition-colors flex items-center space-x-2 group"
            >
              <Wine className="h-5 w-5 group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm tracking-wider">TEQUILAS</span>
            </Link>
            <Link
              href="/collections"
              className="text-white/80 hover:text-cyan-400 transition-colors flex items-center space-x-2 group"
            >
              <Package className="h-5 w-5 group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm tracking-wider">COLLECTIONS</span>
            </Link>
            <Link
              href="/about"
              className="text-white/80 hover:text-cyan-400 transition-colors flex items-center space-x-2 group"
            >
              <Info className="h-5 w-5 group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm tracking-wider">ABOUT</span>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <button className="text-white/80 hover:text-cyan-400 transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="text-white/80 hover:text-cyan-400 transition-colors relative group"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-cyan-400 text-black text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-3 group"
              >
                <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-cyan-400/50 transition-colors">
                  <Image
                    src="/pexel-images/16.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <ChevronDown 
                  className={`h-4 w-4 text-white/80 group-hover:text-cyan-400 transition-all duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-black/95 backdrop-blur-md border border-white/10 rounded-none py-2 z-50 animate-fadeIn">
                  <div className="px-4 py-2 border-b border-white/10">
                    <p className="text-white font-medium">John Doe</p>
                    <p className="text-white/60 text-sm">john@example.com</p>
                  </div>
                  <Link
                    href="/account"
                    className="flex items-center px-4 py-3 text-white/80 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                  >
                    <User className="h-4 w-4 mr-3" />
                    Account Settings
                  </Link>
                  <Link
                    href="/orders"
                    className="flex items-center px-4 py-3 text-white/80 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4 mr-3" />
                    My Orders
                  </Link>
                  <button
                    className="flex items-center w-full px-4 py-3 text-white/80 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                    onClick={() => {/* Add logout logic */}}
                  >
                    <LogOut className="h-4 w-4 mr-3" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white/80 hover:text-cyan-400 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link
                href="/tequilas"
                className="text-white/80 hover:text-cyan-400 transition-colors flex items-center space-x-2 px-4"
              >
                <Wine className="h-5 w-5" />
                <span>TEQUILAS</span>
              </Link>
              <Link
                href="/collections"
                className="text-white/80 hover:text-cyan-400 transition-colors flex items-center space-x-2 px-4"
              >
                <Package className="h-5 w-5" />
                <span>COLLECTIONS</span>
              </Link>
              <Link
                href="/about"
                className="text-white/80 hover:text-cyan-400 transition-colors flex items-center space-x-2 px-4"
              >
                <Info className="h-5 w-5" />
                <span>ABOUT</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;