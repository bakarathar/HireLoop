'use client';

import React from 'react';
import { BarChart3, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { MOCK_METRICS } from '@/mock/data';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
            Recruitment Intelligence & Analytics
          </h1>
          <p className="text-xs sm:text-sm text-[#73818A] mt-1">
            Aggregate conversion analytics, time-to-hire acceleration metrics, and dual-agent interview pass rate breakdowns.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="text-xs font-semibold text-gray-500 uppercase">Average Time-to-Hire</div>
          <div className="text-3xl font-black text-[#0B1926] mt-2">8.4 Days</div>
          <p className="text-xs text-emerald-600 mt-2 font-medium">Reduced from 60+ days industry average</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="text-xs font-semibold text-gray-500 uppercase">Offer Acceptance Rate</div>
          <div className="text-3xl font-black text-[#087F83] mt-2">91.2%</div>
          <p className="text-xs text-gray-500 mt-2 font-medium">Highest candidate satisfaction index</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="text-xs font-semibold text-gray-500 uppercase">AI Advisory Agreement</div>
          <div className="text-3xl font-black text-[#102B35] mt-2">94.6%</div>
          <p className="text-xs text-gray-500 mt-2 font-medium">Correlation with human senior rater scores</p>
        </div>
      </div>
    </div>
  );
}
