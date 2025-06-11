'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { Wine, Sparkles, Award, Gift, ArrowDown, Play, Pause } from 'lucide-react'
import Link from 'next/link'
import { cormorantGaramond } from '../fonts'

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [isMuted, setIsMuted] = React.useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover scale-105 blur-[3px]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={(e) => console.error('Video failed to load:', e)}
          >
            <source src="/background-video.mp4" type="video/mp4" />
            {/* Fallback image if video fails */}
            <Image
              src="/background.jpeg"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
          </video>
          
          {/* Video Controls */}
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            <button
              onClick={togglePlayPause}
              className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button
              onClick={toggleMute}
              className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              <span className="text-xs font-bold">{isMuted ? 'M' : 'U'}</span>
            </button>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-7 text-left px-2 sm:px-0">
                {/* Brand Label */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="h-px w-8 sm:w-12 bg-[#5197A6] mr-3 sm:mr-4" />
                  <span className="text-[#5197A6] font-light tracking-widest text-xs sm:text-sm md:text-base">
                    PUNTAS AZULES PREMIUM
                  </span>
                </div>
                
                {/* Main Headline - Improved responsive sizing */}
                <h1 className={`
                  text-2xl 
                  xs:text-3xl 
                  sm:text-4xl 
                  md:text-5xl 
                  lg:text-5xl 
                  xl:text-6xl 
                  2xl:text-7xl 
                  font-bold 
                  mb-4 
                  sm:mb-6 
                  leading-tight 
                  md:leading-tight
                  ${cormorantGaramond.className}
                `}>
                  <span className="block">Discover the Soul of</span>
                  <span className="block text-[#5197A6] mt-1 sm:mt-2">Mexico's Finest</span>
                </h1>
                
                {/* Description - Better responsive text */}
                <p className="
                  text-sm 
                  sm:text-base 
                  md:text-lg 
                  lg:text-xl 
                  text-gray-200 
                  mb-6 
                  sm:mb-8 
                  max-w-none 
                  sm:max-w-xl 
                  md:max-w-2xl 
                  leading-relaxed 
                  md:leading-relaxed
                ">
                  Experience the authentic taste of premium tequila in three distinct presentations: 
                  Blanco, Reposado, and Añejo. Each bottle tells a story of tradition and craftsmanship.
                </p>
                
                {/* Buttons - Improved responsive layout */}
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <Link
                    href="/pages/tequilas"
                    className="
                      group 
                      relative 
                      bg-[#5197A6] 
                      text-black 
                      px-5 
                      sm:px-6 
                      md:px-8 
                      py-3 
                      sm:py-3.5 
                      md:py-4 
                      font-bold 
                      hover:bg-[#5197A6]/90 
                      transition-all 
                      duration-300 
                      flex 
                      items-center 
                      justify-center 
                      text-sm 
                      sm:text-base 
                      rounded-sm
                      min-w-0
                      flex-1
                      xs:flex-initial
                    "
                  >
                    <span className="relative z-10 whitespace-nowrap">Explore Our Tequilas</span>
                    <div className="absolute inset-0 bg-black/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-sm" />
                  </Link>
                  
                  <Link href="/pages/about" className="min-w-0 flex-1 xs:flex-initial">
                    <button className="
                      w-full
                      bg-transparent 
                      text-white 
                      px-5 
                      sm:px-6 
                      md:px-8 
                      py-3 
                      sm:py-3.5 
                      md:py-4 
                      font-semibold 
                      border 
                      border-white/30 
                      hover:border-white/50 
                      hover:bg-white/5
                      transition-all
                      duration-300
                      flex 
                      items-center 
                      justify-center 
                      text-sm 
                      sm:text-base
                      rounded-sm
                    ">
                      <span className="whitespace-nowrap">Learn More</span>
                      <ArrowDown className="ml-2 h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Column - Portrait Banner (Desktop Only) */}
              <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
                <div className="relative w-full max-w-sm xl:max-w-md">
                  {/* Portrait Banner Image - Fixed container with proper aspect ratio */}
                  <div className="relative aspect-[2/3] w-full">
                    <Image
                      src="/pa-banner-portrait.jpeg"
                      alt="Puntas Azules Premium Tequila"
                      fill
                      className="object-contain object-center rounded-lg shadow-2xl"
                      priority
                      quality={95}
                      sizes="(max-width: 1024px) 0px, (max-width: 1280px) 400px, 500px"
                    />
                    
                    {/* Elegant overlay with brand info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg" />
                    
                    {/* Brand highlight */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 xl:p-6 text-center">
                      <div className="bg-[#5197A6]/20 backdrop-blur-sm rounded-lg p-3 xl:p-4 border border-[#5197A6]/30">
                        <h3 className={`text-lg xl:text-xl font-bold text-white mb-1 xl:mb-2 ${cormorantGaramond.className}`}>
                          Puntas Azules
                        </h3>
                        <p className="text-xs xl:text-sm text-gray-200">
                          Premium Tequila Collection
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#5197A6]/50" />
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#5197A6]/50" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-xs sm:text-sm text-gray-300 mb-2 text-center">Scroll to Explore</span>
            <div className="animate-bounce">
              <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-[#5197A6]" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Banner Section */}
      <div className="lg:hidden relative py-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-[#5197A6] mr-4" />
              <span className="text-[#5197A6] font-light tracking-widest text-sm">
                PREMIUM COLLECTION
              </span>
              <div className="h-px w-12 bg-[#5197A6] ml-4" />
            </div>
            <h2 className={`text-2xl sm:text-3xl font-bold text-white mb-4 ${cormorantGaramond.className}`}>
              Puntas Azules Heritage
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Crafted with passion and tradition, our premium tequila collection represents 
              the finest expressions of Mexican craftsmanship.
            </p>
          </div>

          <div className="relative max-w-md mx-auto">
            {/* Mobile Banner Image */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/pa-banner-portrait.jpeg"
                alt="Puntas Azules Premium Tequila Collection"
                fill
                className="object-cover object-center rounded-xl shadow-2xl"
                quality={95}
                sizes="(max-width: 640px) 300px, 400px"
              />
              
              {/* Elegant mobile overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 rounded-xl" />
              
              {/* Mobile brand highlight */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="bg-[#5197A6]/25 backdrop-blur-md rounded-lg p-4 border border-[#5197A6]/40">
                  <h3 className={`text-xl font-bold text-white mb-1 ${cormorantGaramond.className}`}>
                    Puntas Azules
                  </h3>
                  <p className="text-sm text-gray-200 mb-3">
                    Premium Tequila Collection
                  </p>
                  <div className="flex justify-center space-x-2">
                    {['Blanco', 'Reposado', 'Añejo'].map((type) => (
                      <span 
                        key={type}
                        className="text-xs bg-[#5197A6]/30 text-white px-2 py-1 rounded border border-[#5197A6]/50"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative mobile elements */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#5197A6]/60" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#5197A6]/60" />
            
            {/* Floating accent elements */}
            <div className="absolute top-1/4 -left-4 w-8 h-8 bg-[#5197A6]/20 rounded-full blur-sm" />
            <div className="absolute bottom-1/4 -right-4 w-6 h-6 bg-[#5197A6]/15 rounded-full blur-sm" />
          </div>

          {/* Mobile Call to Action */}
          <div className="text-center mt-12">
            <Link
              href="/pages/tequilas"
              className="inline-flex items-center bg-[#5197A6] text-black px-8 py-3 font-bold hover:bg-[#5197A6]/90 transition-all duration-300 rounded-sm"
            >
              <span>Explore Collection</span>
              <ArrowDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection 