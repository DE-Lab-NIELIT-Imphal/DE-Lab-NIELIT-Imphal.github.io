import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { NotificationDropdown } from './NotificationDropdown'
import type { Announcement } from '../../types'

interface NavbarProps {
  announcements: Announcement[]
}

export const Navbar = ({ announcements }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'People', href: '/people' },
    { label: 'Publications', href: '/publications' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Library', href: '/library' },
    { label: 'Contact Us', href: '/contact' },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const sectionId = href.replace(/^\//, '')
    const elem = document.getElementById(sectionId)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Lab Branding */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group text-left"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="/logo.png"
              alt="DE Lab NIELIT Imphal Logo"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-blue-950 font-heading group-hover:text-blue-700 transition-colors">
              Drone Electronics Lab
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 text-sm xl:text-base font-bold rounded-lg transition-colors flex items-center gap-1 ${
                  location.pathname === link.href
                    ? 'text-blue-900 bg-blue-50'
                    : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <NotificationDropdown announcements={announcements} />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg cursor-pointer text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-900"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
