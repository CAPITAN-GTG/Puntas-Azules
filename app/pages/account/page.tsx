"use client"
import React from 'react'
import Image from 'next/image'
import { ShoppingCart, User, LogOut, Plus, Minus, Trash2 } from 'lucide-react'
import { cormorantGaramond } from '../../fonts'
import { useCart } from '../../context/CartContext'

const AccountPage = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart()

  return (
    <main className="min-h-screen bg-white text-black py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <div className="h-px w-12 bg-[#5197A6] mr-4" />
            <span className="text-[#5197A6] font-light tracking-widest font-['Work_Sans']">MY ACCOUNT</span>
            <div className="h-px w-12 bg-[#5197A6] ml-4" />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-['Cinzel_Decorative']">
            Welcome Back
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-100 shadow-sm p-4 md:p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-[#5197A6]/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-[#5197A6]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold font-['Yeseva_One']">John Doe</h2>
                  <p className="text-gray-600 text-sm font-['Work_Sans']">john.doe@example.com</p>
                </div>
              </div>

              <button className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors rounded-lg font-['Work_Sans']">
                <LogOut className="h-4 w-4" />
                <span className="text-sm">Sign Out</span>
              </button>
            </div>
          </div>

          {/* Main Content - Cart */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 md:p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <ShoppingCart className="h-5 w-5 text-[#5197A6]" />
                  <h2 className="text-xl font-bold font-['Yeseva_One']">Shopping Cart</h2>
                </div>
              </div>

              {items.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-600 font-['Work_Sans']">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="divide-y divide-gray-200">
                    {items.map((item) => (
                      <div key={item.id} className="p-4 md:p-6 flex items-center space-x-4 md:space-x-6">
                        <div className="relative aspect-square w-20 md:w-24 flex-shrink-0 bg-gray-50">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            quality={90}
                            loading="lazy"
                            sizes="(max-width: 768px) 80px, 96px"
                          />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="text-base md:text-lg font-bold font-['Yeseva_One'] mb-1 truncate">
                            {item.name}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#5197A6] hover:bg-gray-50 transition-colors rounded-lg"
                              >
                                <Minus className="h-5 w-5" />
                              </button>
                              <span className="text-gray-700 font-['Work_Sans'] min-w-[2rem] text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#5197A6] hover:bg-gray-50 transition-colors rounded-lg"
                              >
                                <Plus className="h-5 w-5" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[#5197A6] font-bold font-['Playfair_Display'] text-lg">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 md:p-6 bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-['Work_Sans']">Total</span>
                      <span className="text-xl font-bold text-[#5197A6] font-['Playfair_Display']">${total.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-gray-900 text-white py-3 font-bold hover:scale-105 flex items-center justify-center space-x-2 shadow-lg transition-all duration-300">
                      <ShoppingCart className="h-5 w-5" />
                      <span>Proceed to Checkout</span>
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