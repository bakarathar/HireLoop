'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '../brand/Logo';
import { ArrowRight, Menu, X, Building2 } from 'lucide-react';

export const PublicNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all">
      <div className="max-w-7xl mx-auto rounded-lg bg-white border border-[#E2E8F0] px-5 sm:px-7 py-3 flex items-center justify-between shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo variant="dark" size="sm" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5F6B73]">
          <Link
            href="/"
            className="hover:text-[#087F83] transition-colors text-[#0B1926]"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="hover:text-[#087F83] transition-colors"
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            className="hover:text-[#C9F36A] transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/solutions"
            className="hover:text-[#C9F36A] transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#C9F36A] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/login"
            className="text-xs font-semibold px-4 py-2 rounded-lg text-[#172B35] hover:text-[#087F83] border border-[#DDE4E8] hover:border-[#087F83] transition-all flex items-center gap-1.5"
          >
            <Building2 className="w-3.5 h-3.5 text-[#C9F36A]" />
            <span>Organization Login</span>
          </Link>

          <Link
            href="/app/dashboard"
            className="text-xs font-bold px-4 py-2 rounded-lg bg-[#087F83] hover:bg-[#06666A] text-white transition-colors flex items-center gap-1.5 group"
          >
            <span>Launch App</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#4B5A63] hover:text-[#087F83] p-1.5 rounded-lg focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto bg-white border border-[#E2E8F0] rounded-xl p-5 text-[#334155] shadow-xl flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 text-sm font-medium hover:text-[#087F83]"
          >
            Home
          </Link>
          <Link
            href="/features"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-base font-medium hover:text-[#C9F36A]"
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-base font-medium hover:text-[#C9F36A]"
          >
            How It Works
          </Link>
          <Link
            href="/solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-base font-medium hover:text-[#C9F36A]"
          >
            Solutions
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-base font-medium hover:text-[#C9F36A]"
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 rounded-lg border border-[#DDE4E8] text-sm font-semibold text-[#172B35]"
            >
              Organization Sign In
            </Link>
            <Link
              href="/app/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 rounded-xl bg-[#C9F36A] text-[#0B1926] text-sm font-bold shadow-md"
            >
              Open Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
