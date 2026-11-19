'use client';

import React from 'react';
import { MOCK_JOBS } from '@/mock/data';
import { Briefcase, Plus, Search, MapPin, Users, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
            Job Openings
          </h1>
          <p className="text-xs sm:text-sm text-[#777184] mt-1">
            Manage organization job profiles, S-BERT screening parameters, and dual-agent interview configurations.
          </p>
        </div>

        <button className="px-4 py-2.5 rounded-xl bg-[#7651C8] hover:bg-[#6341AF] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all">
          <Plus className="w-4 h-4 text-[#BDA8F0]" />
          <span>Create New Job Profile</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_JOBS.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#7651C8]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wider">
                  {job.status}
                </span>
                <span className="text-xs text-gray-400 font-medium">{job.department}</span>
              </div>

              <h2 className="text-base font-bold text-[#0B1926] mb-1">{job.title}</h2>

              <div className="flex items-center gap-3 text-xs text-[#777184] mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" /> {job.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-gray-400" /> {job.applicantsCount} applicants
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {job.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md bg-gray-100 text-[11px] font-medium text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-500 font-medium">
                Pass Threshold: <strong className="text-[#7651C8]">{job.passThreshold}%</strong>
              </span>
              <span className="text-xs font-bold text-[#7651C8] hover:underline cursor-pointer">
                Manage Profile →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
