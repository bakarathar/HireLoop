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
      bgColor: 'bg-[#C9F36A]/15 text-[#0B1926] border-[#C9F36A]/50',
      accentDot: 'bg-[#087F83]',
    },
    HR_MANAGER: {
      label: 'HR Manager',
      icon: UserCheck,
      bgColor: 'bg-[#087F83]/15 text-[#087F83] border-[#087F83]/40',
      accentDot: 'bg-[#087F83]',
    },
    SUPERVISOR: {
      label: 'Technical Supervisor',
      icon: Code,
      bgColor: 'bg-[#102B35]/15 text-[#102B35] border-[#102B35]/40',
      accentDot: 'bg-[#102B35]',
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
