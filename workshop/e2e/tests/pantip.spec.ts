import { test, expect } from "@playwright/test"

test("test", async ({ page }) => {
  // Go to https://pantip.com/
  await page.goto("https://pantip.com/")

  // Click :nth-match(span:has-text("Pantip Pick"), 2)
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://pantip.com/home/pick' }*/),
    page.click(':nth-match(span:has-text("Pantip Pick"), 2)'),
  ])

  // Click text=เด็กเกิดปีขาลน่ากลัวยังไง
  const [page1] = await Promise.all([page.waitForEvent("popup"), page.click("text=เด็กเกิดปีขาลน่ากลัวยังไง")])

  // Click text=ดู 1 ความเห็นย่อย
  await page1.click("text=ดู 1 ความเห็นย่อย")

  // Click text=ดู 1 ความเห็นย่อย
  await page1.click("text=ดู 1 ความเห็นย่อย")

  // Click text=∨ ดู 1 ความเห็นย่อย ∨
  await page1.click("text=∨ ดู 1 ความเห็นย่อย ∨")
})
