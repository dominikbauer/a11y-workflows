import { playwrightTest } from '@axe-core/watcher'

const AXE_DEVHUB_API_KEY = process.env.AXE_DEVHUB_API_KEY!

const { test, expect } = playwrightTest({
  axe: {
    apiKey: AXE_DEVHUB_API_KEY
  },
  headless: false
  // Any other Playwright configuration you’d pass to chromium.launchPersistentContext() here
})

export { test, expect }