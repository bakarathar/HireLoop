'use client';

import React from 'react';
import { MOCK_CANDIDATES } from '@/mock/data';
import { Kanban, Sparkles, Filter, Plus, ArrowRight, User } from 'lucide-react';

export default function PipelinePage() {
  const kanbanColumns = [
    { title: 'Applied / S-BERT Screened', count: 4, color: '#0B1926' },
    { title: 'Invitation Sent', count: 2, color: '#102B35' },
    { title: 'Round 1 Scheduled / In Progress', count: 3, color: '#087F83' },
    { title: 'Round 1 Completed', count: 3, color: '#0EA5E9' },
    { title: 'Round 2 Scheduled / Coding', count: 2, color: '#14B8A6' },
    { title: 'Evaluation Pending', count: 2, color: '#F59E0B' },
    { title: 'Final Review & Offer', count: 2, color: '#10B981' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
            Recruitment Kanban Pipeline
          </h1>
          <p className="text-xs sm:text-sm text-[#73818A] mt-1">
            Visual stage-by-stage progression from applicant intake to dual-agent screening and final human offer.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#C9F36A]/20 border border-[#C9F36A] text-[#0B1926]">
            EU AI Act Compliant • Human Decision Lock
          </span>
        </div>
      </div>

      {/* Horizontal Scrollable Kanban Columns */}
      <div className="flex gap-4 overflow-x-auto pb-6">
        {kanbanColumns.map((col, idx) => (
          <div
            key={idx}
            className="w-80 shrink-0 bg-gray-100/80 rounded-2xl p-4 border border-gray-200 flex flex-col max-h-[750px]"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200/80">
              <span className="text-xs font-bold text-[#0B1926] truncate max-w-[200px]">
                {col.title}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white font-bold text-gray-700 shadow-xs">
                {col.count}
              </span>
            </div>

            <div className="space-y-3 overflow-y-auto pr-1">
              {MOCK_CANDIDATES.slice(0, 3).map((cand, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-white rounded-xl p-4 border border-gray-200/90 shadow-xs hover:shadow-md hover:border-[#087F83] transition-all cursor-pointer space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0B1926]">{cand.fullName}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#087F83]/10 text-[#087F83] font-bold">
                      {cand.resumeFitScore}% Fit
                    </span>
                  </div>

                  <div className="text-xs text-gray-600 truncate">{cand.appliedJobTitle}</div>

                  <div className="text-[11px] text-gray-400 flex items-center justify-between pt-2 border-t border-gray-100">
                    <span>Applied: {cand.appliedDate}</span>
                    <span className="text-[#087F83] font-semibold">Review →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
