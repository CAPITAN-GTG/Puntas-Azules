'use client'
import React from 'react'
import { Clock, Droplets, TreePine, Award } from 'lucide-react'
import { cormorantGaramond } from '../fonts'

const MakingOfSection = () => {
  const tequilaTypes = [
    {
      name: 'Blanco',
      agingTime: 'Unaged',
      icon: Droplets,
      description: 'Pure and unaged, capturing the true essence of blue agave. Bottled immediately after distillation to preserve maximum agave character.',
      process: 'Double distilled in copper pot stills, filtered and bottled within 60 days.',
      characteristics: ['Crystal clear', 'Pure agave flavor', 'Crisp finish', 'Citrus notes']
    },
    {
      name: 'Reposado',
      agingTime: '2-12 Months',
      icon: TreePine,
      description: 'Aged in charred American oak barrels, achieving perfect balance between agave and wood flavors.',
      process: 'Rested in seasoned oak barrels, allowing controlled oxidation and flavor development.',
      characteristics: ['Golden color', 'Balanced flavor', 'Smooth texture', 'Vanilla notes']
    },
    {
      name: 'Añejo',
      agingTime: '1-3 Years',
      icon: Award,
      description: 'Extended aging creates sophisticated complexity and depth, representing the pinnacle of tequila craftsmanship.',
      process: 'Matured in premium oak barrels with careful monitoring for optimal flavor integration.',
      characteristics: ['Rich amber', 'Complex layers', 'Silky texture', 'Dark chocolate notes']
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-[#5197A6]" />
            <Clock className="mx-6 h-8 w-8 text-[#5197A6]" />
            <div className="w-16 h-px bg-[#5197A6]" />
          </div>
          <h2 className={`text-3xl lg:text-4xl font-bold text-white mb-6 ${cormorantGaramond.className}`}>
            The Art of Making
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three distinct expressions, each crafted with time-honored techniques
          </p>
        </div>

        {/* Tequila Types */}
        <div className="space-y-12 lg:space-y-16">
          {tequilaTypes.map((type, index) => (
            <div 
              key={type.name}
              className="border-l-4 border-[#5197A6] pl-6 lg:pl-12"
            >
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-12">
                
                {/* Title Section */}
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <type.icon className="h-6 w-6 text-[#5197A6] mr-3" />
                    <span className="text-[#5197A6] text-sm font-medium uppercase tracking-wider">
                      {type.agingTime}
                    </span>
                  </div>
                  <h3 className={`text-4xl lg:text-5xl font-bold text-white mb-4 ${cormorantGaramond.className}`}>
                    {type.name}
                  </h3>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2 space-y-6">
                  
                  {/* Description */}
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3 uppercase tracking-wide">
                      Description
                    </h4>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {type.description}
                    </p>
                  </div>

                  {/* Process */}
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3 uppercase tracking-wide">
                      Process
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {type.process}
                    </p>
                  </div>

                  {/* Characteristics */}
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3 uppercase tracking-wide">
                      Characteristics
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {type.characteristics.map((char, charIndex) => (
                        <div key={charIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-[#5197A6] mr-3 flex-shrink-0" />
                          <span className="text-gray-400">{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20 lg:mt-24 pt-16 border-t border-white/10">
          <h3 className={`text-2xl lg:text-3xl font-bold text-white mb-6 ${cormorantGaramond.className}`}>
            Generations of Expertise
          </h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            From highland agave fields to your glass, every step is carefully orchestrated 
            to deliver an exceptional tequila experience rooted in tradition.
          </p>
        </div>

      </div>
    </section>
  )
}

export default MakingOfSection 