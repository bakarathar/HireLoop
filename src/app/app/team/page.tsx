'use client';

import React from 'react';
import { ShieldCheck, UserCheck, Code, Plus, Mail } from 'lucide-react';
import { DEMO_USERS } from '@/mock/data';

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
            Team & Role-Based Access Control
          </h1>
          <p className="text-xs sm:text-sm text-[#777184] mt-1">
            Manage organization administrators, HR recruiters, and technical interviewer supervisors.
          </p>
        </div>

        <button className="px-4 py-2.5 rounded-xl bg-[#7651C8] hover:bg-[#6341AF] text-white text-xs font-bold flex items-center gap-2 shadow-sm">
          <Plus className="w-3.5 h-3.5 text-[#BDA8F0]" />
          <span>Invite Team Member</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.values(DEMO_USERS).map((user) => (
          <div key={user.id} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-[#7651C8]" />
              <div>
                <h3 className="text-sm font-bold text-[#0B1926]">{user.name}</h3>
                <span className="text-[11px] font-semibold text-[#7651C8]">{user.roleTitle}</span>
              </div>
            </div>

            <div className="text-xs text-gray-500 pt-2 border-t border-gray-100 space-y-1">
              <div>Role: <strong>{user.role}</strong></div>
              <div>Email: <strong>{user.email}</strong></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
