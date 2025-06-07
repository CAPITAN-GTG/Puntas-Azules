"use client"
import React from 'react'
import { ShoppingCart, User, LogOut } from 'lucide-react'
import { cormorantGaramond } from '../../fonts'
import { useCart } from '../../context/CartContext'

const AccountPage = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart()

  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-[#5197A6] mr-4" />
            <span className="text-[#5197A6] font-light tracking-widest">MY ACCOUNT</span>
            <div className="h-px w-12 bg-[#5197A6] ml-4" />
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${cormorantGaramond.className}`}>
            Welcome Back
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-16 w-16 rounded-full bg-[#5197A6]/20 flex items-center justify-center">
                  <User className="h-8 w-8 text-[#5197A6]" />
                </div>
                <div>
                  <h2 className={`text-xl font-bold ${cormorantGaramond.className}`}>John Doe</h2>
                  <p className="text-gray-400">john.doe@example.com</p>
                </div>
              </div>

              <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors rounded-lg">
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          {/* Main Content - Cart */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <ShoppingCart className="h-6 w-6 text-[#5197A6]" />
                  <h2 className={`text-2xl font-bold ${cormorantGaramond.className}`}>Shopping Cart</h2>
                </div>
              </div>

              {items.length === 0 ? (
                <div className="p-12 text-center">
                  <p className="text-gray-400 text-lg">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="divide-y divide-white/10">
                    {items.map((item) => (
                      <div key={item.id} className="p-6 flex items-center space-x-6">
                        <div className="relative h-24 w-24 flex-shrink-0">
                          <div className="w-full h-full bg-red-600 rounded-lg" />
                        </div>
                        <div className="flex-grow">
                          <h3 className={`text-lg font-bold mb-1 ${cormorantGaramond.className}`}>
                            {item.name}
                          </h3>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="text-gray-400 hover:text-[#5197A6] transition-colors"
                              >
                                -
                              </button>
                              <span className="text-gray-300">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="text-gray-400 hover:text-[#5197A6] transition-colors"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-sm text-gray-400 hover:text-red-400 transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[#5197A6] font-bold text-lg">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-white/5">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg">Total</span>
                      <span className="text-2xl font-bold text-[#5197A6]">${total.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-[#5197A6] text-black py-3 rounded-lg font-bold hover:bg-[#5197A6]/90 transition-colors">
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