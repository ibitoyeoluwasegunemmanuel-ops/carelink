import React from 'react'
import Link from 'next/link'
import { FiArrowRight, FiPhone } from 'react-icons/fi'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block badge text-sm">🌍 Supporting Families Across Africa</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Connect, Learn, and <span className="text-gradient">Support</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed">
                CareLink Africa is your comprehensive platform for connecting families and caregivers of children with special needs with experts, resources, and community support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/auth/signup" className="btn-primary flex items-center justify-center space-x-2">
                <span>Get Started Free</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-outline flex items-center justify-center space-x-2">
                <FiPhone className="w-5 h-5" />
                <span>Call Us</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
              <div>
                <p className="text-3xl font-bold text-primary-600">5K+</p>
                <p className="text-sm text-neutral-600 mt-1">Families Supported</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary-600">800+</p>
                <p className="text-sm text-neutral-600 mt-1">Verified Experts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-600">12</p>
                <p className="text-sm text-neutral-600 mt-1">Countries</p>
              </div>
            </div>
          </div>

          {/* Illustration Placeholder */}
          <div className="relative h-96 sm:h-[500px] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-8 text-center px-8">
                <div className="space-y-4">
                  <div className="inline-block w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-3xl">
                    👨‍👩‍👧‍👦
                  </div>
                  <div className="inline-block w-20 h-20 bg-secondary-600 rounded-full flex items-center justify-center text-white text-3xl">
                    👨‍⚕️
                  </div>
                  <div className="inline-block w-20 h-20 bg-accent-600 rounded-full flex items-center justify-center text-white text-3xl">
                    📚
                  </div>
                </div>
                <p className="text-neutral-700 font-semibold">Families, Experts & Resources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
