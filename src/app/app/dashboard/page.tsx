'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { MOCK_METRICS } from '@/mock/data';
import { KPICard } from '@/components/dashboard/KPICard';
import { RecruitmentFunnel } from '@/components/dashboard/RecruitmentFunnel';
import { InterviewTrendsChart } from '@/components/dashboard/InterviewTrendsChart';
import { DepartmentChart } from '@/components/dashboard/DepartmentChart';
import { UpcomingInterviewsWidget } from '@/components/dashboard/UpcomingInterviewsWidget';
import { RecentActivityFeed } from '@/components/dashboard/RecentActivityFeed';
import { PendingActionsWidget } from '@/components/dashboard/PendingActionsWidget';
import Link from 'next/link';
import {
  Briefcase,
  Users,
  MailCheck,
  PhoneCall,
  Code2,
  FileCheck,
  Plus,
  Send,
  Kanban,
} from 'lucide-react';

export default function DashboardPage() {
  const { currentUser } = useAuth();

  return (
    <div className="space-y-8 pb-12">
      {/* Dashboard Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-[#087F83] tracking-wider uppercase">
              Recruitment overview
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-500">{currentUser.organizationName}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0B1926] tracking-tight">
            Welcome back, {currentUser.name}
          </h1>
          <p className="text-xs sm:text-sm text-[#73818A] mt-1">
            Active jobs, interview progress, and items that need your attention.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/app/pipeline"
            className="px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
          >
            <Kanban className="w-3.5 h-3.5 text-[#087F83]" />
            <span>Recruitment Pipeline</span>
          </Link>

          <Link
            href="/app/invitations"
            className="px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
          >
            <Send className="w-3.5 h-3.5 text-[#087F83]" />
            <span>Invite Candidates</span>
          </Link>

          <Link
            href="/app/jobs"
            className="px-4 py-2 rounded-xl bg-[#087F83] hover:bg-[#065E61] text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all"
          >
            <Plus className="w-3.5 h-3.5 text-[#C9F36A]" />
            <span>Create New Job</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <KPICard
          title="Active Jobs"
          value={MOCK_METRICS.activeJobs}
          delta={MOCK_METRICS.activeJobsDelta}
          icon={Briefcase}
          accentColor="#087F83"
          subtext="8 engineering, 4 other"
        />

        <KPICard
          title="Total Applicants"
          value={MOCK_METRICS.totalApplicants}
          delta={MOCK_METRICS.totalApplicantsDelta}
          icon={Users}
          accentColor="#0EA5E9"
          subtext="S-BERT screened"
        />

        <KPICard
          title="Invitations Sent"
          value={MOCK_METRICS.invitationsSent}
          delta={MOCK_METRICS.invitationsSentDelta}
          icon={MailCheck}
          accentColor="#8B5CF6"
          subtext="Zero password friction"
        />

        <KPICard
          title="Round 1 Completed"
          value={MOCK_METRICS.round1Completed}
          delta={MOCK_METRICS.round1CompletedDelta}
          icon={PhoneCall}
          accentColor="#102B35"
          subtext="Agent 1 behavioral"
        />

        <KPICard
          title="Round 2 Completed"
          value={MOCK_METRICS.round2Completed}
          delta={MOCK_METRICS.round2CompletedDelta}
          icon={Code2}
          accentColor="#14B8A6"
          subtext="Agent 2 Monaco live"
        />

        <KPICard
          title="Pending Decisions"
          value={MOCK_METRICS.pendingDecisions}
          delta={MOCK_METRICS.pendingDecisionsDelta}
          icon={FileCheck}
          accentColor="#EAB308"
          isPositive={false}
          subtext="Human review required"
        />
      </div>

      {/* Main Visualizations: Funnel & Department Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-8">
          <RecruitmentFunnel />
        </div>
        <div className="lg:col-span-4">
          <DepartmentChart />
        </div>
      </div>

      {/* Trends & Upcoming Interviews */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7">
          <InterviewTrendsChart />
        </div>
        <div className="lg:col-span-5">
          <UpcomingInterviewsWidget />
        </div>
      </div>

      {/* Action Items & Live Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-6">
          <PendingActionsWidget />
        </div>
        <div className="lg:col-span-6">
          <RecentActivityFeed />
        </div>
      </div>
    </div>
  );
}
