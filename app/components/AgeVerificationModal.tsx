"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AgeVerificationModal = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already verified their age in this session
    const hasVerified = sessionStorage.getItem('ageVerified')
    if (!hasVerified) {
      setIsVisible(true)
    }
  }, [])

  const handleYes = () => {
    sessionStorage.setItem('ageVerified', 'true')
    setIsVisible(false)
  }

  const handleNo = () => {
    window.location.href = 'https://www.responsibility.org/'
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white shadow-2xl max-w-md w-full p-8 text-center border border-gray-200"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-black mb-2">Age Verification</h2>
              <p className="text-gray-600 text-sm">
                You must be 21 years or older to enter this website.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-lg text-black font-medium">
                Are you 21 years of age or older?
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <button
                onClick={handleYes}
                className="flex-1 bg-none outline-2 outline-[#5197A6] text-[#5197A6] px-6 py-4 font-bold hover:bg-black hover:text-white hover:outline-0 transition-colors"
              >
                YES
              </button>
              <button
                onClick={handleNo}
                className="flex-1 bg-none outline-2 outline-[#5197A6] text-[#5197A6] px-6 py-4 font-bold hover:bg-black hover:text-white hover:outline-0 transition-colors"
              >
                NO
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              By entering this website, you certify that you are of legal drinking age in your location of residence.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AgeVerificationModal 