import React from 'react'
import Link from 'next/link'

const ConditionsDirectory = () => {
  const conditions = [
    { name: 'Autism Spectrum', icon: '🧠', slug: 'autism' },
    { name: 'ADHD', icon: '⚡', slug: 'adhd' },
    { name: 'Down Syndrome', icon: '❤️', slug: 'down-syndrome' },
    { name: 'Cerebral Palsy', icon: '🏃', slug: 'cerebral-palsy' },
    { name: 'Speech Disorders', icon: '🗣️', slug: 'speech-disorders' },
    { name: 'Learning Disabilities', icon: '📖', slug: 'learning-disabilities' },
    { name: 'Hearing Impairments', icon: '👂', slug: 'hearing-impairments' },
    { name: 'Visual Impairments', icon: '👁️', slug: 'visual-impairments' },
    { name: 'Developmental Disorders', icon: '🌱', slug: 'developmental-disorders' },
    { name: 'Epilepsy', icon: '⚕️', slug: 'epilepsy' },
    { name: 'Cerebral Palsy', icon: '💪', slug: 'cerebral-palsy' },
    { name: 'Intellectual Disabilities', icon: '🎓', slug: 'intellectual-disabilities' },
  ]

  return (
    <section className="section-container bg-neutral-50">
      <div className="text-center mb-16">
        <span className="badge text-sm">Conditions We Support</span>
        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mt-4 mb-4">
          Comprehensive Conditions Directory
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Find expert guides, resources, and support for various conditions and special needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {conditions.map((condition) => (
          <Link key={condition.slug} href={`/conditions/${condition.slug}`}>
            <div className="card-hover p-6 text-center">
              <div className="text-4xl mb-3">{condition.icon}</div>
              <h3 className="font-semibold text-neutral-900 mb-2">{condition.name}</h3>
              <span className="inline-block text-sm text-primary-600 font-semibold hover:text-primary-700">
                Learn more →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/conditions" className="btn-secondary">
          View All Conditions
        </Link>
      </div>
    </section>
  )
}

export default ConditionsDirectory
