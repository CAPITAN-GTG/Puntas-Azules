'use client'
import React from 'react'
import Image from 'next/image'
import { Wine, Sparkles, Award, Gift, ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { cormorantGaramond } from '../fonts'

const HeroSection = () => {
  return (
    <div className="relative h-[80vh]">
      <div className="absolute inset-0">
        <Image
          src="/whiskey-1.jpeg"
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Cc5O2/wDVt3vhePgNBLN4kKiO/wCGfSKkGD/q+y0fXhtBDz/VrfP0A0CdF8LjdO4sSQ+7xRKbqJc0sBhfvQfGdWTtI="
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-left">
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[#5197A6] mr-4" />
                <span className="text-[#5197A6] font-light tracking-widest">PREMIUM TEQUILA</span>
              </div>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${cormorantGaramond.className}`}>
                Discover the Soul of
                <span className="block text-[#5197A6] mt-2">Mexico's Finest</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                Experience the authentic taste of premium tequila in three distinct presentations: 
                Blanco, Reposado, and Añejo. Each bottle tells a story of tradition and craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/pages/tequilas"
                  className="group relative bg-[#5197A6] text-black px-8 py-4 font-bold hover:bg-[#5197A6]/90 transition-all duration-300 flex items-center justify-center"
                >
                  <span className="relative z-10">Explore Our Tequilas</span>
                  <div className="absolute inset-0 bg-black/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </Link>
                <Link href="/pages/about">
                  <button
                    className="bg-transparent text-white px-8 py-4 font-semibold border border-white/20 hover:border-white/40 transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowDown className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Feature Highlights */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: '100% Agave Azul', icon: Wine },
                  { title: 'Worldwide Shipping', icon: Sparkles },
                  { title: 'Master Distillers', icon: Award },
                  { title: 'Exclusive Tastings', icon: Gift }
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white/5 backdrop-blur-sm p-4 border border-white/10 hover:border-[#5197A6]/50 transition-colors"
                  >
                    <feature.icon className="h-6 w-6 text-[#5197A6] mb-3" />
                    <h3 className={`text-base font-bold ${cormorantGaramond.className}`}>
                      {feature.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll to Explore</span>
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-[#5197A6]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 