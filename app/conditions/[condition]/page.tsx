'use client'

import React from 'react'
import Link from 'next/link'
import { FiArrowLeft, FiUsers, FiBook, FiCheckCircle } from 'react-icons/fi'

const ConditionDetailPage = ({ params }: { params: { condition: string } }) => {
  const conditionData: Record<string, any> = {
    autism: {
      name: 'Autism Spectrum Disorder',
      icon: '🧠',
      description: 'A developmental disability affecting communication and behavior',
      resources: 142,
      experts: 234,
    },
    adhd: {
      name: 'ADHD',
      icon: '⚡',
      description: 'Attention-deficit/hyperactivity disorder affecting focus and impulse control',
      resources: 98,
      experts: 167,
    },
    'down-syndrome': {
      name: 'Down Syndrome',
      icon: '❤️',
      description: 'Genetic condition causing intellectual and developmental delays',
      resources: 87,
      experts: 145,
    },
    'cerebral-palsy': {
      name: 'Cerebral Palsy',
      icon: '🏃',
      description: 'Movement and posture disorder resulting from brain damage before/during birth',
      resources: 76,
      experts: 128,
    },
    'speech-disorders': {
      name: 'Speech Disorders',
      icon: '🗣️',
      description: 'Difficulties with speech sound production and language development',
      resources: 93,
      experts: 156,
    },
  }

  const condition = conditionData[params.condition]

  if (!condition) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Condition Not Found</h1>
          <Link href="/conditions" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to All Conditions
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/conditions" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6">
            <FiArrowLeft className="mr-2" /> Back to Conditions
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="mr-3">{condition.icon}</span>
            {condition.name}
          </h1>
          <p className="text-xl text-gray-700 mb-8">{condition.description}</p>

          <div className="flex space-x-8">
            <div className="flex items-center space-x-3">
              <FiBook className="text-2xl text-blue-600" />
              <div>
                <div className="text-3xl font-bold text-gray-900">{condition.resources}</div>
                <div className="text-gray-600">Resources & Articles</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FiUsers className="text-2xl text-blue-600" />
              <div>
                <div className="text-3xl font-bold text-gray-900">{condition.experts}</div>
                <div className="text-gray-600">Verified Experts</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* What is it? */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is {condition.name}?</h2>
          <p className="text-lg text-gray-700 mb-4">
            {condition.description}
          </p>
          <p className="text-gray-600 mb-4">
            This section contains comprehensive information about the condition, including causes, symptoms, diagnosis, and treatment options.
          </p>
        </div>

        {/* Key Points */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Points</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Early intervention and support can significantly improve outcomes</span>
            </li>
            <li className="flex items-start space-x-3">
              <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Each person's experience is unique - individualized approaches are essential</span>
            </li>
            <li className="flex items-start space-x-3">
              <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Family support and education are crucial for success</span>
            </li>
            <li className="flex items-start space-x-3">
              <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Professional guidance from verified experts can help create effective strategies</span>
            </li>
          </ul>
        </div>

        {/* Get Help */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Professional Support</h2>
          <p className="text-gray-700 mb-6">
            Connect with our verified experts who specialize in {condition.name.toLowerCase()}
          </p>
          <Link href="/experts" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Find an Expert
          </Link>
        </div>

        {/* Resources */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Resources & Articles</h2>
          <p className="text-gray-600 mb-6">
            Explore {condition.resources} articles and resources about {condition.name.toLowerCase()}
          </p>
          <Link href="/learn" className="text-blue-600 font-semibold hover:text-blue-700">
            Browse Learning Center →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ConditionDetailPage
