'use client'

import React, { useState } from 'react'
import { FiSearch, FiMapPin, FiStar, FiCheck } from 'react-icons/fi'
import Link from 'next/link'

const ExpertsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSpecialization, setSelectedSpecialization] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [consultationType, setConsultationType] = useState('')

  const specializations = [
    'Doctor',
    'Therapist',
    'Psychologist',
    'Occupational Therapist',
    'Speech Therapist',
    'Special Education Teacher',
    'Behavioral Specialist',
  ]

  const locations = [
    'Lagos',
    'Abuja',
    'Accra',
    'Nairobi',
    'Kampala',
    'Johannesburg',
    'Cairo',
    'Dakar',
  ]

  const consultationTypes = [
    'Online',
    'Physical',
    'Phone',
  ]

  // Mock expert data
  const experts = [
    {
      id: 1,
      name: 'Dr. Adekunle Okafor',
      specialization: 'Pediatric Neurologist',
      rating: 4.9,
      reviews: 127,
      hourlyRate: '$50',
      location: 'Lagos',
      photo: '👨‍⚕️',
      consultationTypes: ['Online', 'Physical'],
      verified: true,
      bio: 'Specializing in autism and ADHD diagnosis and management',
    },
    {
      id: 2,
      name: 'Ameena Hassan',
      specialization: 'Speech Therapist',
      rating: 4.8,
      reviews: 98,
      hourlyRate: '$35',
      location: 'Accra',
      photo: '👩‍⚕️',
      consultationTypes: ['Online', 'Phone'],
      verified: true,
      bio: 'Expert in speech and language development for children',
    },
    {
      id: 3,
      name: 'Prof. Kofi Mensah',
      specialization: 'Occupational Therapist',
      rating: 4.7,
      reviews: 84,
      hourlyRate: '$45',
      location: 'Accra',
      photo: '👨‍⚕️',
      consultationTypes: ['Online', 'Physical'],
      verified: true,
      bio: 'Over 15 years experience in motor skills development',
    },
    {
      id: 4,
      name: 'Dr. Fatima Al-Rashid',
      specialization: 'Child Psychologist',
      rating: 4.9,
      reviews: 112,
      hourlyRate: '$55',
      location: 'Cairo',
      photo: '👩‍⚕️',
      consultationTypes: ['Online'],
      verified: true,
      bio: 'Specialized in behavioral and emotional support',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-white border-b border-neutral-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Find Healthcare Experts
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Connect with verified healthcare professionals across Africa. Book consultations in minutes.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-white border-b border-neutral-200 py-6 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <FiSearch className="absolute left-4 top-3.5 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search by name or specialization..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pl-12 w-full"
                />
              </div>
            </div>

            {/* Specialization Filter */}
            <div>
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="input-field w-full"
              >
                <option value="">All Specializations</option>
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="input-field w-full"
              >
                <option value="">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={consultationType}
                onChange={(e) => setConsultationType(e.target.value)}
                className="input-field w-full"
              >
                <option value="">All Types</option>
                {consultationTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Listings */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experts.map((expert) => (
            <div key={expert.id} className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="text-5xl">{expert.photo}</div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-lg text-neutral-900">{expert.name}</h3>
                      {expert.verified && (
                        <FiCheck className="w-5 h-5 text-secondary-600 bg-secondary-100 rounded-full p-0.5" />
                      )}
                    </div>
                    <p className="text-neutral-600 text-sm">{expert.specialization}</p>
                  </div>
                </div>
                <span className="font-bold text-primary-600">{expert.hourlyRate}/hr</span>
              </div>

              <p className="text-neutral-600 text-sm mb-4">{expert.bio}</p>

              <div className="space-y-3 mb-4 pb-4 border-b border-neutral-200">
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(expert.rating)
                            ? 'text-accent-500 fill-accent-500'
                            : 'text-neutral-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-neutral-900">{expert.rating}</span>
                  <span className="text-neutral-600 text-sm">({expert.reviews} reviews)</span>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 text-neutral-600 text-sm">
                  <FiMapPin className="w-4 h-4" />
                  <span>{expert.location}</span>
                </div>

                {/* Consultation Types */}
                <div className="flex items-center space-x-2">
                  {expert.consultationTypes.map((type) => (
                    <span key={type} className="badge-secondary text-xs">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/experts/${expert.id}`}
                className="btn-primary w-full text-center block"
              >
                View Profile & Book
              </Link>
            </div>
          ))}
        </div>

        {/* No results message */}
        {experts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-neutral-600">No experts found matching your filters.</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedSpecialization('')
                setSelectedLocation('')
                setConsultationType('')
              }}
              className="mt-4 text-primary-600 font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Expert You Need?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us and we'll help you find the right specialist for your needs.
          </p>
          <button className="px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-neutral-100 transition-colors">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  )
}

export default ExpertsPage
