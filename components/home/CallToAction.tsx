import React from 'react'
import Link from 'next/link'
import { FiArrowRight, FiHeart, FiUsers, FiBook } from 'react-icons/fi'

const CallToAction = () => {
  const ctas = [
    {
      icon: FiUsers,
      title: 'Find an Expert',
      description: 'Connect with qualified healthcare professionals and specialists',
      href: '/experts',
      color: 'primary',
    },
    {
      icon: FiBook,
      title: 'Learn & Grow',
      description: 'Access comprehensive resources and educational materials',
      href: '/learn',
      color: 'secondary',
    },
    {
      icon: FiHeart,
      title: 'Make a Difference',
      description: 'Support families through donations and volunteer service',
      href: '/donate',
      color: 'accent',
    },
  ]

  const bgClasses: Record<string, string> = {
    primary: 'bg-primary-600 hover:bg-primary-700',
    secondary: 'bg-secondary-600 hover:bg-secondary-700',
    accent: 'bg-accent-600 hover:bg-accent-700',
  }

  const borderClasses: Record<string, string> = {
    primary: 'border-primary-600',
    secondary: 'border-secondary-600',
    accent: 'border-accent-600',
  }

  return (
    <section className="section-container bg-neutral-900">
      <div className="mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Take Your Next Step
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Whether you\'re looking for expert care, educational resources, or ways to support others, CareLink Africa has you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {ctas.map((cta) => {
          const Icon = cta.icon

          return (
            <Link key={cta.title} href={cta.href}>
              <div className={`p-8 rounded-xl border-2 ${borderClasses[cta.color]} border-opacity-30 bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer group`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${bgClasses[cta.color]} text-white`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cta.title}</h3>
                <p className="text-neutral-400 mb-4">{cta.description}</p>
                <span className={`inline-flex items-center space-x-2 font-semibold`}>
                  <span className="group-hover:translate-x-1 transition-transform">Get Started</span>
                  <FiArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 sm:p-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Emergency Support?</h3>
            <p className="text-lg opacity-95 mb-6">
              If you or someone you know needs immediate assistance, please reach out to our emergency support team.
            </p>
            <button className="px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-neutral-100 transition-colors">
              Contact Emergency Support
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold mb-2">24/7</p>
              <p className="text-sm opacity-90">Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">100+</p>
              <p className="text-sm opacity-90">Countries</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">10K+</p>
              <p className="text-sm opacity-90">Resources</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">Free</p>
              <p className="text-sm opacity-90">Basic Access</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-neutral-400 mb-6">
          Ready to transform your family\'s support system?
        </p>
        <Link href="/auth/signup" className="inline-flex items-center space-x-2 px-8 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors">
          <span>Start Your Free Trial</span>
          <FiArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}

export default CallToAction
