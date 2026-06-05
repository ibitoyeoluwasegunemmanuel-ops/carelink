'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // TODO: Implement Supabase login
      console.log({ email, password })
    } catch (err) {
      setError('Login failed. Please check your credentials.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-lg text-neutral-600">
            Log in to your CareLink Africa account
          </p>
        </div>

        {/* Login Form */}
        <div className="card p-8 sm:p-12">
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
              <div className="flex justify-between items-center mb-2">
                <label className="label-field mb-0">Password</label>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-primary-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="input-field"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="w-5 h-5" />
              <label htmlFor="remember" className="text-sm text-neutral-600">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <span>{isLoading ? 'Logging in...' : 'Log In'}</span>
              {!isLoading && <FiArrowRight className="w-5 h-5" />}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-neutral-200">
            <p className="text-center text-neutral-600">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-primary-600 font-semibold hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-neutral-200">
            <p className="text-xs text-neutral-500 text-center">
              Need emergency support?{' '}
              <Link href="/emergency" className="text-primary-600 hover:underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
