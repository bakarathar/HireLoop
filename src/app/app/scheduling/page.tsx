'use client';

import React from 'react';
import { CalendarDays, Clock, CheckCircle2, RefreshCw } from 'lucide-react';

export default function SchedulingPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
            Round 2 Availability & Calendar Scheduling
          </h1>
          <p className="text-xs sm:text-sm text-[#73818A] mt-1">
            Automated calendar booking engine. Reserves same-day or next-business-day slots with Google Calendar & Microsoft Graph.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-[#087F83]/10 text-[#087F83] mx-auto flex items-center justify-center">
          <CalendarDays className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-[#0B1926]">Calendar Orchestration Hub</h3>
        <p className="text-xs text-gray-500 max-w-md mx-auto">
          Synchronizes candidate availability with assigned technical interviewers. Auto-locks slots to prevent double-booking.
        </p>
      </div>
    </div>
  );
}
