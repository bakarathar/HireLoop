'use client';

import React from 'react';
import { FileText, Printer, Download, Sparkles, UserCheck } from 'lucide-react';

export default function BriefsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
            1-Page Candidate Briefs
          </h1>
          <p className="text-xs sm:text-sm text-[#73818A] mt-1">
            Condensed, executive-ready technical briefs synthesizing resume match, Agent 1 findings, and Agent 2 coding evidence.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-[#087F83]/10 text-[#087F83] mx-auto flex items-center justify-center">
          <FileText className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-[#0B1926]">Executive Candidate Dossiers</h3>
        <p className="text-xs text-gray-500 max-w-md mx-auto">
          One-page briefs ready for PDF export or print, giving technical supervisors key strengths, skill gaps, and recommended final focus areas.
        </p>
      </div>
    </div>
  );
}
