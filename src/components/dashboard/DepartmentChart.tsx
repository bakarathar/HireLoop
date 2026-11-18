'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { DEPARTMENT_DISTRIBUTION } from '@/mock/data';
import { PieChart as PieIcon } from 'lucide-react';

export const DepartmentChart: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div>
          <h3 className="text-base font-bold text-[#0B1926] flex items-center gap-2">
            <PieIcon className="w-4 h-4 text-[#087F83]" /> Candidate Distribution
          </h3>
          <p className="text-xs text-[#73818A] mt-0.5">By functional department</p>
        </div>
      </div>

      <div className="h-48 w-full my-2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={DEPARTMENT_DISTRIBUTION}
              innerRadius={50}
              outerRadius={75}
              paddingAngle={4}
              dataKey="value"
            >
              {DEPARTMENT_DISTRIBUTION.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#0B1926',
                borderRadius: '8px',
                border: 'none',
                color: '#fff',
                fontSize: '11px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
        {DEPARTMENT_DISTRIBUTION.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-gray-600 truncate">{item.name}</span>
            <span className="font-bold text-[#0B1926] ml-auto">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
