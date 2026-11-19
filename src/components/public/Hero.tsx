'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle2, BriefcaseBusiness, CalendarDays, Users } from 'lucide-react';

export const PublicHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F1FB] pt-12 pb-16 lg:pt-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="text-sm font-semibold text-[#7651C8] border-l-2 border-[#7651C8] pl-3">
              Recruitment operations, one place
            </div>

            <h1 className="mt-5 text-[42px] sm:text-[54px] lg:text-[60px] font-bold tracking-[-0.045em] leading-[1.02] text-[#211A33]">
              A clearer way to
              <br />
              evaluate talent.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#667681]">
              HireLoop brings interviews, technical assessments, scheduling, and hiring decisions into one practical workflow.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/login"
                className="px-5 py-3 rounded-lg bg-[#7651C8] hover:bg-[#6341AF] text-white font-semibold text-sm transition-colors flex items-center gap-2"
              >
                Request a demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/app/dashboard"
                className="px-5 py-3 rounded-lg bg-white border border-[#E3DCEC] hover:border-[#C2B2DF] text-[#312A41] font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5" />
                Explore the platform
              </Link>
            </div>

            <p className="mt-5 text-xs text-[#777184]">
              Built for recruiting teams and technical hiring leads
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl border border-[#E3DCEC] bg-white shadow-[0_20px_50px_rgba(53,38,83,0.12)] overflow-hidden">
              <div className="h-11 px-4 border-b border-[#EEE9F5] flex items-center justify-between bg-[#FCFBFE]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DED6E9]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DED6E9]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DED6E9]" />
                </div>
                <span className="text-[11px] font-semibold text-[#777184]">Recruitment overview</span>
              </div>

              <div className="grid grid-cols-[44px_1fr] min-h-[430px]">
                <div className="border-r border-[#EEE9F5] bg-[#F8F5FC] py-4 flex flex-col items-center gap-4">
                  {[BriefcaseBusiness, Users, CalendarDays].map((Icon, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-md flex items-center justify-center ${
                        index === 0 ? 'bg-[#7651C8] text-white' : 'text-[#A69BB8]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  ))}
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-[#777184]">Active search</p>
                      <h2 className="mt-1 text-lg font-bold text-[#211A33]">Senior Software Engineer</h2>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#F0EAFB] text-[#6945B5]">
                      18 in review
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      ['142', 'Applicants'],
                      ['38', 'Screened'],
                      ['12', 'In review'],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-lg border border-[#EEE9F5] p-3">
                        <div className="text-xl font-bold text-[#211A33]">{value}</div>
                        <div className="mt-1 text-[10px] text-[#777184]">{label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-bold text-[#211A33]">Candidates ready for review</h3>
                      <span className="text-[11px] text-[#7651C8] font-semibold">View all</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        ['Elena Rostova', 'Distributed systems', '89', 'Ready'],
                        ['Tariq Al-Mansoor', 'Machine learning', '94', 'Ready'],
                        ['Sophia Martinez', 'Platform engineering', '86', 'Interview'],
                      ].map(([name, role, score, state]) => (
                        <div key={name} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-[#EEE9F5] px-3 py-3">
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-[#312A41]">{name}</div>
                            <div className="mt-0.5 text-[11px] text-[#777184] truncate">{role} · Score {score}</div>
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#7651C8]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {state}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
