'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiSearch, FiArrowRight } from 'react-icons/fi'

const ConditionsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const allConditions = [
    {
      name: 'Autism Spectrum Disorder',
      slug: 'autism',
      icon: '🧠',
      description: 'A developmental disability affecting communication and behavior',
      resources: 142,
      experts: 234,
    },
    {
      name: 'ADHD',
      slug: 'adhd',
      icon: '⚡',
      description: 'Attention-deficit/hyperactivity disorder affecting focus and impulse control',
      resources: 98,
      experts: 167,
    },
    {
      name: 'Down Syndrome',
      slug: 'down-syndrome',
      icon: '❤️',
      description: 'Genetic condition causing intellectual and developmental delays',
      resources: 87,
      experts: 145,
    },
    {
      name: 'Cerebral Palsy',
      slug: 'cerebral-palsy',
      icon: '🏃',
      description: 'Movement and posture disorder resulting from brain damage before/during birth',
      resources: 76,
      experts: 128,
    },
    {
      name: 'Speech Disorders',
      slug: 'speech-disorders',
      icon: '🗣️',
      description: 'Difficulties with speech sound production and language development',
      resources: 93,
      experts: 156,
    },
    {
      name: 'Learning Disabilities',
      slug: 'learning-disabilities',
      icon: '📖',
      description: 'Neurological differences affecting reading, writing, or math abilities',
      resources: 112,
      experts: 189,
    },
    {
      name: 'Hearing Impairments',
      slug: 'hearing-impairments',
      icon: '👂',
      description: 'Complete or partial hearing loss affecting communication development',
      resources: 64,
      experts: 98,
    },
    {
      name: 'Visual Impairments',
      slug: 'visual-impairments',
      icon: '👁️',
      description: 'Complete or partial vision loss requiring adaptive strategies',
      resources: 58,
      experts: 87,
    },
    {
      name: 'Cerebral Palsy',
      slug: 'cerebral-palsy-alt',
      icon: '💪',
      description: 'Motor coordination and movement challenges',
      resources: 71,
      experts: 134,
    },
    {
      name: 'Intellectual Disabilities',
      slug: 'intellectual-disabilities',
      icon: '🎓',
      description: 'Significant limitations in intellectual functioning and adaptive behavior',
      resources: 105,
      experts: 178,
    },
    {
      name: 'Dyslexia',
      slug: 'dyslexia',
      icon: '📝',
      description: 'Specific learning disability affecting reading and spelling',
      resources: 82,
      experts: 142,
    },
    {
      name: 'Epilepsy',
      slug: 'epilepsy',
      icon: '⚕️',
      description: 'Neurological disorder characterized by recurring seizures',
      resources: 88,
      experts: 152,
    },
  ]

  const filteredConditions = allConditions.filter((condition) =>
    condition.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    condition.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-white border-b border-neutral-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Conditions Directory
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Comprehensive information and resources for various conditions and special needs. Find expert guides, treatment options, and support for each condition.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="bg-white border-b border-neutral-200 py-6 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <FiSearch className="absolute left-4 top-3.5 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search conditions by name or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-12 w-full"
            />
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="section-container">
        {filteredConditions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
              >
                <div className="card-hover h-full p-6 sm:p-8">
                  <div className="text-6xl mb-4">{condition.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {condition.name}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    {condition.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
                    <div>
                      <p className="font-bold text-primary-600">{condition.resources}+</p>
                      <p className="text-xs text-neutral-600">Resources</p>
                    </div>
                    <div>
                      <p className="font-bold text-secondary-600">{condition.experts}+</p>
                      <p className="text-xs text-neutral-600">Experts</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center space-x-2 text-primary-600 font-semibold mt-6 group">
                    <span>Learn More</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-neutral-600 mb-4">
              No conditions found matching "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-primary-600 font-semibold hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </section>

      {/* Additional Resources */}
      <section className="bg-primary-50 section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our expert team is here to help. Contact us for personalized guidance on any condition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              🔍
            </div>
            <h3 className="font-bold text-neutral-900 mb-2">Expert Guides</h3>
            <p className="text-neutral-600 text-sm">
              Detailed guides written by healthcare professionals
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              📚
            </div>
            <h3 className="font-bold text-neutral-900 mb-2">Resources</h3>
            <p className="text-neutral-600 text-sm">
              Articles, videos, and downloadable materials
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              👥
            </div>
            <h3 className="font-bold text-neutral-900 mb-2">Community</h3>
            <p className="text-neutral-600 text-sm">
              Connect with families and support groups
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our AI Care Assistant can help you find answers immediately, or connect with an expert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-neutral-100 transition-colors">
              Ask AI Assistant
            </button>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConditionsPage
