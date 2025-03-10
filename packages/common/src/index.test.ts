/// <reference types="jest" />

import { calculateRiskLevel, PRIVACY_THRESHOLDS } from './index';

describe('Common Utils', () => {
  describe('calculateRiskLevel', () => {
    it('should return "low" for score less than LOW_RISK threshold', () => {
      expect(calculateRiskLevel(PRIVACY_THRESHOLDS.LOW_RISK - 1)).toBe('low');
    });

    it('should return "medium" for score between LOW_RISK and MEDIUM_RISK thresholds', () => {
      expect(calculateRiskLevel(PRIVACY_THRESHOLDS.LOW_RISK + 1)).toBe('medium');
    });

    it('should return "high" for score greater than MEDIUM_RISK threshold', () => {
      expect(calculateRiskLevel(PRIVACY_THRESHOLDS.MEDIUM_RISK + 1)).toBe('high');
    });
  });
});
