import React from 'react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      value: '60d → 5d',
      label: 'Accelerated Time-to-Hire',
      sublabel: 'From months to days without lowering hiring bars',
    },
    {
      value: '150,000+',
      label: 'Interview Minutes Handled',
      sublabel: 'Evidence-based transcript rationales generated',
    },
    {
      value: '98.4%',
      label: 'Candidate Completion Rate',
      sublabel: 'Frictionless journey with no registration barrier',
    },
    {
      value: '$420,000+',
      label: 'Average Annual Operational Savings',
      sublabel: 'Per enterprise talent engineering organization',
    },
  ];

  return (
    <section className="bg-[#F5F1FB] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-[#E8E1F3] px-6 sm:px-8 py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EEE9F5]">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start ${
                idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#211A33] tracking-tight">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-[#7651C8] mt-1">
                {item.label}
              </div>
              <p className="text-xs text-[#777184] mt-1 leading-relaxed">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
