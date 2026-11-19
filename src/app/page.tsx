import { PublicNavbar } from '@/components/public/Navbar';
import { PublicHero } from '@/components/public/Hero';
import { MetricsBar } from '@/components/public/MetricsBar';
import { WorkflowSection } from '@/components/public/WorkflowSection';
import { PublicFooter } from '@/components/public/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1FB]">
      {/* Top Navbar */}
      <PublicNavbar />

      {/* Main Hero Section */}
      <main className="flex-1">
        <PublicHero />
        <MetricsBar />
        <WorkflowSection />

        {/* Call to Action Banner */}
        <section className="bg-[#F5F1FB] py-10 sm:py-14">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 py-10 sm:py-12 rounded-xl border border-[#E8E1F3] bg-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#211A33]">
              Make the hiring process easier to run
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#777184] max-w-2xl mx-auto">
              Coordinate candidate screening, interviews, evaluations, and final decisions
              without adding another disconnected tool.
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/login"
                className="px-6 py-3 rounded-lg bg-[#7651C8] hover:bg-[#6341AF] text-white font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <span>Access Organization Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/app/dashboard"
                className="px-6 py-3 rounded-lg bg-white hover:bg-[#F8F5FC] border border-[#E3DCEC] text-[#312A41] font-semibold text-sm transition-colors"
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
