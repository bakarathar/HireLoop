'use client';

import React from 'react';
import { Code2, Laptop, ShieldCheck, Terminal } from 'lucide-react';

export default function RoundTwoPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
            Round 2 — Technical Assessments & Live Coding
          </h1>
          <p className="text-xs sm:text-sm text-[#777184] mt-1">
            Agent 2 adaptive technical questioning, in-browser Monaco Editor environment, and sandboxed execution telemetry.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-[#0B1926] text-[#BDA8F0] mx-auto flex items-center justify-center">
          <Code2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-[#0B1926]">Agent 2 Technical Arena</h3>
        <p className="text-xs text-gray-500 max-w-md mx-auto">
          Monitors test case validation, code quality, algorithmic approach, and background advisory integrity signals.
        </p>
      </div>
    </div>
  );
}
