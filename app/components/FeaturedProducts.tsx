'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Sparkles, ArrowRight, Star, ChevronRight, ChevronLeft } from 'lucide-react'
import Slider from 'react-slick'
import { cormorantGaramond } from '../fonts'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'

const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/80 text-black p-2 rounded-full border border-black/20 hover:border-black/40 transition-all shadow-lg"
    >
      <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
    </button>
  )

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/80 text-black p-2 rounded-full border border-black/20 hover:border-black/40 transition-all shadow-lg"
    >
      <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
    </button>
  )

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    lazyLoad: 'ondemand' as const,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        }
      }
    ],
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i: number) => (
      <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center">
        <Star
          className={`h-4 w-4 lg:h-5 lg:w-5 transition-all duration-300 ${
            i === currentSlide
              ? 'fill-[#5197A6] text-[#5197A6] scale-110'
              : 'text-gray-600 hover:text-[#5197A6]'
          }`}
        />
      </div>
    ),
  }

  const featuredProducts = [
    { id: 1, name: 'Puntas Azules Blanco', image: '/whiskey-blanco-2.jpeg', price: '$39.99' },
    { id: 2, name: 'Puntas Azules Reposado', image: '/whiskey-reposado-2.jpeg', price: '$44.99' },
    { id: 3, name: 'Puntas Azules Añejo', image: '/whiskey-anejo-2.jpeg', price: '$49.99' }
  ]

  return (
    <section className="py-12 lg:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-8 lg:mb-12">
          <div className="h-px w-12 sm:w-16 lg:w-20 bg-[#5197A6] mr-4" />
          <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-black ${cormorantGaramond.className}`}>
            Featured Tequilas
          </h2>
          <div className="h-px w-12 sm:w-16 lg:w-20 bg-[#5197A6] ml-4" />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <Slider {...sliderSettings} className="featured-slider">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="px-2 sm:px-3 lg:px-4">
                <div className="relative group">
                  {/* Image Container - Optimized for Portrait Images */}
                  <div className="relative aspect-[9/18] sm:aspect-[9/18] bg-gradient-to-br from-gray-100 to-white rounded-lg overflow-hidden border border-black/10">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-fill object-center transition-all duration-500 group-hover:scale-105"
                      quality={85}
                      loading={index < 3 ? "eager" : "lazy"}
                      priority={index < 3}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#5197A6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-black/20">
                      <div className="flex items-center mb-2">
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[#5197A6] mr-2 flex-shrink-0" />
                        <h3 className={`text-sm sm:text-base lg:text-lg font-bold text-black leading-tight ${cormorantGaramond.className}`}>
                          {product.name}
                        </h3>
                      </div>
                      
                      <p className="text-[#5197A6] text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                        {product.price}
                      </p>
                      
                      <Link href="/pages/tequilas" className="text-black hover:text-[#5197A6] transition-colors flex items-center border-b border-transparent hover:border-[#5197A6] pb-1 text-xs sm:text-sm group">
                        <span>View Details</span>
                        <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .featured-slider .slick-dots {
          bottom: -50px !important;
        }
        
        .featured-slider .slick-dots li {
          margin: 0 4px !important;
        }
        
        .featured-slider .slick-track {
          display: flex !important;
          align-items: stretch !important;
        }
        
        .featured-slider .slick-slide {
          height: inherit !important;
        }
        
        .featured-slider .slick-slide > div {
          height: 100% !important;
        }
        
        @media (max-width: 640px) {
          .featured-slider .slick-dots {
            bottom: -40px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default FeaturedProducts 