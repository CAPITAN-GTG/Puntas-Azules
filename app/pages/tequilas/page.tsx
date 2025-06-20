"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingCart, MapPin, Leaf, Droplets, Award, Package, Scale, Box, Hash, Truck, Shield, Star } from 'lucide-react'
import { cormorantGaramond } from '../../fonts'
import { useCart } from '../../context/CartContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const products = [
  {
    id: 1,
    name: "Puntas Azules Blanco",
    image: "/whiskey-blanco-2.jpeg",
    price: 39.99,
    category: "Tequila Blanco 100% Agave",
    origin: "Tequila, Jalisco/Guadalajara, Jalisco",
    variety: "Agave Tequila Weber Blue Variety.",
    nom: "1431",
    distillation: "Still. Double Distilled.",
    flavor: "As a good Tequila should have, Agave cooked, Raw agave, Fruity, Strawberry, Tropical Fruits, Herbal, Caramel.",
    alcohol: "40%",
  },
  {
    id: 2,
    name: "Puntas Azules Reposado",
    image: "/whiskey-reposado-2.jpeg",
    price: 44.99,
    category: "Tequila Reposado 100% Agave",
    origin: "Tequila, Jalisco/Guadalajara, Jalisco",
    variety: "Agave Tequila Weber Blue Variety.",
    nom: "1431",
    distillation: "Still. Double Distilled.",
    flavor: "As a good Tequila should have, Agave cooked, Raw agave, Fruity, Strawberry, Tropical Fruits, Herbal, Caramel.",
    alcohol: "40%",
    specs: {
      ability: "750ML",
      dimensions: "7.00 X 7.00 X 35.00",
      weight: "1.30KM",
      boxCount: "12",
      upc: "7 503028 677207"
    }
  },
  {
    id: 3,
    name: "Puntas Azules Añejo",
    image: "/whiskey-anejo-2.jpeg",
    price: 49.99,
    category: "Tequila Anejo 100% Agave",
    origin: "Tequila, Jalisco/Guadalajara, Jalisco",
    variety: "Agave Tequila Weber Blue Variety.",
    nom: "1431",
    distillation: "Still. Double Distilled.",
    flavor: "As a good Tequila should have, Agave cooked, Raw agave, Fruity, Strawberry, Tropical Fruits, Herbal, Caramel.",
    alcohol: "40%",
    specs: {
      ability: "750ML",
      dimensions: "7.00 X 7.00 X 35.00",
      weight: "1.30KM",
      boxCount: "12",
      upc: "7 503028 677207"
    }
  }
]

const ProductPage = () => {
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
        background: '#ffffff',
        color: '#000',
        border: '1px solid #5197A6',
      }
    })
  }

  return (
    <main className="min-h-screen bg-white text-black py-8 md:py-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <div className="h-px w-12 bg-[#5197A6] mr-4" />
            <span className="text-[#5197A6] font-light tracking-widest font-['Work_Sans']">OUR TEQUILAS</span>
            <div className="h-px w-12 bg-[#5197A6] ml-4" />
          </div>
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-['Cinzel_Decorative']">
            Premium Selection
          </h1>
        </div>
      </div>

      {/* Products List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 md:space-y-20">
          {products.map((product, index) => (
            <div key={product.id} className="relative bg-white border border-gray-100 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start">
                {/* Image Section */}
                <div className="relative aspect-[4/5] md:aspect-[3/4] bg-gray-50">
                  <div className="absolute inset-0">
                    <Image
                      src={product.image}
                      alt={`${product.name} - ${product.category}`}
                      fill
                      className="object-contain"
                      quality={90}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6 p-4 md:p-6">
                  <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 font-['Yeseva_One']">
                      {product.name}
                    </h2>
                    <p className="text-[#5197A6] text-base md:text-xl font-['Playfair_Display']">{product.category}</p>
                  </div>

                  <div className="space-y-6 font-['Work_Sans']">
                    {/* Production Details */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Origin:</h4>
                          <p className="text-gray-700">{product.origin}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Category:</h4>
                          <p className="text-gray-700">{product.category}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Variety:</h4>
                          <p className="text-gray-700">{product.variety}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Nom:</h4>
                          <p className="text-gray-700">{product.nom}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Distillation:</h4>
                          <p className="text-gray-700">{product.distillation}</p>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-gray-200" />

                    {/* Flavor Profile */}
                    <div className="space-y-4">
                      <h3 className="text-base md:text-lg font-semibold text-gray-800 font-['Playfair_Display']">Flavor Profile</h3>
                      <p className="text-gray-700 leading-relaxed">{product.flavor}</p>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">ALC.VOL:</h4>
                        <p className="text-gray-700">{product.alcohol}</p>
                      </div>
                    </div>

                    {/* Price and Add to Cart */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
                      <div className="flex flex-col">
                        <span className="text-2xl md:text-3xl font-bold text-[#5197A6] font-['Playfair_Display']">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-600">Ships in 2-3 business days</span>
                      </div>
                      <motion.button 
                        onClick={(e) => handleAddToCart(e, product)}
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="w-full sm:w-auto bg-gray-900 text-white px-6 md:px-8 py-2 md:py-3 font-bold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 shadow-lg"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        <span>Add to Cart</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default ProductPage