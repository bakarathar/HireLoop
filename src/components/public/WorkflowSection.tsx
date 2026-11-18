import React from 'react';
import {
  FileText,
  MailCheck,
  Bot,
  CalendarCheck2,
  Code2,
  UserCheck,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'AI Job Profiling & S-BERT Screening',
      desc: 'Upload JD. NLP extracts skills & builds an editable framework. Sentence-BERT calculates advisory resume-job fit score.',
      icon: FileText,
      badge: 'Organization Admin',
    },
    {
      num: '02',
      title: 'Tokenized Candidate Invitation',
      desc: 'Candidates receive secure time-limited links. No account creation or password friction required.',
      icon: MailCheck,
      badge: 'Candidate Journey',
    },
    {
      num: '03',
      title: 'Agent 1: Behavioral Screening',
      desc: 'Dynamic phone/voice interview. Probes vague responses and scores 6 dimensions with written evidence.',
      icon: Bot,
      badge: 'Agent 1 Screener',
    },
    {
      num: '04',
      title: 'Autonomous Next-Day Scheduling',
      desc: 'Passing candidates are booked directly into supervisor calendars (Google/Microsoft) with zero email delays.',
      icon: CalendarCheck2,
      badge: 'Autonomous Booking',
    },
    {
      num: '05',
      title: 'Agent 2: Adaptive Coding & Q&A',
      desc: 'In-browser Monaco coding assessment + conceptual depth testing with background advisory integrity monitoring.',
      icon: Code2,
      badge: 'Agent 2 Evaluator',
    },
    {
      num: '06',
      title: '1-Page Brief & Final Human Decision',
      desc: 'Hiring managers review technical briefs. Human makes the call to advance, offer, or send personalized feedback.',
      icon: UserCheck,
      badge: 'Human-in-the-Loop',
    },
  ];

  return (
    <section className="py-24 bg-[#F7F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#087F83] mb-3">
            How it works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1926] tracking-tight">
            From job opening to hiring decision
          </h2>
          <p className="mt-4 text-base text-[#73818A] leading-relaxed">
            A consistent workflow for recruiters, hiring managers, and candidates,
            with clear ownership at every stage.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/90 p-7 shadow-sm hover:shadow-xl hover:border-[#087F83]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#087F83]/10 text-[#087F83]">
                      {step.badge}
                    </span>
                    <span className="text-2xl font-black text-gray-300 group-hover:text-[#C9F36A] transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#0B1926] text-[#C9F36A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0B1926] mb-2 group-hover:text-[#087F83] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#73818A] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-gray-100 flex items-center text-xs font-semibold text-[#087F83] group-hover:text-[#0B1926] transition-colors">
                  <span>Learn workflow mechanics</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Product Rule Notice Box */}
        <div className="mt-16 bg-[#102B35] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#C9F36A] text-[#0B1926] shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Core Architectural Rule: AI Recommends. Humans Decide.
              </h4>
              <p className="text-sm text-gray-300 mt-1 max-w-2xl">
                Candidates experience an inviting company interview with zero accounts required. All
                evaluations, fit scores and integrity monitors remain strictly advisory. Final hiring
                decisions rest 100% with authorized human recruiters and supervisors.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#C9F36A]">
              EU AI Act Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
