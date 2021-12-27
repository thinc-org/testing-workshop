# E2E Test

## Getting Start

สามารถอ่ายรายละเอียดเพิ่มเติมได้ที่ [Playwright Official](https://playwright.dev/docs/intro)

โดยสรุป สิ่งที่ต้องทำก่อนเริ่ม workshop นี้คือใช้คำสั่งสองคำสั่งนี้

```bash
yarn
# install supported browsers
npx playwright install
```

## Scripts

คำสั่งที่ใช้ test โดยจะเป็นการ test แบบ headless (ไม่มีการเปิด browser ขึ้นมา)

```bash
yarn test
```

หากต้องการให้เปิด browser ให้ใช้คำสั่ง

```bash
yarn test --headed
```

สำหรับคำสั่งที่ใช้สำหรับการ debug คือ

```bash
yarn test:debug --headed
```

นอกจากนี้เรายังสามารถ generate e2e test ได้โดยการใช้คำสั่ง

```bash
yarn test:codegen <url>
```
