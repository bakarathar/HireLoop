'use client';

import React from 'react';
import { UserCheck, ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';

export default function DecisionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
            Final Hiring Decisions
          </h1>
          <p className="text-xs sm:text-sm text-[#73818A] mt-1">
            Human-in-the-loop authorization center. Record final advance, offer, or rejection outcomes with mandatory override logging.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-[#087F83]/10 text-[#087F83] mx-auto flex items-center justify-center">
          <UserCheck className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-[#0B1926]">Human Authorization Hub</h3>
        <p className="text-xs text-gray-500 max-w-md mx-auto">
          Final hiring authority rests entirely with authorized human HR and Engineering Supervisors. Rejections automatically trigger constructive feedback.
        </p>
      </div>
    </div>
  );
}
