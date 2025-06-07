"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Wine, Award, Leaf, Heart } from 'lucide-react'
import { cormorantGaramond } from '../../fonts'

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/whiskey-types.jpg"
            alt="Agave Fields"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-12 bg-[#5197A6] mr-4" />
                <span className="text-[#5197A6] font-light tracking-widest">OUR STORY</span>
                <div className="h-px w-12 bg-[#5197A6] ml-4" />
              </div>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${cormorantGaramond.className}`}>
                Puntas Azules
                <span className="block text-[#5197A6] mt-2">Tequila & Mezcal</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Introduction */}
            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Born from generations of artisanal tradition, Puntas Azules represents the heart of Mexico's spirit culture. 
                Our journey began in the rugged highlands of Jalisco and the wild, volcanic valleys of Durango, where the 
                agave plant has long been respected as a sacred gift of the land.
              </p>
            </motion.div>

            {/* Name Origin */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#5197A6]/20" />
              <div className="pl-8">
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${cormorantGaramond.className}`}>
                  The Name
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  The name "Puntas Azules" comes from the puntas—the first and most potent drops of distillation, 
                  rich in flavor and tradition—and the blue hues of the Blue Weber and wild agave fields under the 
                  Mexican sun. Every bottle reflects our commitment to craftsmanship, purity, and respect for the land.
                </p>
              </div>
            </motion.div>

            {/* Production Process */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${cormorantGaramond.className}`}>
                  Our Process
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We produce our Tequila following strict NOM standards, using only fully matured Blue Weber agave, 
                  cooked in stone ovens and distilled in small batches to preserve its character. Our Mezcal Joven, 
                  handcrafted in Durango, honors ancestral techniques with wild agave roasted in earthen pits, 
                  fermented naturally, and distilled slowly to capture the soul of the region.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/background.jpg"
                  alt="Production Process"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={75}
                />
              </div>
            </motion.div>

            {/* Values */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Wine, title: 'Tradition', description: 'Honoring centuries of craftsmanship' },
                { icon: Award, title: 'Quality', description: 'Uncompromising standards' },
                { icon: Leaf, title: 'Sustainability', description: 'Respect for the land' },
                { icon: Heart, title: 'Passion', description: 'Love for the craft' }
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:border-[#5197A6]/50 transition-colors"
                >
                  <value.icon className="h-8 w-8 text-[#5197A6] mb-4" />
                  <h3 className={`text-lg font-bold mb-2 ${cormorantGaramond.className}`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Conclusion */}
            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Puntas Azules is more than a drink—it's a celebration of Mexico's heritage, intended to be savored 
                and shared. We invite you to discover the bold elegance of our spirits—authentic, modern, and made with pride.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage