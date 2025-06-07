'use client'
import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cormorantGaramond } from '../fonts'

const CategoriesGrid = () => {
  const categories = [
    { name: 'Blanco', image: '/whiskey-blanco.webp', count: 'Crystal Clear', description: 'Pure and unaged, capturing the true essence of blue agave with crisp, clean flavors.' },
    { name: 'Reposado', image: '/whiskey-reposado.webp', count: 'Golden Smooth', description: 'Aged 2-12 months in oak barrels, achieving perfect balance between agave and wood.' },
    { name: 'Añejo', image: '/whiskey-anejo.webp', count: 'Rich & Complex', description: 'Aged over a year in oak barrels, developing deep complexity and amber richness.' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link href="/pages/tequilas" key={category.name}>
            <div className="group relative h-[400px] overflow-hidden cursor-pointer">
              <div className="w-full h-full bg-red-600 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-2">
                  <Sparkles className="h-5 w-5 text-[#5197A6] mr-2" />
                  <h3 className={`text-2xl font-bold ${cormorantGaramond.className}`}>
                    {category.name}
                  </h3>
                </div>
                <p className="text-[#5197A6] text-lg mb-2">{category.count}</p>
                <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                <div className="flex items-center text-white group-hover:text-[#5197A6] transition-colors">
                  <span className="text-sm font-medium">View Collection</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
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