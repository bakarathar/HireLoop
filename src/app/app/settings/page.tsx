'use client';

import React from 'react';
import { Settings, Shield, Key, Bell, Lock } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="pb-6 border-b border-gray-200">
        <h1 className="text-2xl font-extrabold text-[#0B1926] tracking-tight">
          Organization Settings & Compliance
        </h1>
        <p className="text-xs sm:text-sm text-[#73818A] mt-1">
          Configure AI model thresholds, data retention policies, calendar integrations, and notification preferences.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6 max-w-3xl">
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-[#0B1926] flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#087F83]" /> Responsible AI Governance & EU AI Act
          </h3>
          <p className="text-xs text-gray-500">
            Advisory integrity monitoring is enabled by default. Biometric and emotion inference models remain disabled across all active interview pipelines.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 space-y-2">
          <h3 className="text-sm font-bold text-[#0B1926] flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#087F83]" /> Candidate Privacy & GDPR Compliance
          </h3>
          <p className="text-xs text-gray-500">
            Automated erasure timeline is set to 30 days post-rejection unless the candidate is tagged for the 12-month Talent Pool with active consent.
          </p>
        </div>
      </div>
    </div>
  );
}
