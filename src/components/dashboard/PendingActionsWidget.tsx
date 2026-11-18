'use client';

import React from 'react';
import { MOCK_PENDING_ACTIONS } from '@/mock/data';
import { AlertCircle, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const PendingActionsWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
          <div>
            <h3 className="text-base font-bold text-[#0B1926] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500" /> Pending HR Actions
            </h3>
            <p className="text-xs text-[#73818A] mt-0.5">Tasks requiring human reviewer authorization</p>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold border border-amber-200">
            3 High Priority
          </span>
        </div>

        <div className="space-y-3">
          {MOCK_PENDING_ACTIONS.map((item) => (
            <div
              key={item.id}
              className="p-3.5 rounded-xl border border-gray-200/80 hover:border-[#087F83] bg-amber-50/20 transition-all flex flex-col gap-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B1926]">{item.title}</span>
                <span className="text-[10px] text-gray-400">{item.createdAt}</span>
              </div>

              <div className="text-xs text-gray-600">
                Candidate: <span className="font-semibold text-gray-900">{item.candidateName}</span> ({item.jobTitle})
              </div>

              <p className="text-[11px] text-gray-500 bg-white p-2 rounded-lg border border-gray-100">
                {item.description}
              </p>

              <div className="flex items-center justify-end gap-2 pt-1">
                <Link
                  href="/app/briefs"
                  className="px-3 py-1 rounded-lg bg-[#0B1926] hover:bg-[#102B35] text-white text-[11px] font-bold flex items-center gap-1 transition-colors"
                >
                  <span>Review & Decide</span>
                  <ArrowRight className="w-3 h-3 text-[#C9F36A]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 text-center">
        <span className="text-xs text-gray-500">
          Remember: Final hiring decisions require human sign-off per system policy.
        </span>
      </div>
    </div>
  );
};
