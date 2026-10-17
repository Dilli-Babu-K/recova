import test from 'node:test';
import assert from 'node:assert/strict';
import { interpretRecoveryScore, calculateTrueSleep, evaluateSleepGoal } from './recovery.ts';

test('interpretRecoveryScore correctly identifies readiness zones', () => {
  const high = interpretRecoveryScore(95);
  assert.equal(high.zone, 'go');
  assert.equal(high.badgeColor, '#00E676');

  const boundaryHigh = interpretRecoveryScore(75);
  assert.equal(boundaryHigh.zone, 'go');

  const moderate = interpretRecoveryScore(62);
  assert.equal(moderate.zone, 'manage');
  assert.equal(moderate.badgeColor, '#F59E0B');

  const boundaryModerate = interpretRecoveryScore(50);
  assert.equal(boundaryModerate.zone, 'manage');

  const low = interpretRecoveryScore(42);
  assert.equal(low.zone, 'recover');
  assert.equal(low.badgeColor, '#EF4444');

  // Clamping test
  const clampedMax = interpretRecoveryScore(120);
  assert.equal(clampedMax.zone, 'go');
  const clampedMin = interpretRecoveryScore(-10);
  assert.equal(clampedMin.zone, 'recover');
});

test('calculateTrueSleep subtracts restless minutes accurately', () => {
  // 8 hours in bed (480 mins), 28 mins restless
  const sleep = calculateTrueSleep(480, 28);
  assert.equal(sleep.trueSleepMinutes, 452);
  assert.equal(sleep.formattedDuration, '7h 32m');
  assert.equal(sleep.efficiencyPercentage, 94);

  // Exact hours without minutes
  const roundSleep = calculateTrueSleep(420, 0);
  assert.equal(roundSleep.trueSleepMinutes, 420);
  assert.equal(roundSleep.formattedDuration, '7h');
});

test('evaluateSleepGoal compares target against actual sleep', () => {
  // 8h target (480 min), slept 7h (420 min) -> 1h under target
  const under = evaluateSleepGoal(420, 480);
  assert.equal(under.achieved, false);
  assert.equal(under.differenceMinutes, -60);
  assert.equal(under.diffSummary, '1h under target');

  // Slept 8h 15m (495 min) -> 15m over target
  const over = evaluateSleepGoal(495, 480);
  assert.equal(over.achieved, true);
  assert.equal(over.differenceMinutes, 15);
  assert.equal(over.diffSummary, '15m over target');
});
