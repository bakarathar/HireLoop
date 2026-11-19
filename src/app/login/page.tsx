'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/brand/Logo';
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/types';
import { DEMO_USERS } from '@/mock/data';
import {
  ShieldCheck,
  UserCheck,
  Code,
  Lock,
  ArrowRight,
  Sparkles,
  Building,
  KeyRound,
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { switchRole, currentRole } = useAuth();
  const [selectedRole, setSelectedRole] = useState<UserRole>('ADMIN');
  const [email, setEmail] = useState(DEMO_USERS.ADMIN.email);
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setEmail(DEMO_USERS[role].email);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    switchRole(selectedRole);
    setTimeout(() => {
      router.push('/app/dashboard');
    }, 400);
  };

  const quickDemoLogin = (role: UserRole) => {
    switchRole(role);
    router.push('/app/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0B1926] flex flex-col justify-between relative overflow-hidden text-white">
      {/* Background ambient lighting glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#7651C8]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#BDA8F0]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <header className="p-6 flex items-center justify-between max-w-7xl mx-auto w-full relative z-10">
        <Link href="/">
          <Logo variant="light" size="sm" />
        </Link>
        <Link
          href="/"
          className="text-xs font-semibold text-gray-400 hover:text-white transition-colors"
        >
          ← Return to Public Website
        </Link>
      </header>

      {/* Central Login Container */}
      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md bg-[#352748]/85 border border-white/15 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl space-y-6">
          {/* Form Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#BDA8F0] text-xs font-semibold">
              <Building className="w-3.5 h-3.5" /> Organization Portal
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">
              Sign In to HireLoop
            </h1>
            <p className="text-xs text-gray-300">
              Access your internal recruitment pipeline and dual-agent controls.
            </p>
          </div>

          {/* Quick Demo Switcher Banner */}
          <div className="bg-[#0B1926]/80 rounded-2xl p-4 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#BDA8F0] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Quick Demo Role Login
              </span>
              <span className="text-[10px] text-gray-400">1-Click Sign In</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleRoleSelect('ADMIN')}
                className={`p-2 rounded-xl border text-center transition-all ${
                  selectedRole === 'ADMIN'
                    ? 'border-[#BDA8F0] bg-[#BDA8F0]/20 text-[#BDA8F0]'
                    : 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <ShieldCheck className="w-4 h-4 mx-auto mb-1" />
                <div className="text-[11px] font-bold">Admin</div>
              </button>

              <button
                type="button"
                onClick={() => handleRoleSelect('HR_MANAGER')}
                className={`p-2 rounded-xl border text-center transition-all ${
                  selectedRole === 'HR_MANAGER'
                    ? 'border-[#7651C8] bg-[#7651C8]/30 text-white'
                    : 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <UserCheck className="w-4 h-4 mx-auto mb-1" />
                <div className="text-[11px] font-bold">HR Manager</div>
              </button>

              <button
                type="button"
                onClick={() => handleRoleSelect('SUPERVISOR')}
                className={`p-2 rounded-xl border text-center transition-all ${
                  selectedRole === 'SUPERVISOR'
                    ? 'border-[#7651C8] bg-[#7651C8]/30 text-white'
                    : 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <Code className="w-4 h-4 mx-auto mb-1" />
                <div className="text-[11px] font-bold">Supervisor</div>
              </button>
            </div>

            {/* Active Role Description */}
            <div className="text-[11px] text-gray-400 pt-1 flex items-center justify-between border-t border-white/5">
              <span>{DEMO_USERS[selectedRole].name}</span>
              <span className="text-[#BDA8F0] font-medium">{DEMO_USERS[selectedRole].roleTitle}</span>
            </div>
          </div>

          {/* Standard Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Work Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B1926]/90 border border-white/15 text-white text-sm focus:outline-none focus:border-[#BDA8F0]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-gray-300">Password</label>
                <span className="text-[11px] text-[#BDA8F0] hover:underline cursor-pointer">
                  Forgot?
                </span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B1926]/90 border border-white/15 text-white text-sm focus:outline-none focus:border-[#BDA8F0]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-[#BDA8F0] hover:bg-[#AA91E8] text-[#0B1926] font-bold text-sm tracking-wide shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{isLoading ? 'Authenticating...' : `Enter Workspace as ${DEMO_USERS[selectedRole].role}`}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Security Guarantee */}
          <div className="text-center pt-2">
            <p className="text-[11px] text-gray-400 flex items-center justify-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#BDA8F0]" /> AES-256 Encrypted & TLS 1.3 Certified
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-xs text-gray-500 relative z-10">
        © 2026 HireLoop Enterprise Systems. Candidate accounts are external and unauthenticated.
      </footer>
    </div>
  );
}
