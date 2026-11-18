'use client';

import React, { createContext, useContext, useState } from 'react';
import { UserProfile, UserRole } from '../types';
import { DEMO_USERS } from '../mock/data';

interface AuthContextType {
  currentUser: UserProfile;
  currentRole: UserRole;
  switchRole: (role: UserRole) => void;
  isDemoMode: boolean;
  toggleDemoMode: () => void;
  availableRoles: UserProfile[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRole, setCurrentRole] = useState<UserRole>(() => {
    if (typeof window === 'undefined') return 'ADMIN';
    const saved = localStorage.getItem('hireloop_demo_role') as UserRole | null;
    return saved && DEMO_USERS[saved] ? saved : 'ADMIN';
  });
  const [currentUser, setCurrentUser] = useState<UserProfile>(() => {
    if (typeof window === 'undefined') return DEMO_USERS.ADMIN;
    const saved = localStorage.getItem('hireloop_demo_role') as UserRole | null;
    return saved && DEMO_USERS[saved] ? DEMO_USERS[saved] : DEMO_USERS.ADMIN;
  });
  const [isDemoMode, setIsDemoMode] = useState<boolean>(true);

  const switchRole = (role: UserRole) => {
    if (DEMO_USERS[role]) {
      setCurrentRole(role);
      setCurrentUser(DEMO_USERS[role]);
      localStorage.setItem('hireloop_demo_role', role);
    }
  };

  const toggleDemoMode = () => {
    setIsDemoMode((prev) => !prev);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        currentRole,
        switchRole,
        isDemoMode,
        toggleDemoMode,
        availableRoles: Object.values(DEMO_USERS),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
