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
    <div className="space-y-6 sm:space-y-8 pb-12">
      <section className="relative overflow-hidden rounded-xl border border-[#DDE5E8] bg-white px-5 py-5 sm:px-7 sm:py-6 shadow-[0_1px_3px_rgba(15,35,45,0.04)]">
        <div className="absolute inset-y-0 left-0 w-1 bg-[#087F83]" />
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
              <span className="text-xs font-bold text-[#087F83] tracking-wider uppercase">
                Recruitment overview
              </span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="text-xs text-gray-500">{currentUser.organizationName}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1926] tracking-tight leading-tight">
              Welcome back, {currentUser.name}
            </h1>
            <p className="text-sm sm:text-base text-[#73818A] mt-2">
              Active jobs, interview progress, and items that need your attention.
            </p>
          </div>

          <div className="grid grid-cols-1 min-[360px]:grid-cols-2 xl:grid-cols-3 gap-2.5 xl:min-w-[460px]">
            <Link
              href="/app/pipeline"
              className="min-h-11 px-3 sm:px-4 py-2 rounded-lg border border-[#DDE5E8] bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Kanban className="w-3.5 h-3.5 text-[#087F83]" />
              <span>Recruitment Pipeline</span>
            </Link>

            <Link
              href="/app/invitations"
              className="min-h-11 px-3 sm:px-4 py-2 rounded-lg border border-[#DDE5E8] bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-[#087F83]" />
              <span>Invite Candidates</span>
            </Link>

            <Link
              href="/app/jobs"
              className="min-h-11 px-3 sm:px-4 py-2 rounded-lg bg-[#087F83] hover:bg-[#065E61] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors min-[360px]:col-span-2 xl:col-span-1"
            >
              <Plus className="w-3.5 h-3.5 text-[#C9F36A]" />
              <span>Create New Job</span>
            </Link>
          </div>
        </div>
      </section>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
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
