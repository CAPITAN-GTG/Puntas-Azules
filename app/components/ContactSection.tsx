'use client'
import React, { useState } from 'react'
import { Mail, Send } from 'lucide-react'
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
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-[#5197A6]" />
            <Mail className="mx-6 h-8 w-8 text-[#5197A6]" />
            <div className="w-16 h-px bg-[#5197A6]" />
          </div>
          <h2 className={`text-3xl lg:text-4xl font-bold text-black mb-6 ${cormorantGaramond.className}`}>
            Stay Connected
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Be the first to know about new releases, exclusive events, and premium tequila insights.
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="bg-black/5 border border-black/10 p-8 lg:p-12">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="flex items-center justify-center mb-4">
                <Send className="h-8 w-8 text-[#5197A6]" />
              </div>
              <h3 className={`text-2xl font-bold text-[#5197A6] mb-3 ${cormorantGaramond.className}`}>
                ¡Gracias!
              </h3>
              <p className="text-gray-700">You're now part of the Puntas Azules family.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h3 className={`text-xl lg:text-2xl font-bold text-black mb-4 ${cormorantGaramond.className}`}>
                  Join Our Newsletter
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Get exclusive access to limited releases, tequila education, and special member pricing.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-black/10 border border-black/20 px-4 py-4 text-black placeholder-gray-600 focus:border-[#5197A6] focus:outline-none transition-colors text-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#5197A6] text-white py-4 px-6 font-bold hover:bg-[#5197A6]/90 transition-colors flex items-center justify-center group text-lg"
                >
                  <span>Subscribe to Newsletter</span>
                  <Send className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </>
          )}
        </div>

        {/* Legal Notice */}
        <div className="text-center mt-12 pt-8 border-t border-black/10">
          <p className="text-gray-500 text-sm">
            Puntas Azules Tequila. Please drink responsibly. Must be 21 or older.
          </p>
        </div>

      </div>
    </section>
  )
}

export default ContactSection 