import { playwrightTest } from '@axe-core/watcher';

const SERVER_URL = 'https://axe.deque.com';
const AXE_DEVHUB_API_KEY = process.env.AXE_DEVHUB_API_KEY;

if (!AXE_DEVHUB_API_KEY) {
  throw new Error('Please provide the AXE_DEVHUB_API_KEY environment variable.');
}


const { test, expect } = playwrightTest({
  axe: {
    apiKey: AXE_DEVHUB_API_KEY,
    serverURL: SERVER_URL,

    configurationOverrides: {
      accessibilityStandard: 'WCAG 2.2 AAA', // Defines the accessibility standard to apply during axe-core scans
      axeCoreVersion: '4.10.2', // Specifies the version of axe-core to use
      bestPractices: true, // Enables or disables axe-core best practice rules
      experimentalRules: true // Enables or disables experimental axe-core rules
    }
  },
  headless: false,
  // channel: 'chromium',
  args: ['--headless=new'],
});

export { test, expect };
