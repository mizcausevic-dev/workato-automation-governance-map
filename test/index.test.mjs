import assert from 'node:assert/strict';
import { test } from 'node:test';
import fixture from '../fixtures/sample.json' with { type: 'json' };
import { summarizeSignal } from '../src/index.mjs';

test('Workato signal fixture summarizes deterministically', () => {
  const summary = summarizeSignal(fixture);
  assert.equal(summary.vendor, 'Workato');
  assert.equal(summary.domain, 'Integration / Automation');
  assert.equal(summary.averageRisk, 68);
  assert.equal(summary.averageEvidence, 7);
  assert.equal(summary.priorityLane, 'Spend and exposure posture');
});
