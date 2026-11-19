import { PublicNavbar } from '@/components/public/Navbar';
import { PublicFooter } from '@/components/public/Footer';
import Link from 'next/link';
import { Bot, Code2, CalendarCheck, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FeaturesPage() {
  const featureList = [
    {
      title: 'Agent 1: Conversational Behavioral Interviewer',
      subtitle: 'Dynamic probing beyond static question banks',
      desc: 'Powered by contextual LLM orchestration, Agent 1 interviews candidates over phone or WebRTC voice. It analyzes responses in real-time, detects vague or evasive statements, flags inconsistencies against submitted CV claims, and scores six core dimensions: Communication Clarity, Motivation Fit, Experience Depth, Culture Alignment, Honesty Signals, and Overall Suitability.',
      icon: Bot,
      details: [
        'Voice telephony integration (Twilio / Deepgram)',
        'Adaptive 8 to 15 turn interviews',
        'Transparent written rationale for every score',
        'Full candidate transcript available to HR',
      ],
    },
    {
      title: 'Agent 2: Adaptive Technical & Coding Assessment',
      subtitle: 'Separates memorized answers from real software engineering',
      desc: 'Agent 2 tests conceptual depth through dynamic follow-up questioning. When live coding is enabled, an in-browser Monaco Editor environment allows candidates to implement algorithms with test execution. Code is evaluated for correctness, computational complexity, code quality, and problem-solving process.',
      icon: Code2,
      details: [
        'Monaco Editor with multi-language support (Python, JS, Java, C++)',
        'Sandboxed code evaluation with automated test cases',
        'Adaptive conceptual questioning matching candidate depth',
        '1-Page comprehensive technical brief for engineering leads',
      ],
    },
    {
      title: 'Autonomous Next-Day Scheduling',
      subtitle: 'Google Calendar & Microsoft Graph Integration',
      desc: 'Candidates who meet the Agent 1 pass threshold are automatically scheduled for Round 2 without human recruiter intervention. The scheduler inspects interviewer calendars and reserves the earliest eligible slot (preferring same-day before 3 PM, or next business day) with instant calendar invites and anti-double-booking locks.',
      icon: CalendarCheck,
      details: [
        'Bi-directional calendar synchronization',
        'Zero manual email back-and-forth delay',
        'Automated rescheduling options for candidates',
        'Timezone auto-detection and confirmation',
      ],
    },
    {
      title: 'Advisory Integrity Telemetry & Compliance',
      subtitle: 'EU AI Act high-risk compliant and fully explainable',
      desc: 'Background monitoring tracks response latency patterns, tab focus switching, paste events, depth consistency, and AI-generated text markers. These signals combine into an advisory 0-100 integrity report. By design, the integrity monitor NEVER auto-disqualifies candidates, ensuring human reviewers make all final decisions.',
      icon: ShieldCheck,
      details: [
        'Non-invasive behavioral and interaction telemetry',
        'Advisory score transparently broken down into 5 signals',
        'Full audit trail for overrides and hiring outcomes',
        'Automated performance-only rejection feedback within 5 minutes',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1FB]">
      <PublicNavbar />

      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-[#7651C8]/10 text-[#7651C8] text-xs font-bold uppercase tracking-wider">
              Core Capabilities
            </span>
            <h1 className="text-4xl font-extrabold text-[#0B1926] mt-4 tracking-tight">
              Enterprise Recruitment Features
            </h1>
            <p className="mt-3 text-base text-[#777184]">
              Discover how HireLoop integrates dual AI agents, automated scheduling, and human oversight into one seamless platform.
            </p>
          </div>

          <div className="space-y-12">
            {featureList.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-8 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1926] text-[#BDA8F0] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0B1926]">{feat.title}</h2>
                    <h3 className="text-sm font-semibold text-[#7651C8]">{feat.subtitle}</h3>
                    <p className="text-sm text-[#777184] leading-relaxed">{feat.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {feat.details.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#7651C8] shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-[#F5F1FB] rounded-2xl p-6 border border-gray-200/80 flex flex-col justify-between h-full">
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-[#0B1926] uppercase tracking-wider">
                        Enterprise Impact
                      </span>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Reduces recruiter screening workload by 80% while elevating consistency and hiring fairness.
                      </p>
                    </div>
                    <Link
                      href="/login"
                      className="mt-6 w-full py-2.5 rounded-xl bg-[#0B1926] hover:bg-[#352748] text-white text-xs font-bold text-center flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>Explore In App</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#BDA8F0]" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
