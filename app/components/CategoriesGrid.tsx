'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cormorantGaramond } from '../fonts'

const CategoriesGrid = () => {
  const categories = [
    { name: 'Blanco', image: '/whiskey-blanco.jpg', count: 'Crystal Clear', description: 'Pure and unaged, capturing the true essence of blue agave with crisp, clean flavors.' },
    { name: 'Reposado', image: '/whiskey-reposado.jpg', count: 'Golden Smooth', description: 'Aged 2-12 months in oak barrels, achieving perfect balance between agave and wood.' },
    { name: 'Añejo', image: '/whiskey-anejo.jpg', count: 'Rich & Complex', description: 'Aged over a year in oak barrels, developing deep complexity and amber richness.' }
  ]

  return (
    <section className="py-20 px-4 bg-black relative">
      <div className="absolute inset-0 bg-[url('/whiskey-types.jpg')] bg-cover bg-center opacity-5" />
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center mb-6">
            <div className="h-px w-20 bg-[#5197A6] mr-4" />
            <span className="text-[#5197A6] font-light tracking-widest">OUR TEQUILA COLLECTION</span>
            <div className="h-px w-20 bg-[#5197A6] ml-4" />
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${cormorantGaramond.className}`}>
            Three Perfect Expressions
          </h2>
          <p className="text-gray-400 text-center max-w-2xl">
            Discover the three classic presentations of tequila, each with its own unique character and aged to perfection in our distillery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link href="/pages/tequilas" key={category.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative h-[400px] overflow-hidden cursor-pointer"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={75}
                />
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
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesGrid 