'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { DashboardHeader } from '@/components/dashboard/Header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F1FB] text-[#312A41]">
      {/* Sidebar Navigation */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main App Content Viewport */}
      <div className="flex flex-col min-h-screen">
        <DashboardHeader collapsed={collapsed} setMobileOpen={setMobileOpen} />

        <main
          className={`flex-1 p-4 sm:p-6 lg:p-8 transition-all duration-300 ${
            collapsed ? 'lg:ml-20' : 'lg:ml-72'
          }`}
        >
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
