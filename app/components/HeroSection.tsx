'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Wine, Sparkles, Award, Gift, ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { cormorantGaramond } from '../fonts'

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/whiskey-1.jpg"
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[#5197A6] mr-4" />
                <span className="text-[#5197A6] font-light tracking-widest">PREMIUM TEQUILA</span>
              </div>
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${cormorantGaramond.className}`}>
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
                  <motion.div
                    className="absolute inset-0 bg-black/10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                <Link href="/pages/about">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-transparent text-white px-8 py-4 font-semibold border border-white/20 hover:border-white/40 transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowDown className="ml-2 h-5 w-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: '100% Agave Azul', icon: Wine },
                  { title: 'Worldwide Shipping', icon: Sparkles },
                  { title: 'Master Distillers', icon: Award },
                  { title: 'Exclusive Tastings', icon: Gift }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:border-[#5197A6]/50 transition-colors"
                  >
                    <feature.icon className="h-8 w-8 text-[#5197A6] mb-4" />
                    <h3 className={`text-lg font-bold ${cormorantGaramond.className}`}>
                      {feature.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6 text-[#5197A6]" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection 