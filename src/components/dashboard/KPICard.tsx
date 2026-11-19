import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  delta: string;
  isPositive?: boolean;
  icon: LucideIcon;
  accentColor?: string;
  subtext?: string;
}

export const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  delta,
  isPositive = true,
  icon: Icon,
  accentColor = '#7651C8',
  subtext,
}) => {
  return (
    <div className="bg-white rounded-lg border border-[#E8E1F3] p-5 shadow-[0_1px_2px_rgba(15,35,45,0.04)] hover:border-[#C2B2DF] transition-colors flex flex-col justify-between group">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-semibold text-[#777184] tracking-wider uppercase">
            {title}
          </span>
          <div className="text-2xl sm:text-3xl font-black text-[#0B1926] mt-1 tracking-tight">
            {value}
          </div>
        </div>

        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
          style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
        >
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col items-start gap-1 text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-2">
        <span
          className={`font-semibold flex items-center gap-1 ${
            isPositive ? 'text-emerald-600' : 'text-amber-600'
          }`}
        >
          {isPositive ? (
            <TrendingUp className="w-3.5 h-3.5" />
          ) : (
            <TrendingDown className="w-3.5 h-3.5" />
          )}
          {delta}
        </span>
        {subtext && <span className="text-[11px] leading-snug text-gray-400 sm:text-right">{subtext}</span>}
      </div>
    </div>
  );
};
