'use client';

import React, { useState } from 'react';
import { PublicNavbar } from '@/components/public/Navbar';
import { PublicFooter } from '@/components/public/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FA]">
      <PublicNavbar />

      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact info column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="px-3.5 py-1.5 rounded-full bg-[#087F83]/10 text-[#087F83] text-xs font-bold uppercase tracking-wider">
                  Get in Touch
                </span>
                <h1 className="text-4xl font-extrabold text-[#0B1926] mt-4 tracking-tight">
                  Request a Private Enterprise Walkthrough
                </h1>
                <p className="mt-3 text-base text-[#73818A] leading-relaxed">
                  Connect with our talent engineering architects to see how HireLoop can be deployed
                  within your hiring infrastructure.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200">
                  <div className="w-10 h-10 rounded-xl bg-[#087F83]/15 text-[#087F83] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Email Us</div>
                    <div className="text-sm font-bold text-[#0B1926]">enterprise@hireloop.ai</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200">
                  <div className="w-10 h-10 rounded-xl bg-[#087F83]/15 text-[#087F83] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Direct Line</div>
                    <div className="text-sm font-bold text-[#0B1926]">+1 (800) 412-LOOP</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200">
                  <div className="w-10 h-10 rounded-xl bg-[#087F83]/15 text-[#087F83] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Headquarters</div>
                    <div className="text-sm font-bold text-[#0B1926]">San Francisco, CA & London, UK</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#C9F36A]/30 text-[#087F83] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-[#087F83]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1926]">Demo Request Received</h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Thank you! Our recruitment architecture team will contact you within 2 business hours
                    with your private sandbox credentials.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#0B1926] text-white text-xs font-bold"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-[#0B1926]">Organization Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#087F83]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="marcus@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#087F83]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Global Inc."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#087F83]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Estimated Annual Hires
                      </label>
                      <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#087F83] bg-white">
                        <option>50 – 200 hires</option>
                        <option>201 – 1,000 hires</option>
                        <option>1,000+ enterprise hires</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Specific Requirements or Workflow Needs
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your current interview pipeline, engineering challenges, or compliance needs..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#087F83]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#087F83] hover:bg-[#065E61] text-white text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
