'use client';

import React from 'react';
import { PhoneCall, Bot, CheckCircle2, ChevronRight, FileText } from 'lucide-react';

export default function RoundOnePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
            Round 1 — Phone & Voice Interviews
          </h1>
          <p className="text-xs sm:text-sm text-[#73818A] mt-1">
            Agent 1 conversational screener telemetry, 6-dimension evaluation rationales, and human routing overrides.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-[#087F83]/10 text-[#087F83] mx-auto flex items-center justify-center">
          <Bot className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-[#0B1926]">Agent 1 Behavioral Screening Center</h3>
        <p className="text-xs text-gray-500 max-w-md mx-auto">
          Reviews 6 dimensions: Communication Clarity, Motivation Fit, Experience Depth, Culture Alignment, Honesty Signals, and Overall Suitability.
        </p>
      </div>
    </div>
  );
}
