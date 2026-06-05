import React from 'react'
import Link from 'next/link'
import { FiUsers, FiBookOpen, FiTrendingUp, FiHeart, FiAward, FiMessageSquare } from 'react-icons/fi'

const FeaturesSection = () => {
  const features = [
    {
      icon: FiUsers,
      title: 'Expert Directory',
      description: 'Connect with verified doctors, therapists, psychologists, and specialists across Africa.',
      href: '/experts',
      color: 'primary'
    },
    {
      icon: FiBookOpen,
      title: 'Learning Center',
      description: 'Access comprehensive guides, articles, videos, and resources for parents and caregivers.',
      href: '/learn',
      color: 'secondary'
    },
    {
      icon: FiMessageSquare,
      title: 'Community Forums',
      description: 'Join support groups and connect with other families going through similar journeys.',
      href: '/forums',
      color: 'accent'
    },
    {
      icon: FiTrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your child\'s milestones, therapy records, and development over time.',
      href: '/dashboard',
      color: 'primary'
    },
    {
      icon: FiHeart,
      title: 'Donations & Support',
      description: 'Support families through financial donations, equipment donations, or volunteer services.',
      href: '/donate',
      color: 'secondary'
    },
    {
      icon: FiAward,
      title: 'AI Care Assistant',
      description: 'Get instant answers to common questions and personalized guidance from our AI assistant.',
      href: '/assistant',
      color: 'accent'
    },
  ]

  const colorClasses: Record<string, string> = {
    primary: 'bg-primary-100 text-primary-600',
    secondary: 'bg-secondary-100 text-secondary-600',
    accent: 'bg-accent-100 text-accent-600',
  }

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <span className="badge text-sm">Core Features</span>
        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mt-4 mb-4">
          Everything You Need in One Platform
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          CareLink Africa brings together families, experts, resources, and support systems to create a comprehensive ecosystem for special needs families.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature) => {
          const Icon = feature.icon
          const bgColor = colorClasses[feature.color]

          return (
            <Link key={feature.title} href={feature.href}>
              <div className="card-hover h-full p-6 sm:p-8">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${bgColor}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">{feature.description}</p>
                <span className="inline-block text-primary-600 font-semibold hover:text-primary-700">
                  Learn more →
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 sm:p-12 mt-16 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h3>
        <p className="text-lg mb-8 opacity-95">
          Start connecting with experts and families today. Create your free account now.
        </p>
        <Link href="/auth/signup" className="inline-block px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-neutral-100 transition-colors">
          Create Free Account
        </Link>
      </div>
    </section>
  )
}

export default FeaturesSection
