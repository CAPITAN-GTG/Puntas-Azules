import React from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { cormorantGaramond } from './fonts'
import ErrorBoundary from './components/ErrorBoundary'
import ContactSection from './components/ContactSection'

// Dynamically import heavy components
const HeroSection = dynamic(() => import('./components/HeroSection'), {
  loading: () => <div className="h-screen bg-black" />
})

const FeaturedProducts = dynamic(() => import('./components/FeaturedProducts'), {
  loading: () => <div className="h-[500px] bg-black" />
})

const CategoriesGrid = dynamic(() => import('./components/CategoriesGrid'), {
  loading: () => <div className="h-[400px] bg-black" />
})

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#5197A6]"></div>
  </div>
)

const FrontPage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <HeroSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <FeaturedProducts />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <CategoriesGrid />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <ContactSection />
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}

export default FrontPage