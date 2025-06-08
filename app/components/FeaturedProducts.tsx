'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Sparkles, ArrowRight, Star, ChevronRight, ChevronLeft } from 'lucide-react'
import Slider from 'react-slick'
import { cormorantGaramond } from '../fonts'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-none border border-white/20 hover:border-white/40 transition-all"
    >
      <ChevronRight className="h-6 w-6" />
    </button>
  )

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-none border border-white/20 hover:border-white/40 transition-all"
    >
      <ChevronLeft className="h-6 w-6" />
    </button>
  )

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    lazyLoad: 'ondemand' as const,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i: number) => (
      <div className="w-8 h-8 flex items-center justify-center">
        <Star
          className={`h-5 w-5 transition-all duration-300 ${
            i === currentSlide
              ? 'fill-[#5197A6] text-[#5197A6] scale-110'
              : 'text-gray-400 hover:text-[#5197A6]'
          }`}
        />
      </div>
    ),
  }

  const featuredProducts = [
    { id: 1, name: 'Premium Tequila Reposado', image: '/whiskey-reposado-2.jpeg', price: '$89.99' },
    { id: 2, name: 'Artisan Tequila Blanco', image: '/whiskey-blanco-2.jpeg', price: '$129.99' },
    { id: 3, name: 'Aged Tequila Añejo', image: '/whiskey-anejo.jpeg', price: '$69.99' },
    { id: 4, name: 'Limited Edition Tequila', image: '/whiskey-2.jpeg', price: '$149.99' },
  ]

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-10">
          <div className="h-px w-20 bg-[#5197A6] mr-4" />
          <h2 className={`text-2xl md:text-3xl font-bold ${cormorantGaramond.className}`}>
            Featured Tequilas
          </h2>
          <div className="h-px w-20 bg-[#5197A6] ml-4" />
        </div>
        <div className="relative max-w-md mx-auto">
          <Slider {...sliderSettings} className="featured-slider">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="px-4">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden group max-w-sm mx-auto">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 300px, 400px"
                    className="object-contain transition-all duration-500 group-hover:brightness-75"
                    quality={50}
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center mb-2">
                      <Sparkles className="h-4 w-4 text-[#5197A6] mr-2" />
                      <h3 className={`text-lg font-bold ${cormorantGaramond.className}`}>
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-[#5197A6] text-lg mb-3">{product.price}</p>
                    <button className="text-white hover:text-[#5197A6] transition-colors flex items-center border-b border-transparent hover:border-[#5197A6] pb-1 text-sm">
                      View Details <ArrowRight className="ml-2 h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts 