'use client';

import React from 'react';
import { MOCK_CANDIDATES } from '@/mock/data';
import { Users, Search, Filter, ShieldCheck, CheckCircle2, ChevronRight, FileText } from 'lucide-react';
import Link from 'next/link';

export default function CandidatesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
            All Candidates Directory
          </h1>
          <p className="text-xs sm:text-sm text-[#73818A] mt-1">
            Review parsed resume categories, Sentence-BERT advisory fit scores, interview progress, and evaluations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search candidate..."
              className="pl-9 pr-4 py-2 rounded-xl border border-gray-200 text-xs bg-white focus:outline-none focus:border-[#087F83]"
            />
          </div>
          <button className="px-3.5 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold flex items-center gap-1.5 text-gray-700">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/75 border-b border-gray-200 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                <th className="py-3.5 px-4">Candidate</th>
                <th className="py-3.5 px-4">Role & Department</th>
                <th className="py-3.5 px-4 text-center">S-BERT Advisory Fit</th>
                <th className="py-3.5 px-4">Current Stage</th>
                <th className="py-3.5 px-4">Latest Interview Status</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {MOCK_CANDIDATES.map((cand) => (
                <tr key={cand.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={cand.avatar}
                        alt={cand.fullName}
                        className="w-9 h-9 rounded-full object-cover ring-1 ring-gray-200"
                      />
                      <div>
                        <div className="font-bold text-[#0B1926]">{cand.fullName}</div>
                        <div className="text-[11px] text-gray-500">{cand.email}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <div className="font-semibold text-gray-900">{cand.appliedJobTitle}</div>
                    <div className="text-[11px] text-gray-500">{cand.department}</div>
                  </td>

                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#087F83]/10 text-[#087F83] font-bold text-xs">
                      {cand.resumeFitScore}% Fit
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-800">
                      {cand.stage}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <div className="text-gray-700 font-medium">{cand.latestInterviewStatus}</div>
                    {cand.integrityScore !== undefined && (
                      <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        Integrity Risk: {cand.integrityScore}/100 (Advisory)
                      </div>
                    )}
                  </td>

                  <td className="py-4 px-4 text-right">
                    <button className="px-3 py-1.5 rounded-lg bg-[#0B1926] hover:bg-[#102B35] text-white text-[11px] font-bold transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
