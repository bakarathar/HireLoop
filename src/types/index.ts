export type UserRole = 'ADMIN' | 'HR_MANAGER' | 'SUPERVISOR';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  roleTitle: string;
  avatar: string;
  organizationName: string;
  organizationId: string;
}

export type JobStatus = 'active' | 'draft' | 'paused' | 'closed';

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote' | 'Hybrid';
  applicantsCount: number;
  status: JobStatus;
  createdAt: string;
  experienceLevel: string;
  skills: string[];
  passThreshold: number;
}

export type RecruitmentStage =
  | 'Applied'
  | 'Invitation Sent'
  | 'Round 1 Scheduled'
  | 'Round 1 In Progress'
  | 'Round 1 Completed'
  | 'Round 2 Availability'
  | 'Round 2 Scheduled'
  | 'Round 2 In Progress'
  | 'Evaluation Pending'
  | 'Final Review'
  | 'Offer'
  | 'Rejected';

export interface Candidate {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  appliedJobId: string;
  appliedJobTitle: string;
  department: string;
  appliedDate: string;
  resumeFitScore: number; // 0-100 advisory
  resumeCategory: string; // 24 categories from S-BERT model
  stage: RecruitmentStage;
  latestInterviewStatus: string;
  agent1Score?: number; // 0-100
  agent2Score?: number; // 0-100
  integrityScore?: number; // 0-100 advisory
  avatar?: string;
  yearsExperience: number;
}

export interface ActivityItem {
  id: string;
  actorName: string;
  actorRole: 'AI Agent 1' | 'AI Agent 2' | 'HR Manager' | 'Supervisor' | 'System';
  action: string;
  candidateName: string;
  jobTitle: string;
  timestamp: string;
  badgeType: 'ai' | 'human' | 'system' | 'decision';
  details?: string;
}

export interface UpcomingInterview {
  id: string;
  candidateId: string;
  candidateName: string;
  candidateRole: string;
  round: 'Round 1 (Phone Behavioral)' | 'Round 2 (Adaptive Technical)';
  dateTime: string;
  interviewerName: string;
  channel: 'Voice Call (Twilio/Deepgram)' | 'In-Browser WebRTC & Monaco';
  status: 'Confirmed' | 'Pending Availability' | 'Starting Soon';
}

export interface PendingHRAction {
  id: string;
  candidateId: string;
  candidateName: string;
  jobTitle: string;
  type: 'EVALUATION_REVIEW' | 'HUMAN_OVERRIDE' | 'OFFER_APPROVAL' | 'SCHEDULE_CONFLICT';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  createdAt: string;
}

export interface DashboardMetrics {
  activeJobs: number;
  activeJobsDelta: string;
  totalApplicants: number;
  totalApplicantsDelta: string;
  invitationsSent: number;
  invitationsSentDelta: string;
  round1Completed: number;
  round1CompletedDelta: string;
  round2Completed: number;
  round2CompletedDelta: string;
  pendingDecisions: number;
  pendingDecisionsDelta: string;
  avgTimeToHireDays: number;
  offerAcceptanceRate: number;
  aiAdvisoryAccuracy: number;
}
