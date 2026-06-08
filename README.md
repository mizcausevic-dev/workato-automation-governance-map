# workato-automation-governance-map

Board-readable Kinetic Gain proof repo for **Workato** platform and company signal coverage.

## Product thesis

Integration automation creates hidden operational dependencies when recipes, owners, error paths, and business outcomes are not connected.

This repo turns that problem into a small, inspectable product surface: synthetic fixture data, a deterministic CLI, a tested scoring model, a JSON report, and a static brief that explains the business and technical value of the signal.

## Buyer and operator fit

- **Primary audience:** IT leaders, RevOps, business systems teams, and integration owners
- **Signal domain:** Integration Automation
- **Executive question:** Where is this system creating exposure, waste, or decision latency?
- **Product motion:** The product maps automation recipes to owners, control gaps, downstream systems, failure posture, and remediation decisions.
- **Value architecture:** Leaders can separate high-value automation from brittle workflow sprawl and focus platform investment.

## What this repo proves

- **Normalize:** messy Workato operating evidence is represented as explicit lanes.
- **Score:** risk and evidence depth are measured separately so weak proof is not hidden by high urgency.
- **Route:** each lane has an owner and next action instead of a vague status.
- **Package:** CLI output, tests, JSON report, and static page all tell the same board-ready story.

## Integration boundary

Focus area: Workato recipes, connectors, jobs, error handling, owners, and downstream business systems.

This is synthetic proof only. It does not connect to live Workato tenants, call private APIs, store secrets, publish credentials, or expose customer data.

## Local run

```bash
npm install
npm test
npm run build
npm run demo
```

## Public surface

The generated site is in `site/index.html`. The data report is in `site/report.json`.

## Keywords

- Workato
- integration governance
- automation risk
- business systems
- workflow reliability
