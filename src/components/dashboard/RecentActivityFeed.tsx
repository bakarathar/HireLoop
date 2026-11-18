'use client';

import React from 'react';
import { MOCK_ACTIVITIES } from '@/mock/data';
import { History, Bot, UserCheck, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const RecentActivityFeed: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
        <div>
          <h3 className="text-base font-bold text-[#0B1926] flex items-center gap-2">
            <History className="w-4 h-4 text-[#087F83]" /> Live Recruitment Activity Feed
          </h3>
          <p className="text-xs text-[#73818A] mt-0.5">Real-time audit log of agent and human actions</p>
        </div>
        <Link
          href="/app/audit"
          className="text-xs font-semibold text-[#087F83] hover:underline"
        >
          View Full Audit Trail →
        </Link>
      </div>

      <div className="space-y-4">
        {MOCK_ACTIVITIES.map((act) => (
          <div key={act.id} className="flex items-start gap-3.5 pb-3 border-b border-gray-100 last:border-none last:pb-0">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                act.badgeType === 'ai'
                  ? 'bg-[#087F83]/15 text-[#087F83]'
                  : act.badgeType === 'human'
                  ? 'bg-[#102B35]/15 text-[#102B35]'
                  : act.badgeType === 'decision'
                  ? 'bg-[#C9F36A]/30 text-[#0B1926]'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {act.badgeType === 'ai' ? (
                <Bot className="w-4 h-4" />
              ) : act.badgeType === 'decision' ? (
                <Sparkles className="w-4 h-4" />
              ) : (
                <UserCheck className="w-4 h-4" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-bold text-[#0B1926]">
                  {act.actorName}{' '}
                  <span className="font-normal text-gray-500">for</span>{' '}
                  <span className="font-semibold text-gray-900">{act.candidateName}</span>
                </div>
                <span className="text-[10px] text-gray-400 shrink-0">{act.timestamp}</span>
              </div>

              <div className="text-xs text-gray-700 font-medium mt-0.5">{act.action}</div>

              {act.details && (
                <p className="text-[11px] text-gray-500 mt-1 bg-gray-50 p-2 rounded-lg border border-gray-100">
                  {act.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
