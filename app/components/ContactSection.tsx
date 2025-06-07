'use client'
import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react'
import { cormorantGaramond } from '../fonts'

const ContactSection = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-[#5197A6] mr-4" />
            <span className="text-[#5197A6] font-light tracking-widest text-sm">STAY CONNECTED</span>
            <div className="h-px w-12 bg-[#5197A6] ml-4" />
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${cormorantGaramond.className}`}>
            Join the Puntas Azules Family
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Be the first to know about new releases, exclusive events, and premium tequila insights.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Newsletter Signup */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10">
            <div className="flex items-center mb-6">
              <Mail className="h-6 w-6 text-[#5197A6] mr-3" />
              <h3 className={`text-2xl font-bold ${cormorantGaramond.className}`}>
                Newsletter Signup
              </h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Get exclusive access to limited releases, tequila education, and special member pricing. 
              Join thousands of tequila enthusiasts who trust Puntas Azules.
            </p>

            {isSubmitted ? (
              <div className="bg-[#5197A6]/10 border border-[#5197A6]/30 rounded-lg p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <Send className="h-6 w-6 text-[#5197A6]" />
                </div>
                <h4 className="text-[#5197A6] font-bold mb-2">¡Gracias!</h4>
                <p className="text-gray-300 text-sm">You're now part of the Puntas Azules family.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-none px-4 py-3 text-white placeholder-gray-400 focus:border-[#5197A6] focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#5197A6] text-black py-3 px-6 font-bold hover:bg-[#5197A6]/90 transition-colors flex items-center justify-center group"
                >
                  <span>Subscribe to Newsletter</span>
                  <Send className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-4">Follow us for daily inspiration</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#5197A6] transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#5197A6] transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#5197A6] transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${cormorantGaramond.className}`}>
                Get in Touch
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Questions about our tequilas? Need help with your order? Our team of tequila experts 
                is here to help you discover the perfect expression for any occasion.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#5197A6]/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-[#5197A6]" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Call Us</h4>
                  <p className="text-gray-300">1-800-PUNTAS-1</p>
                  <p className="text-sm text-gray-400">Mon-Fri, 9AM-6PM PST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#5197A6]/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-[#5197A6]" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email Us</h4>
                  <p className="text-gray-300">hello@puntasazules.com</p>
                  <p className="text-sm text-gray-400">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#5197A6]/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-[#5197A6]" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Visit Our Distillery</h4>
                  <p className="text-gray-300">Jalisco, Mexico</p>
                  <p className="text-sm text-gray-400">Tours available by appointment</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/5 border border-white/10 p-6 mt-8">
              <h4 className={`text-lg font-bold mb-2 ${cormorantGaramond.className}`}>
                Ready to Experience Premium Tequila?
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Shop our collection or learn more about our craft
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/pages/tequilas"
                  className="bg-[#5197A6] text-black px-6 py-2 font-bold hover:bg-[#5197A6]/90 transition-colors text-center text-sm"
                >
                  Shop Now
                </a>
                <a
                  href="/pages/about"
                  className="border border-[#5197A6] text-[#5197A6] px-6 py-2 font-bold hover:bg-[#5197A6] hover:text-black transition-colors text-center text-sm"
                >
                  Our Story
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            Puntas Azules Tequila. 40% Alc./Vol. (80 proof). Please drink responsibly. Must be 21 or older to purchase.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 