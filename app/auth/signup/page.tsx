'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const SignupPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userType, setUserType] = useState<'parent' | 'expert' | 'donor' | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    if (!userType) {
      setError('Please select your user type')
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    try {
      // TODO: Implement Supabase signup
      console.log({
        email,
        password,
        userType
      })
    } catch (err) {
      setError('Signup failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const userTypes = [
    {
      id: 'parent',
      title: 'Parent/Guardian',
      description: 'Find experts and track your child\'s progress',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      id: 'expert',
      title: 'Healthcare Professional',
      description: 'Connect with families and provide consultation',
      icon: '👨‍⚕️',
    },
    {
      id: 'donor',
      title: 'Donor/Volunteer',
      description: 'Support families with donations or volunteering',
      icon: '❤️',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Join CareLink Africa
          </h1>
          <p className="text-lg text-neutral-600">
            Create your account and start connecting with our community
          </p>
        </div>

        {/* User Type Selection */}
        {!userType && (
          <div className="space-y-6 mb-12">
            <p className="text-center font-semibold text-neutral-700">I am a...</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {userTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setUserType(type.id as any)}
                  className="p-6 border-2 border-neutral-200 rounded-xl hover:border-primary-600 hover:bg-primary-50 transition-all text-left card-hover"
                >
                  <div className="text-4xl mb-3">{type.icon}</div>
                  <h3 className="font-bold text-neutral-900 mb-2">{type.title}</h3>
                  <p className="text-sm text-neutral-600">{type.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Signup Form */}
        {userType && (
          <div className="card p-8 sm:p-12">
            <div className="mb-8">
              <button
                onClick={() => setUserType(null)}
                className="text-primary-600 hover:text-primary-700 font-semibold text-sm mb-4"
              >
                ← Change user type
              </button>
              <h2 className="text-2xl font-bold text-neutral-900">
                Create Your {userTypes.find(t => t.id === userType)?.title} Account
              </h2>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="label-field">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="label-field">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="input-field"
                  required
                  minLength={8}
                />
              </div>

              <div>
                <label className="label-field">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="input-field"
                  required
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-5 h-5 mt-1"
                  required
                />
                <label htmlFor="terms" className="text-sm text-neutral-600">
                  I agree to the{' '}
                  <Link href="/terms" className="text-primary-600 hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-primary-600 hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <span>{isLoading ? 'Creating Account...' : 'Create Account'}</span>
                {!isLoading && <FiArrowRight className="w-5 h-5" />}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-center text-neutral-600">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-primary-600 font-semibold hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SignupPage
