import React from 'react';
import { UserRole } from '../../types';
import { ShieldCheck, UserCheck, Code } from 'lucide-react';

interface RoleBadgeProps {
  role: UserRole;
  size?: 'sm' | 'md';
}

export const RoleBadge: React.FC<RoleBadgeProps> = ({ role, size = 'md' }) => {
  const configs = {
    ADMIN: {
      label: 'Admin',
      icon: ShieldCheck,
      bgColor: 'bg-[#BDA8F0]/15 text-[#0B1926] border-[#BDA8F0]/50',
      accentDot: 'bg-[#7651C8]',
    },
    HR_MANAGER: {
      label: 'HR Manager',
      icon: UserCheck,
      bgColor: 'bg-[#7651C8]/15 text-[#7651C8] border-[#7651C8]/40',
      accentDot: 'bg-[#7651C8]',
    },
    SUPERVISOR: {
      label: 'Technical Supervisor',
      icon: Code,
      bgColor: 'bg-[#352748]/15 text-[#352748] border-[#352748]/40',
      accentDot: 'bg-[#352748]',
    },
  };

  const current = configs[role];
  const Icon = current.icon;

  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs font-semibold';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${current.bgColor} ${sizeClasses}`}
    >
      <Icon className="w-3.5 h-3.5" />
      <span>{current.label}</span>
    </span>
  );
};
