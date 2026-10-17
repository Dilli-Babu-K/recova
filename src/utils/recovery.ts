/**
 * Pure recovery and sleep calculation logic for Recova
 * Built with plain language and sports-science readiness models.
 */

export type ReadinessZone = 'go' | 'manage' | 'recover';

export interface RecoveryInterpretation {
  zone: ReadinessZone;
  label: string;
  badgeColor: string;
  textColor: string;
  description: string;
  actionRecommendation: string;
}

/**
 * Interpret a 0-100% recovery score into plain-language readiness advice
 * Green (75-100) = Go
 * Yellow (50-74) = Manage
 * Red (0-49) = Recover
 */
export function interpretRecoveryScore(score: number): RecoveryInterpretation {
  const boundedScore = Math.max(0, Math.min(100, Math.round(score)));

  if (boundedScore >= 75) {
    return {
      zone: 'go',
      label: 'Ready to train',
      badgeColor: '#00E676',
      textColor: 'text-emerald-400',
      description: 'Your nervous system and muscles are well-recharged.',
      actionRecommendation: 'Green light for high-intensity training or personal records.',
    };
  }

  if (boundedScore >= 50) {
    return {
      zone: 'manage',
      label: 'Manage & moderate',
      badgeColor: '#F59E0B',
      textColor: 'text-amber-400',
      description: 'Moderate readiness. You can work out, but monitor exertion.',
      actionRecommendation: 'Steady state work or technique sessions are ideal today.',
    };
  }

  return {
    zone: 'recover',
    label: 'Rest & recharge',
    badgeColor: '#EF4444',
    textColor: 'text-red-400',
    description: 'High accumulated strain or insufficient deep sleep.',
    actionRecommendation: 'Prioritize full rest, hydration, and an early bedtime.',
  };
}

/**
 * Calculate True Sleep Duration by subtracting restless/awake minutes from total time in bed
 */
export function calculateTrueSleep(timeInBedMinutes: number, awakeOrRestlessMinutes: number): {
  trueSleepMinutes: number;
  formattedDuration: string;
  efficiencyPercentage: number;
} {
  const restless = Math.max(0, awakeOrRestlessMinutes);
  const inBed = Math.max(0, timeInBedMinutes);
  const trueSleepMinutes = Math.max(0, inBed - restless);
  
  const hours = Math.floor(trueSleepMinutes / 60);
  const mins = trueSleepMinutes % 60;
  const formattedDuration = mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  const efficiencyPercentage = inBed > 0 ? Math.round((trueSleepMinutes / inBed) * 100) : 0;

  return {
    trueSleepMinutes,
    formattedDuration,
    efficiencyPercentage,
  };
}

/**
 * Compare against target sleep goal (e.g. 8h = 480m)
 */
export function evaluateSleepGoal(actualMinutes: number, targetMinutes: number = 480): {
  achieved: boolean;
  differenceMinutes: number;
  diffSummary: string;
} {
  const diff = actualMinutes - targetMinutes;
  const absDiff = Math.abs(diff);
  const hours = Math.floor(absDiff / 60);
  const mins = absDiff % 60;
  const durationStr = hours > 0 ? (mins > 0 ? `${hours}h ${mins}m` : `${hours}h`) : `${mins}m`;

  if (diff >= 0) {
    return {
      achieved: true,
      differenceMinutes: diff,
      diffSummary: diff === 0 ? 'Hit your target exactly' : `${durationStr} over target`,
    };
  }

  return {
    achieved: false,
    differenceMinutes: diff,
    diffSummary: `${durationStr} under target`,
  };
}
