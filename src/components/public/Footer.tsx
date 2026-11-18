import React from 'react';
import Link from 'next/link';
import { Logo } from '../brand/Logo';
import { Shield, Lock, Award } from 'lucide-react';

export const PublicFooter: React.FC = () => {
  return (
    <footer className="bg-[#0B1926] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="md" showTagline={true} />
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mt-3">
              A practical recruitment workspace for interviews, assessments,
              scheduling, and final hiring decisions.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400 pt-2">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#C9F36A]" /> ISO 27001
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#C9F36A]" /> SOC 2 Type II
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#C9F36A]" /> EU AI Act Ready
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-gray-200 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/features" className="hover:text-[#C9F36A] transition-colors">
                  Agent 1 Behavioral
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-[#C9F36A] transition-colors">
                  Agent 2 Technical
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#C9F36A] transition-colors">
                  Monaco Code Sandbox
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#C9F36A] transition-colors">
                  Autonomous Scheduling
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#C9F36A] transition-colors">
                  Audit & Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-gray-200 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/solutions" className="hover:text-[#C9F36A] transition-colors">
                  Enterprise Engineering
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#C9F36A] transition-colors">
                  High-Volume Talent Pools
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#C9F36A] transition-colors">
                  Telecom & Banking
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#C9F36A] transition-colors">
                  Global Remote Teams
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-gray-200 mb-4">
              Organization
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/login" className="hover:text-[#C9F36A] transition-colors">
                  Organization Login
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C9F36A] transition-colors">
                  Request Private Demo
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#C9F36A] transition-colors">
                  Responsible AI Policy
                </Link>
              </li>
              <li>
                <Link href="/app/dashboard" className="text-[#C9F36A] font-semibold hover:underline">
                  Live Admin Sandbox
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 HireLoop Systems Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Notice</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Security Whitepaper</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
