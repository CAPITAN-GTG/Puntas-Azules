'use client'
import React from 'react'
import Image from 'next/image'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cormorantGaramond } from '../fonts'

const CategoriesGrid = () => {
  const categories = [
    { name: 'Blanco', image: '/whiskey-blanco.jpeg', count: 'Crystal Clear', description: 'Pure and unaged, capturing the true essence of blue agave with crisp, clean flavors.' },
    { name: 'Reposado', image: '/whiskey-reposado.jpeg', count: 'Golden Smooth', description: 'Aged 2-12 months in oak barrels, achieving perfect balance between agave and wood.' },
    { name: 'Añejo', image: '/whiskey-anejo.jpeg', count: 'Rich & Complex', description: 'Aged over a year in oak barrels, developing deep complexity and amber richness.' }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link href="/pages/tequilas" key={category.name}>
            <div className="group relative h-[300px] overflow-hidden cursor-pointer rounded-lg">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                quality={50}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center mb-2">
                  <Sparkles className="h-4 w-4 text-[#5197A6] mr-2" />
                  <h3 className={`text-xl font-bold ${cormorantGaramond.className}`}>
                    {category.name}
                  </h3>
                </div>
                <p className="text-[#5197A6] text-base mb-2">{category.count}</p>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{category.description}</p>
                <div className="flex items-center text-white group-hover:text-[#5197A6] transition-colors">
                  <span className="text-sm font-medium">View Collection</span>
                  <ArrowRight className="ml-2 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoriesGrid 