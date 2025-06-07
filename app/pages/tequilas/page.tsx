"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, Star, Award, Leaf, ZoomIn } from 'lucide-react'
import { cormorantGaramond } from '../../fonts'
import { useCart } from '../../context/CartContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const products = [
  {
    id: 1,
    name: "Puntas Azules Blanco",
    description: "Our signature Blanco tequila, crafted from 100% Blue Weber agave. Clean, crisp, and perfect for any occasion.",
    image: "/product-blanco.webp",
    price: 49.99,
    features: ["100% Blue Weber Agave", "Double Distilled", "Unaged"]
  },
  {
    id: 2,
    name: "Puntas Azules Reposado",
    description: "Aged for 6 months in American oak barrels, our Reposado offers a perfect balance of agave and oak flavors.",
    image: "/product-reposado.webp",
    price: 59.99,
    features: ["6 Months Aged", "American Oak", "Smooth Finish"]
  },
  {
    id: 3,
    name: "Puntas Azules Añejo",
    description: "Our premium Añejo, aged for 18 months in French oak barrels, delivering complex flavors and smooth finish.",
    image: "/product-anejo.webp",
    price: 79.99,
    features: ["18 Months Aged", "French Oak", "Premium Quality"]
  }
]

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })

    toast.success(`${product.name} added to cart`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: '#1a1a1a',
        color: '#fff',
        border: '1px solid #5197A6',
      }
    })
  }

  return (
    <main className="min-h-screen bg-black text-white py-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-[#5197A6] mr-4" />
            <span className="text-[#5197A6] font-light tracking-widest">OUR TEQUILAS</span>
            <div className="h-px w-12 bg-[#5197A6] ml-4" />
          </div>
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${cormorantGaramond.className}`}>
            Premium Selection
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Discover our carefully crafted tequilas, each telling its own story of tradition and excellence.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#5197A6]/50 transition-colors rounded-lg overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative aspect-[3/4]">
                <div className="absolute inset-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    quality={50}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk"
                  />
                </div>
                {/* Zoom Button */}
                <button
                  onClick={() => setSelectedImage(product.image)}
                  className="absolute top-4 right-4 bg-black/50 p-2 text-white hover:text-[#5197A6] transition-colors rounded"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className={`text-lg font-bold mb-2 ${cormorantGaramond.className}`}>
                      {product.name}
                    </h2>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <span className="text-[#5197A6] font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-300">
                      <Star className="h-3 w-3 text-[#5197A6] mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.button 
                  onClick={(e) => handleAddToCart(e, product)}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-full bg-[#5197A6] text-black py-2 font-bold hover:bg-[#5197A6]/90 transition-colors flex items-center justify-center space-x-2 rounded"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full h-full max-w-[70vw] max-h-[80vh]"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Product Preview"
                  fill
                  className="object-contain"
                  quality={70}
                  sizes="(max-width: 768px) 70vw, 60vw"
                  priority
                />
              </div>
              <button
                className="absolute top-4 right-4 text-white hover:text-[#5197A6] transition-colors bg-black/50 rounded-full p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default ProductPage