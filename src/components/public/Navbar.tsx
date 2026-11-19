'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '../brand/Logo';
import { ArrowRight, Menu, X, Building2 } from 'lucide-react';

export const PublicNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all bg-[#F5F1FB]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto rounded-xl bg-white/80 border border-[#E8E1F3] px-5 sm:px-7 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo variant="brand" size="sm" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5D5869]">
          <Link
            href="/"
            className="hover:text-[#7651C8] transition-colors text-[#211A33]"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="hover:text-[#7651C8] transition-colors"
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            className="hover:text-[#7651C8] transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/solutions"
            className="hover:text-[#7651C8] transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#7651C8] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/login"
            className="text-xs font-semibold px-4 py-2 rounded-lg text-[#312A41] hover:text-[#7651C8] border border-[#E3DCEC] hover:border-[#7651C8] transition-all flex items-center gap-1.5"
          >
            <Building2 className="w-3.5 h-3.5 text-[#7651C8]" />
            <span>Organization Login</span>
          </Link>

          <Link
            href="/app/dashboard"
            className="text-xs font-bold px-4 py-2 rounded-lg bg-[#7651C8] hover:bg-[#6341AF] text-white transition-colors flex items-center gap-1.5 group"
          >
            <span>Launch App</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#5D5869] hover:text-[#7651C8] p-1.5 rounded-lg focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto bg-white border border-[#E8E1F3] rounded-xl p-5 text-[#342D43] shadow-lg flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 text-sm font-medium hover:text-[#7651C8]"
          >
            Home
          </Link>
          <Link
            href="/features"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 text-sm font-medium hover:text-[#7651C8]"
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 text-sm font-medium hover:text-[#7651C8]"
          >
            How It Works
          </Link>
          <Link
            href="/solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 text-sm font-medium hover:text-[#7651C8]"
          >
            Solutions
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 text-sm font-medium hover:text-[#7651C8]"
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-[#E8E1F3] flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 rounded-lg border border-[#E3DCEC] text-sm font-semibold text-[#312A41]"
            >
              Organization Sign In
            </Link>
            <Link
              href="/app/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 rounded-lg bg-[#7651C8] text-white text-sm font-bold"
            >
              Open Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
