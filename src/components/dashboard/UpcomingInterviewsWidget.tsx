'use client';

import React from 'react';
import { MOCK_UPCOMING_INTERVIEWS } from '@/mock/data';
import { Calendar, Clock, Video, Phone, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const UpcomingInterviewsWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
          <div>
            <h3 className="text-base font-bold text-[#0B1926] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#7651C8]" /> Upcoming Interviews
            </h3>
            <p className="text-xs text-[#777184] mt-0.5">Automated queue & scheduled rounds</p>
          </div>
          <Link
            href="/app/scheduling"
            className="text-xs font-semibold text-[#7651C8] hover:underline flex items-center gap-0.5"
          >
            <span>View Calendar</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-3">
          {MOCK_UPCOMING_INTERVIEWS.map((item) => (
            <div
              key={item.id}
              className="p-3.5 rounded-xl border border-gray-200/80 hover:border-[#7651C8]/50 transition-all bg-gray-50/50 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B1926]">{item.candidateName}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    item.status === 'Confirmed'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : item.status === 'Starting Soon'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200 animate-pulse'
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="text-xs text-gray-600 font-medium">{item.candidateRole}</div>

              <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500 pt-1 border-t border-gray-200/60">
                <span className="flex items-center gap-1 font-semibold text-[#7651C8]">
                  <Clock className="w-3.5 h-3.5" /> {item.dateTime}
                </span>
                <span className="flex items-center gap-1">
                  {item.round.includes('Phone') ? (
                    <Phone className="w-3.5 h-3.5 text-gray-400" />
                  ) : (
                    <Video className="w-3.5 h-3.5 text-gray-400" />
                  )}
                  {item.round}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span>Calendar Provider: Google / MS Graph</span>
        <span className="text-[11px] text-[#7651C8] font-bold">Auto-locking active</span>
      </div>
    </div>
  );
};
