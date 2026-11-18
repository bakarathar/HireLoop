import { PublicNavbar } from '@/components/public/Navbar';
import { PublicFooter } from '@/components/public/Footer';
import Link from 'next/link';
import { Building, Users, Server, Briefcase, ArrowRight } from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Enterprise Software & Cloud Engineering',
      desc: 'Assess algorithms, distributed systems intuition, and cloud architecture at scale without burdening senior staff engineers with repetitive initial screens.',
      icon: Server,
      tags: ['Live Coding Sandbox', 'Adaptive Q&A', 'Integrity Signals'],
    },
    {
      title: 'High-Volume Campus & Early-Career Drives',
      desc: 'Screen hundreds of graduate applicants concurrently with Agent 1 voice screening and deliver individual performance feedback reports within 5 minutes.',
      icon: Users,
      tags: ['Concurrent Voice Calls', 'Feedback Generator', 'Talent Pool'],
    },
    {
      title: 'Financial Services, Banking & Fintech',
      desc: 'Meet rigorous regulatory scrutiny under the EU AI Act with transparent scoring rationales, auditable decision logs, and full human override authority.',
      icon: Building,
      tags: ['Audit Trail', 'SOC2 Compliant', 'Anti-Bias Safeguards'],
    },
    {
      title: 'Global Remote Teams & BPOs',
      desc: 'Conduct interviews across multiple time zones with zero manual scheduling lag. Autonomous calendar reservation ensures instantaneous pipeline progression.',
      icon: Briefcase,
      tags: ['Multi-Timezone Scheduling', 'Instant Booking', 'GDPR Erase/Export'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FA]">
      <PublicNavbar />

      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-[#087F83]/10 text-[#087F83] text-xs font-bold uppercase tracking-wider">
              Tailored Workflows
            </span>
            <h1 className="text-4xl font-extrabold text-[#0B1926] mt-4 tracking-tight">
              Recruitment Solutions by Industry
            </h1>
            <p className="mt-3 text-base text-[#73818A]">
              Engineered to meet the specific throughput, security, and technical rigor of leading hiring organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#102B35] text-[#C9F36A] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-[#0B1926] mb-3">{sol.title}</h2>
                    <p className="text-sm text-[#73818A] leading-relaxed mb-6">{sol.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {sol.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-[#F7F9FA] border border-gray-200 text-xs font-semibold text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/login"
                    className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#087F83] hover:text-[#0B1926] transition-colors"
                  >
                    <span>View Demo Environment</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
