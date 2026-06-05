'use client'

import React from 'react'
import Link from 'next/link'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-100 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-xl mb-4 text-primary-400">CareLink Africa</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Supporting families and caregivers of children with special needs across Africa.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/experts" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Find Experts
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/forums" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Community Forums
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Learning Center
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/campaigns" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Campaigns
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiPhone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">+234 (0) XXX XXXX XXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <FiMail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">support@carelinkafrica.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">Across Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 sm:mb-0">
              © {currentYear} CareLink Africa. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-neutral-400 hover:text-primary-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-primary-400 transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-neutral-400 hover:text-primary-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
