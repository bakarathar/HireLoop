import { PublicNavbar } from '@/components/public/Navbar';
import { PublicFooter } from '@/components/public/Footer';
import Link from 'next/link';
import { WorkflowSection } from '@/components/public/WorkflowSection';
import { Cpu, Lock, ShieldCheck, Database, ArrowRight } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FA]">
      <PublicNavbar />

      <main className="flex-1">
        <div className="bg-[#0B1926] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#C9F36A] text-xs font-bold uppercase tracking-wider">
              System Architecture & Methodology
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 tracking-tight">
              Dual-Agent Recruitment Engine
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              How HireLoop coordinates machine learning resume classification, conversational LLMs,
              telemetry monitoring and calendar synchronization under human governance.
            </p>
          </div>
        </div>

        {/* Technical Architecture Highlights */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#087F83] text-[#C9F36A] flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1926] mb-1">
                  Fine-Tuned Sentence-BERT
                </h3>
                <p className="text-xs text-[#73818A] leading-relaxed">
                  Trained on 24 distinct job categories to classify candidate resumes with high precision
                  and compute advisory fit scores without replacing human judgment.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#087F83] text-[#C9F36A] flex items-center justify-center mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1926] mb-1">
                  Contextual Memory Orchestration
                </h3>
                <p className="text-xs text-[#73818A] leading-relaxed">
                  Maintains full conversational memory per candidate session. Automatically compares current
                  verbal answers with parsed resume claims to detect inconsistencies.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#087F83] text-[#C9F36A] flex items-center justify-center mb-4">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1926] mb-1">
                  Sandboxed Monaco Code Runner
                </h3>
                <p className="text-xs text-[#73818A] leading-relaxed">
                  Candidate code is executed in isolated containers against automated test cases. No untrusted
                  code is ever executed in the local browser.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step by step workflow */}
        <WorkflowSection />
      </main>

      <PublicFooter />
    </div>
  );
}
