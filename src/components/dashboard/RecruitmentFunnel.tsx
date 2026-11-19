'use client';

import React from 'react';
import { RECRUITMENT_FUNNEL_DATA } from '@/mock/data';
import { Filter, Users, ArrowDownRight } from 'lucide-react';

export const RecruitmentFunnel: React.FC = () => {
  const maxVal = RECRUITMENT_FUNNEL_DATA[0].candidates;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-100">
        <div>
          <h3 className="text-base font-bold text-[#0B1926] flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#7651C8]" /> Recruitment Pipeline Funnel
          </h3>
          <p className="text-xs text-[#777184] mt-0.5">
            Stage conversion rates from application to final offer extension
          </p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-[#7651C8]/10 text-[#7651C8] font-semibold">
          Active Pipeline: 842 Candidates
        </span>
      </div>

      <div className="space-y-3.5">
        {RECRUITMENT_FUNNEL_DATA.map((item, idx) => {
          const percentage = Math.round((item.candidates / maxVal) * 100);
          const prevCandidates = idx > 0 ? RECRUITMENT_FUNNEL_DATA[idx - 1].candidates : item.candidates;
          const stageConversion = idx > 0 ? Math.round((item.candidates / prevCandidates) * 100) : 100;

          return (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.fill }} />
                  {item.stage}
                </span>
                <div className="flex items-center gap-3">
                  {idx > 0 && (
                    <span className="text-[11px] text-gray-400">
                      {stageConversion}% from prev stage
                    </span>
                  )}
                  <span className="font-bold text-[#0B1926]">{item.candidates} candidates</span>
                </div>
              </div>

              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden flex">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: item.fill,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-xs text-gray-400">Application to Offer</div>
          <div className="text-sm font-black text-[#0B1926] mt-0.5">1.66%</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Agent 1 Pass Rate</div>
          <div className="text-sm font-black text-[#7651C8] mt-0.5">53.0%</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Agent 2 Pass Rate</div>
          <div className="text-sm font-black text-[#7651C8] mt-0.5">71.1%</div>
        </div>
      </div>
    </div>
  );
};
