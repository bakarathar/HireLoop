'use client';

import React from 'react';
import { FileCheck2, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function EvaluationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
            Evaluation Reports & Integrity Telemetry
          </h1>
          <p className="text-xs sm:text-sm text-[#73818A] mt-1">
            Examine Agent 1 behavioral scores and Agent 2 technical & integrity findings with full advisory transparency.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-[#087F83]/10 text-[#087F83] mx-auto flex items-center justify-center">
          <FileCheck2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-[#0B1926]">Explainable Scoring Hub</h3>
        <p className="text-xs text-gray-500 max-w-md mx-auto">
          Every evaluation includes quoted transcript evidence, timing logs, and multi-signal integrity indicators. Integrity monitoring is strictly advisory.
        </p>
      </div>
    </div>
  );
}
