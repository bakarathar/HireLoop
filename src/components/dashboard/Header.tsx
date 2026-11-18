'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { RoleBadge } from '../brand/RoleBadge';
import {
  Search,
  Bell,
  Plus,
  Menu,
} from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  collapsed: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const DashboardHeader: React.FC<HeaderProps> = ({ collapsed, setMobileOpen }) => {
  const { currentUser, currentRole, isDemoMode } = useAuth();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const notifications = [
    {
      id: 1,
      title: 'Agent 2 Technical Brief Generated',
      time: '14m ago',
      desc: 'Elena Rostova completed Monaco coding assessment (89/100).',
      unread: true,
    },
    {
      id: 2,
      title: 'Auto-Schedule Appointment Confirmed',
      time: '32m ago',
      desc: 'Sophia Martinez confirmed Round 2 for tomorrow 10:00 AM EST.',
      unread: true,
    },
    {
      id: 3,
      title: 'Agent 1 Phone Screener Passed',
      time: '1h ago',
      desc: 'Kiran Patel scored 82/100 across 6 behavioral dimensions.',
      unread: false,
    },
  ];

  return (
    <header
      className={`sticky top-0 z-30 h-16 bg-white border-b border-gray-200 transition-all duration-300 flex items-center justify-between px-4 sm:px-6 lg:ml-0 ${
        collapsed ? 'lg:ml-20' : 'lg:ml-72'
      }`}
    >
      {/* Left: Search Bar & Quick Context */}
      <div className="flex items-center gap-4 flex-1 max-w-lg">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          aria-label="Open navigation"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="relative w-full">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search candidates, jobs, briefs, transcripts... (Cmd + K)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-12 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-[#087F83] focus:bg-white transition-all text-gray-900 placeholder:text-gray-400"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-gray-400 bg-gray-200/60 px-1.5 py-0.5 rounded">
            ⌘K
          </span>
        </div>
      </div>

      {/* Right: Demo Banner, Notifications & User Info */}
      <div className="flex items-center gap-4">
        {/* Live Demo Banner Pill */}
        {isDemoMode && (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9F36A]/20 border border-[#C9F36A]/80 text-[#0B1926] text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#087F83] animate-pulse" />
            <span className="font-bold">Live Demonstration Environment</span>
          </div>
        )}

        {/* Quick Action Button: New Job / Invite */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/app/jobs"
            className="px-3.5 py-1.5 rounded-xl bg-[#087F83] hover:bg-[#065E61] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Post Job</span>
          </Link>
        </div>

        {/* Notifications Popover Toggle */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="p-2 rounded-xl text-gray-600 hover:text-[#087F83] hover:bg-gray-100 transition-colors relative"
            aria-label="View notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C9F36A] ring-2 ring-white rounded-full"></span>
          </button>

          {/* Notifications dropdown panel */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-xs font-bold text-[#0B1926]">Notifications</span>
                <span className="text-[10px] font-semibold text-[#087F83] cursor-pointer">
                  Mark all read
                </span>
              </div>
              <div className="divide-y divide-gray-100 max-h-72 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className="py-2.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-900">{n.title}</span>
                      <span className="text-[10px] text-gray-400">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-gray-500">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Role Indicator */}
        <div className="flex items-center gap-3 pl-2 border-l border-gray-200">
          <RoleBadge role={currentRole} />
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-100"
          />
        </div>
      </div>
    </header>
  );
};
