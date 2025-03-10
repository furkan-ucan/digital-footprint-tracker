/**
 * Common types and utilities for Digital Footprint Tracker
 */

// Tracker Types
export enum TrackerType {
  ANALYTICS = 'analytics',
  ADVERTISING = 'advertising',
  SOCIAL = 'social',
  ESSENTIAL = 'essential',
  OTHER = 'other',
}

// Privacy Score Types
export interface PrivacyScore {
  score: number;
  riskLevel: 'low' | 'medium' | 'high';
  details: {
    trackerCount: number;
    cookieCount: number;
    thirdPartyRequests: number;
  };
}

// Utility Functions
export const calculateRiskLevel = (score: number): 'low' | 'medium' | 'high' => {
  if (score < 30) return 'low';
  if (score < 70) return 'medium';
  return 'high';
};

// Constants
export const PRIVACY_THRESHOLDS = {
  LOW_RISK: 30,
  MEDIUM_RISK: 70,
} as const;
