import { PublicNavbar } from '@/components/public/Navbar';
import { PublicHero } from '@/components/public/Hero';
import { MetricsBar } from '@/components/public/MetricsBar';
import { WorkflowSection } from '@/components/public/WorkflowSection';
import { PublicFooter } from '@/components/public/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FA]">
      {/* Top Navbar */}
      <PublicNavbar />

      {/* Main Hero Section with Optibiz Aesthetic */}
      <main className="flex-1">
        <PublicHero />
        <MetricsBar />
        <WorkflowSection />

        {/* Call to Action Banner */}
        <section className="bg-[#0B1926] py-16 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Make the hiring process easier to run
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Coordinate candidate screening, interviews, evaluations, and final decisions
              without adding another disconnected tool.
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/login"
                className="px-6 py-3 rounded-lg bg-[#C9F36A] hover:bg-[#B7DC60] text-[#0B1926] font-bold text-sm transition-colors flex items-center gap-2"
              >
                <span>Access Organization Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/app/dashboard"
                className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-colors"
              >
                Open Demo Sandbox
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <PublicFooter />
    </div>
  );
}
