"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Slider from 'react-slick'
import { Wine, ChevronRight, ChevronLeft, ArrowRight, Star, Sparkles, Gift, Award, ArrowDown } from 'lucide-react'
import { cormorantGaramond } from './fonts'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FrontPage = () => {
  const { scrollYProgress } = useScroll()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

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
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i: number) => (
      <div className="w-8 h-8 flex items-center justify-center">
        <Star
          className={`h-5 w-5 transition-all duration-300 ${
            i === currentSlide
              ? 'fill-cyan-400 text-cyan-400 scale-110'
              : 'text-gray-400 hover:text-cyan-400'
          }`}
        />
      </div>
    ),
  }

  const featuredProducts = [
    { id: 1, name: 'Premium Whiskey', image: '/pexel-images/1.jpg', price: '$89.99' },
    { id: 2, name: 'Vintage Wine', image: '/pexel-images/2.jpg', price: '$129.99' },
    { id: 3, name: 'Craft Gin', image: '/pexel-images/3.jpg', price: '$69.99' },
    { id: 4, name: 'Rare Tequila', image: '/pexel-images/4.jpg', price: '$149.99' },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Parallax */}
      <motion.div 
        className="relative h-screen"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="absolute inset-0">
          <Image
            src="/pexel-images/5.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        {/* Hero Content */}
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
                  <div className="h-px w-12 bg-cyan-400 mr-4" />
                  <span className="text-cyan-400 font-light tracking-widest">PREMIUM SPIRITS</span>
                </div>
                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${cormorantGaramond.className}`}>
                  Discover the Art of
                  <span className="block text-cyan-400 mt-2">Fine Spirits</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                  Curated collection of the world's finest spirits, delivered to your doorstep. 
                  Experience luxury in every sip.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-cyan-400 text-black px-8 py-4 font-semibold hover:bg-cyan-300 transition-colors flex items-center justify-center border border-transparent hover:border-cyan-400"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-transparent text-white px-8 py-4 font-semibold border border-white/20 hover:border-white/40 transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowDown className="ml-2 h-5 w-5" />
                  </motion.button>
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
                    { title: 'Premium Selection', icon: Wine },
                    { title: 'Worldwide Shipping', icon: Sparkles },
                    { title: 'Expert Curation', icon: Award },
                    { title: 'Exclusive Events', icon: Gift }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:border-cyan-400/50 transition-colors"
                    >
                      <feature.icon className="h-8 w-8 text-cyan-400 mb-4" />
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
              <ArrowDown className="h-6 w-6 text-cyan-400" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Products Slider */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-20 bg-cyan-400 mr-4" />
            <h2 className={`text-3xl md:text-4xl font-bold ${cormorantGaramond.className}`}>
              Featured Spirits
            </h2>
            <div className="h-px w-20 bg-cyan-400 ml-4" />
          </div>
          <div className="relative">
            <Slider {...sliderSettings} className="featured-slider">
              {featuredProducts.map((product) => (
                <div key={product.id} className="px-4">
                  <div className="relative h-[500px] rounded-none overflow-hidden group">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-all duration-500 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center mb-2">
                        <Sparkles className="h-5 w-5 text-cyan-400 mr-2" />
                        <h3 className={`text-2xl font-bold ${cormorantGaramond.className}`}>
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-cyan-400 text-xl mb-4">{product.price}</p>
                      <button className="text-white hover:text-cyan-400 transition-colors flex items-center border-b border-transparent hover:border-cyan-400 pb-1">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4 bg-black relative">
        <div className="absolute inset-0 bg-[url('/pexel-images/15.jpg')] bg-cover bg-center opacity-5" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center mb-6">
              <div className="h-px w-20 bg-cyan-400 mr-4" />
              <span className="text-cyan-400 font-light tracking-widest">OUR COLLECTION</span>
              <div className="h-px w-20 bg-cyan-400 ml-4" />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${cormorantGaramond.className}`}>
              Explore Categories
            </h2>
            <p className="text-gray-400 text-center max-w-2xl">
              Discover our carefully curated selection of premium spirits, each category representing the finest examples of their craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Whiskey', image: '/pexel-images/6.jpg', count: '120+ Products' },
              { name: 'Wine', image: '/pexel-images/7.jpg', count: '250+ Products' },
              { name: 'Gin', image: '/pexel-images/8.jpg', count: '80+ Products' },
              { name: 'Tequila', image: '/pexel-images/9.jpg', count: '60+ Products' },
              { name: 'Rum', image: '/pexel-images/10.jpg', count: '90+ Products' },
              { name: 'Vodka', image: '/pexel-images/11.jpg', count: '70+ Products' }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-[400px] overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-colors">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Category Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="mb-4">
                      <div className="h-px w-12 bg-cyan-400 mb-4" />
                      <h3 className={`text-3xl font-bold mb-2 ${cormorantGaramond.className}`}>
                        {category.name}
                      </h3>
                      <p className="text-cyan-400 text-sm tracking-wider">
                        {category.count}
                      </p>
                    </div>
                    
                    {/* Hover Content */}
                    <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="h-px w-full bg-white/20 mb-4" />
                      <p className="text-gray-300 mb-6">
                        Explore our premium selection of {category.name.toLowerCase()}, featuring rare finds and exclusive releases.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-white hover:text-cyan-400 transition-colors flex items-center border-b border-transparent hover:border-cyan-400 pb-1"
                      >
                        View Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Categories Button */}
          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent text-white px-8 py-4 font-semibold border border-white/20 hover:border-white/40 transition-colors flex items-center justify-center mx-auto"
            >
              View All Categories
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Redesigned */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pexel-images/15.jpg')] bg-cover bg-center opacity-10" />
        <div className="max-w-5xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="flex items-center mb-6">
                <Gift className="h-6 w-6 text-cyan-400 mr-3" />
                <h2 className={`text-3xl md:text-4xl font-bold ${cormorantGaramond.className}`}>
                  Join Our Newsletter
                </h2>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Subscribe to receive updates on new arrivals, special offers, and exclusive events. 
                Be the first to know about our premium selections.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <Award className="h-4 w-4 text-cyan-400 mr-2" />
                  Exclusive member discounts
                </li>
                <li className="flex items-center text-gray-300">
                  <Award className="h-4 w-4 text-cyan-400 mr-2" />
                  Early access to new releases
                </li>
                <li className="flex items-center text-gray-300">
                  <Award className="h-4 w-4 text-cyan-400 mr-2" />
                  VIP event invitations
                </li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-8 border border-gray-800">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-800 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-cyan-400 text-black px-8 py-3 font-semibold hover:bg-cyan-300 transition-colors flex items-center justify-center"
                >
                  Subscribe Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FrontPage