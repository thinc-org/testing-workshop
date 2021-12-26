import { test, expect } from "@playwright/test"

test("test", async ({ page }) => {
  // Go to https://pantip.com/
  await page.goto("https://pantip.com/")

  // Click :nth-match(:text("My Feed"), 3)
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://pantip.com/home/feed' }*/),
    page.click(':nth-match(:text("My Feed"), 3)'),
  ])

  // Click text=พบกับ My Feed ที่คุณสามารถคัดเลือก และรวบรวมเรื่องราวที่คุณต้องการได้ด้วยตัวเองง
  await page.click("text=พบกับ My Feed ที่คุณสามารถคัดเลือก และรวบรวมเรื่องราวที่คุณต้องการได้ด้วยตัวเองง")

  // Click :nth-match(:text("Pantip Pick"), 4)
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://pantip.com/home/pick' }*/),
    page.click(':nth-match(:text("Pantip Pick"), 4)'),
  ])

  // Click text=[CR] น่านนนนนไง....กูว่าแล้วต้องไป
  const [page1] = await Promise.all([
    page.waitForEvent("popup"),
    page.evaluate(() => window.scrollTo(0, document.body.scrollHeight)),
    page.click("text=[CR] น่านนนนนไง....กูว่าแล้วต้องไป"),
  ])

  // Click #reply-comment-99755035 >> text=ดู 1 ความเห็นย่อย
  await page1.click("#reply-comment-99755035 >> text=ดู 1 ความเห็นย่อย")

  // Click #reply-comment-99755641 >> text=ดู 1 ความเห็นย่อย
  await page1.click("#reply-comment-99755641 >> text=ดู 1 ความเห็นย่อย")

  // Click #reply-comment-99757754 >> text=ดู 1 ความเห็นย่อย
  await page1.click("#reply-comment-99757754 >> text=ดู 1 ความเห็นย่อย")

  // Click #reply-comment-99758217 >> text=ดู 1 ความเห็นย่อย
  await page1.click("#reply-comment-99758217 >> text=ดู 1 ความเห็นย่อย")

  // Scroll to top of the page
  await page.evaluate(() => window.scrollTo(0, 0))

  // Close page
  await page1.close()

  // Click text=the movie ของ myhero academia มีผลต่อเนื้อเรื่องหลักมั้ยครับ
  const [page2] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("text=the movie ของ myhero academia มีผลต่อเนื้อเรื่องหลักมั้ยครับ"),
  ])
  // Click text=∨ ดู 1 ความเห็นย่อย ∨
  await page2.click("text=∨ ดู 1 ความเห็นย่อย ∨")
  // Click em:has-text("เข้าสู่ระบบ")
  await Promise.all([
    page2.waitForNavigation(/*{ url: 'https://pantip.com/login?redirect=aHR0cHM6Ly9wYW50aXAuY29tL3RvcGljLzQxMTY5NzM3' }*/),
    page2.click('em:has-text("เข้าสู่ระบบ")'),
  ])
  // Click text=ตั้งกระทู้
  await Promise.all([
    page2.waitForNavigation(/*{ url: 'https://pantip.com/login?redirect=Zm9ydW0vbmV3X3RvcGlj' }*/),
    page2.click("text=ตั้งกระทู้"),
  ])
  // Click text=อื่นๆarrow_drop_down
  await page2.click("text=อื่นๆarrow_drop_down")
  // Click a:nth-child(3) .m-r-12
  const [page3] = await Promise.all([page2.waitForEvent("popup"), page2.click("a:nth-child(3) .m-r-12")])
})
