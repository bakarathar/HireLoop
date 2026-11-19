'use client';

import React from 'react';
import { Mail, Plus, Send, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function InvitationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
            Invitations & Candidate Outreach
          </h1>
          <p className="text-xs sm:text-sm text-[#777184] mt-1">
            Dispatch single or bulk tokenized interview links. Candidates choose between immediate interview or scheduling.
          </p>
        </div>
        <button className="px-4 py-2.5 rounded-xl bg-[#7651C8] hover:bg-[#6341AF] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all">
          <Send className="w-3.5 h-3.5 text-[#BDA8F0]" />
          <span>Send New Invitations</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-200">
          <div className="text-xs font-semibold text-gray-500 uppercase">Total Sent</div>
          <div className="text-2xl font-black text-[#0B1926] mt-1">284</div>
          <div className="text-xs text-emerald-600 mt-2 font-medium">94.2% delivery rate</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-200">
          <div className="text-xs font-semibold text-gray-500 uppercase">Started (Immediate)</div>
          <div className="text-2xl font-black text-[#7651C8] mt-1">112</div>
          <div className="text-xs text-gray-500 mt-2 font-medium">Option A selected</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-200">
          <div className="text-xs font-semibold text-gray-500 uppercase">Scheduled For Later</div>
          <div className="text-2xl font-black text-[#352748] mt-1">152</div>
          <div className="text-xs text-gray-500 mt-2 font-medium">Option B selected</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-200">
          <div className="text-xs font-semibold text-gray-500 uppercase">Pending / Expired</div>
          <div className="text-2xl font-black text-amber-600 mt-1">20</div>
          <div className="text-xs text-amber-600 mt-2 font-medium">Auto-reminder queued</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-[#7651C8]/10 text-[#7651C8] mx-auto flex items-center justify-center">
          <Mail className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-[#0B1926]">Tokenized Outreach Center</h3>
        <p className="text-xs text-gray-500 max-w-md mx-auto">
          Every invitation includes a cryptographically secure 128-bit single-use token. Candidates experience official organization branding without registering an account.
        </p>
      </div>
    </div>
  );
}
