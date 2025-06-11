'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { Play, Pause } from 'lucide-react'
import Link from 'next/link'
import { playfairDisplayBold } from '../fonts'

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [isMuted, setIsMuted] = React.useState(true)

  useEffect(() => {
    if (videoRef.current) {
      // Make video play slower for cinematic effect
      videoRef.current.playbackRate = 0.7
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
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-60" />
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
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
              className="bg-white/80 hover:bg-white/90 text-black p-2 backdrop-blur-sm transition-all duration-300 border border-black/20"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button
              onClick={toggleMute}
              className="bg-white/80 hover:bg-white/90 text-black p-2 backdrop-blur-sm transition-all duration-300 border border-black/20"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              <span className="text-xs font-bold">{isMuted ? 'M' : 'U'}</span>
            </button>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            
            {/* Main Call to Action */}
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-8 leading-tight ${playfairDisplayBold.className}`}>
              <span className="block mb-2">
                Discover
              </span>
              <span className="relative inline-block">
                <span className="text-[#5197A6] italic relative">
                  Excellence
                  <div className="absolute bottom-1 left-0 right-0 h-1 bg-[#5197A6] opacity-30" />
                </span>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 font-medium max-w-2xl mx-auto">
              Premium Mexican <span className="text-[#5197A6] italic font-bold">Tequila</span> Crafted for Connoisseurs
            </p>
            
            {/* Shop Button */}
            <Link href="/pages/tequilas">
              <button className="bg-white text-black px-12 py-4 text-xl font-bold hover:bg-gray-100 transition-all duration-300 border-2 border-white hover:border-[#5197A6]">
                SHOP NOW
              </button>
            </Link>
            
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-px bg-[#5197A6] mx-auto mb-6" />
            <h2 className={`text-3xl lg:text-4xl font-bold text-black mb-4 ${playfairDisplayBold.className}`}>
              Puntas <span className="text-[#5197A6]">Azules</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Crafted with tradition, perfected through time
            </p>
          </div>

          {/* Banner Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Banner Image */}
            <div className="order-2 lg:order-1">
              <div className="relative max-w-md mx-auto">
                <div className="relative aspect-[2/3] w-full">
                  <Image
                    src="/pa-banner-portrait.jpeg"
                    alt="Puntas Azules Premium Tequila Collection"
                    fill
                    className="object-contain object-center"
                    quality={95}
                    sizes="(max-width: 1024px) 400px, 500px"
                  />
                </div>
                
                {/* Decorative Lines */}
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#5197A6]" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#5197A6]" />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              
              <h3 className={`text-2xl lg:text-3xl font-bold text-black mb-6 ${playfairDisplayBold.className}`}>
                Three Expressions,
                <br />
                <span className="text-[#5197A6]">One Legacy</span>
              </h3>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                From the crystal clarity of Blanco to the rich complexity of Añejo, 
                each bottle represents generations of Mexican craftsmanship and tradition.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-3 h-px bg-[#5197A6] mr-4" />
                  <span className="text-gray-800 font-medium">100% Blue Weber Agave</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-3 h-px bg-[#5197A6] mr-4" />
                  <span className="text-gray-800 font-medium">Highland Distillery</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-3 h-px bg-[#5197A6] mr-4" />
                  <span className="text-gray-800 font-medium">Master Crafted</span>
                </div>
              </div>
              
              <Link href="/pages/tequilas">
                <button className="bg-[#5197A6] text-white px-8 py-3 font-bold hover:bg-[#5197A6]/90 transition-all duration-300 border-2 border-[#5197A6] hover:border-black">
                  EXPLORE COLLECTION
                </button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection 