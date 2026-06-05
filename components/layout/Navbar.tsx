'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { AiOutlinePhone, AiOutlineHome } from 'react-icons/ai'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  const navLinks = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '#',
      submenu: [
        { label: 'Expert Directory', href: '/experts' },
        { label: 'Conditions Guide', href: '/conditions' },
        { label: 'Learning Center', href: '/learn' },
      ]
    },
    {
      label: 'Community',
      href: '#',
      submenu: [
        { label: 'Discussion Forums', href: '/forums' },
        { label: 'Support Groups', href: '/support-groups' },
        { label: 'Success Stories', href: '/stories' },
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <AiOutlineHome className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-primary-600 hidden sm:block">CareLink Africa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="px-4 py-2 text-neutral-700 font-medium hover:text-primary-600 transition-colors flex items-center"
                >
                  {link.label}
                  {(link as any).submenu && <FiChevronDown className="w-4 h-4 ml-1" />}
                </Link>

                {(link as any).submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                    {(link as any).submenu.map((sublink: any) => (
                      <Link
                        key={sublink.label}
                        href={sublink.href}
                        className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/auth/login" className="px-4 py-2 text-primary-600 font-semibold hover:bg-primary-50 rounded-lg transition-colors">
              Login
            </Link>
            <Link href="/auth/signup" className="btn-primary text-sm">
              Get Started
            </Link>
            <button className="flex items-center space-x-1 px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
              <AiOutlinePhone className="w-5 h-5" />
              <span className="hidden lg:block">Emergency</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6 text-neutral-700" />
            ) : (
              <FiMenu className="w-6 h-6 text-neutral-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() => (link as any).submenu && toggleDropdown(link.label)}
                  className="w-full text-left px-4 py-2 text-neutral-700 font-medium hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors flex items-center justify-between"
                >
                  {link.label}
                  {(link as any).submenu && (
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {(link as any).submenu && openDropdown === link.label && (
                  <div className="ml-4 mt-2 space-y-2">
                    {(link as any).submenu.map((sublink: any) => (
                      <Link
                        key={sublink.label}
                        href={sublink.href}
                        className="block px-4 py-2 text-neutral-600 hover:text-primary-600 transition-colors text-sm"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-neutral-200 space-y-2">
              <Link href="/auth/login" className="block px-4 py-2 text-primary-600 font-semibold hover:bg-primary-50 rounded-lg transition-colors">
                Login
              </Link>
              <Link href="/auth/signup" className="btn-primary block text-center text-sm">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
