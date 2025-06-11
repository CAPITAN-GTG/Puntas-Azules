"use client"
import React from 'react'
import Image from 'next/image'
import { ShoppingCart, User, LogOut } from 'lucide-react'
import { cormorantGaramond } from '../../fonts'
import { useCart } from '../../context/CartContext'

const AccountPage = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart()

      return (
    <main className="min-h-screen bg-white text-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-[#5197A6] mr-4" />
            <span className="text-[#5197A6] font-light tracking-widest">MY ACCOUNT</span>
            <div className="h-px w-12 bg-[#5197A6] ml-4" />
          </div>
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${cormorantGaramond.className}`}>
            Welcome Back
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-black/5 backdrop-blur-sm rounded-lg p-4 border border-black/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-[#5197A6]/20 flex items-center justify-center">
                  <User className="h-6 w-6 text-[#5197A6]" />
                </div>
                <div>
                  <h2 className={`text-lg font-bold ${cormorantGaramond.className}`}>John Doe</h2>
                  <p className="text-gray-600 text-sm">john.doe@example.com</p>
                </div>
              </div>

              <button className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-black/5 transition-colors rounded-lg">
                <LogOut className="h-4 w-4" />
                <span className="text-sm">Sign Out</span>
              </button>
            </div>
          </div>

          {/* Main Content - Cart */}
          <div className="lg:col-span-2">
            <div className="bg-black/5 backdrop-blur-sm rounded-lg border border-black/10 overflow-hidden">
              <div className="p-4 border-b border-black/10">
                <div className="flex items-center space-x-3">
                  <ShoppingCart className="h-5 w-5 text-[#5197A6]" />
                  <h2 className={`text-xl font-bold ${cormorantGaramond.className}`}>Shopping Cart</h2>
                </div>
              </div>

              {items.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-600">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="divide-y divide-black/10">
                    {items.map((item) => (
                      <div key={item.id} className="p-4 flex items-center space-x-4">
                        <div className="relative h-16 w-16 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain rounded-lg p-1"
                            quality={50}
                            loading="lazy"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className={`text-base font-bold mb-1 ${cormorantGaramond.className}`}>
                            {item.name}
                          </h3>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="text-gray-600 hover:text-[#5197A6] transition-colors text-lg"
                              >
                                -
                              </button>
                              <span className="text-gray-700 text-sm">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="text-gray-600 hover:text-[#5197A6] transition-colors text-lg"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-xs text-gray-600 hover:text-red-600 transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[#5197A6] font-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-black/5">
                    <div className="flex justify-between items-center mb-4">
                      <span>Total</span>
                      <span className="text-xl font-bold text-[#5197A6]">${total.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-[#5197A6] text-white py-2 rounded-lg font-bold hover:bg-[#5197A6]/90 transition-colors">
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AccountPage