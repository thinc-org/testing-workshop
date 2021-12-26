import { PlaywrightTestConfig, devices } from "@playwright/test"
const config: PlaywrightTestConfig = {
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
}
export default config
