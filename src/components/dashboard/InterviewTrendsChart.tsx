'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { WEEKLY_TREND_DATA } from '@/mock/data';
import { BarChart3 } from 'lucide-react';

export const InterviewTrendsChart: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-100">
        <div>
          <h3 className="text-base font-bold text-[#0B1926] flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[#087F83]" /> Weekly Interview Outcomes
          </h3>
          <p className="text-xs text-[#73818A] mt-0.5">
            Agent 1 (Behavioral) vs Agent 2 (Technical) passing candidates
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-[#087F83]">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#087F83]" /> Agent 1 Passed
          </span>
          <span className="flex items-center gap-1.5 text-[#102B35]">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#102B35]" /> Agent 2 Passed
          </span>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={WEEKLY_TREND_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="week" stroke="#94a3b8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0B1926',
                borderRadius: '12px',
                border: 'none',
                color: '#fff',
                fontSize: '12px',
              }}
            />
            <Bar dataKey="agent1Pass" name="Agent 1 Passed" fill="#087F83" radius={[4, 4, 0, 0]} />
            <Bar dataKey="agent2Pass" name="Agent 2 Passed" fill="#102B35" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span>Cycle Avg Behavioral Score: 82.4 / 100</span>
        <span className="font-semibold text-emerald-600">+14% Throughput vs manual screening</span>
      </div>
    </div>
  );
};
