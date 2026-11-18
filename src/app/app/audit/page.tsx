'use client';

import React from 'react';
import { History, ShieldAlert, Download, Filter } from 'lucide-react';
import { MOCK_ACTIVITIES } from '@/mock/data';

export default function AuditPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
            Immutable Audit Trail
          </h1>
          <p className="text-xs sm:text-sm text-[#73818A] mt-1">
            Tamper-proof record of every AI agent score, human override reason, calendar action, and final hiring outcome.
          </p>
        </div>

        <button className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-bold flex items-center gap-2 shadow-sm text-gray-700">
          <Download className="w-3.5 h-3.5" />
          <span>Export Audit Log (CSV)</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-xs font-bold text-gray-700">
          <span>Logged System & User Events</span>
          <span>EU AI Act Compliant Log Retention</span>
        </div>
        <div className="divide-y divide-gray-100">
          {MOCK_ACTIVITIES.map((act) => (
            <div key={act.id} className="p-4 flex items-start justify-between gap-4 text-xs">
              <div>
                <div className="font-bold text-[#0B1926]">
                  {act.actorName} ({act.actorRole})
                </div>
                <div className="text-gray-700 mt-0.5">{act.action}</div>
                {act.details && (
                  <p className="text-[11px] text-gray-500 mt-1 bg-gray-50 p-2 rounded border border-gray-100">
                    Rationale: {act.details}
                  </p>
                )}
              </div>
              <span className="text-[11px] text-gray-400 shrink-0">{act.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
