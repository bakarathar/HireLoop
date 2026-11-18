'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../brand/Logo';
import { useAuth } from '@/context/AuthContext';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Kanban,
  Mail,
  PhoneCall,
  CalendarDays,
  Code2,
  FileCheck2,
  FileText,
  UserCheck,
  BarChart3,
  History,
  ShieldAlert,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Building2,
  Sparkles,
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const pathname = usePathname();
  const { currentUser, currentRole, switchRole } = useAuth();

  const navSections = [
    {
      title: 'WORKSPACE',
      items: [
        { label: 'Overview', href: '/app/dashboard', icon: LayoutDashboard },
        { label: 'Job Openings', href: '/app/jobs', icon: Briefcase, badge: '12' },
        { label: 'All Candidates', href: '/app/candidates', icon: Users, badge: '842' },
        { label: 'Recruitment Pipeline', href: '/app/pipeline', icon: Kanban },
      ],
    },
    {
      title: 'INTERVIEW MANAGEMENT',
      items: [
        { label: 'Invitations & Outreach', href: '/app/invitations', icon: Mail },
        { label: 'Round 1 — Phone Interviews', href: '/app/round-one', icon: PhoneCall, badge: 'Agent 1' },
        { label: 'Availability & Scheduling', href: '/app/scheduling', icon: CalendarDays },
        { label: 'Round 2 — Technical Interviews', href: '/app/round-two', icon: Code2, badge: 'Agent 2' },
      ],
    },
    {
      title: 'EVALUATION',
      items: [
        { label: 'Evaluation Reports', href: '/app/evaluations', icon: FileCheck2 },
        { label: 'Candidate Briefs', href: '/app/briefs', icon: FileText, badge: '9' },
        { label: 'Final Decisions', href: '/app/decisions', icon: UserCheck },
      ],
    },
    {
      title: 'ORGANIZATION',
      items: [
        { label: 'Analytics', href: '/app/analytics', icon: BarChart3 },
        { label: 'Audit Trail', href: '/app/audit', icon: History },
        { label: 'Team Management', href: '/app/team', icon: ShieldAlert },
        { label: 'Settings', href: '/app/settings', icon: Settings },
      ],
    },
  ];

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen transition-all duration-300 bg-[#0B1926] text-white border-r border-white/10 flex flex-col justify-between max-lg:shadow-2xl ${
          mobileOpen ? 'translate-x-0' : 'max-lg:-translate-x-full'
        } ${collapsed ? 'w-20' : 'w-72'}`}
      >
      {/* Top Header / Logo */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        {!collapsed ? (
          <Link href="/app/dashboard" className="flex items-center">
            <Logo variant="light" size="sm" />
          </Link>
        ) : (
          <Link href="/app/dashboard" className="mx-auto">
            <div className="w-9 h-9 rounded-xl bg-[#087F83] text-[#C9F36A] font-black flex items-center justify-center text-sm">
              HL
            </div>
          </Link>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Organization Header Pill */}
      {!collapsed && (
        <div className="px-4 py-2.5 mx-3 mt-3 rounded-xl bg-[#102B35] border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-6 h-6 rounded-md bg-[#087F83]/30 text-[#C9F36A] flex items-center justify-center shrink-0">
              <Building2 className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-gray-200 truncate">
              {currentUser.organizationName}
            </span>
          </div>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#C9F36A]/20 text-[#C9F36A] font-bold">
            PRO
          </span>
        </div>
      )}

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navSections.map((section, idx) => (
          <div key={idx} className="space-y-1">
            {!collapsed && (
              <div className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-[#73818A] mb-2">
                {section.title}
              </div>
            )}
            {section.items.map((item, itemIdx) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={itemIdx}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                    isActive
                      ? 'bg-[#087F83] text-white shadow-lg shadow-[#087F83]/30'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  } ${collapsed ? 'justify-center px-0' : ''}`}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive
                        ? 'text-[#C9F36A]'
                        : 'text-gray-400 group-hover:text-white'
                    }`}
                  />
                  {!collapsed && (
                    <div className="flex-1 flex items-center justify-between">
                      <span className="truncate">{item.label}</span>
                      {item.badge && (
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                            isActive
                              ? 'bg-white/20 text-[#C9F36A]'
                              : 'bg-white/10 text-gray-300'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* User Profile & Demo Switcher Footer */}
      <div className="p-3 border-t border-white/10 bg-[#0B1926]/90">
        {!collapsed ? (
          <div className="space-y-3">
            {/* Active User Card */}
            <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/10">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#087F83]"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white truncate">
                  {currentUser.name}
                </div>
                <div className="text-[10px] text-gray-400 truncate">
                  {currentUser.roleTitle}
                </div>
              </div>
            </div>

            {/* Quick Role Switcher Pill Bar */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] font-bold uppercase text-[#73818A] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C9F36A]" /> Demo Role
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => switchRole('ADMIN')}
                  className={`text-[10px] px-2 py-0.5 rounded-md font-bold transition-all ${
                    currentRole === 'ADMIN'
                      ? 'bg-[#C9F36A] text-[#0B1926]'
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                  title="Switch to Admin"
                >
                  Admin
                </button>
                <button
                  onClick={() => switchRole('HR_MANAGER')}
                  className={`text-[10px] px-2 py-0.5 rounded-md font-bold transition-all ${
                    currentRole === 'HR_MANAGER'
                      ? 'bg-[#087F83] text-white'
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                  title="Switch to HR Manager"
                >
                  HR
                </button>
                <button
                  onClick={() => switchRole('SUPERVISOR')}
                  className={`text-[10px] px-2 py-0.5 rounded-md font-bold transition-all ${
                    currentRole === 'SUPERVISOR'
                      ? 'bg-[#087F83] text-white'
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                  title="Switch to Supervisor"
                >
                  Tech
                </button>
              </div>
            </div>

            {/* Logout button */}
            <Link
              href="/login"
              className="w-full py-1.5 px-3 rounded-lg border border-white/10 hover:border-red-400/40 text-gray-400 hover:text-red-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#087F83]"
            />
            <Link
              href="/login"
              className="p-1.5 text-gray-400 hover:text-white transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
      </aside>
    </>
  );
};
