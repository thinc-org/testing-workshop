# Backend Testing Workshop

สำหรับ Workshop นี้จะต้องเตรียมตัวดังนี้

1. ใช้คำสั่ง `yarn` เพื่อ install dependencies
2. รันคำสั่ง `docker-compose up -d` หรือ `docker compose up -d` เพื่อสร้าง MongoDB บนเครื่องของคุณ (สำคัญ!)
3. หากต้องการจะ run dev server ให้ใช้คำสั่ง
   ```
   yarn start:dev
   ```
4. อ่านตัวอย่างได้ที่ backend test ได้ที่ [src/cat](https://github.com/thinc-org/testing-workshop/tree/master/workshop/backend/src/cat)
5. ลองเริ่มทำ workshop ด้วยตัวเองได้ที่ [src/cash](https://github.com/thinc-org/testing-workshop/tree/master/workshop/backend/src/cash)

เมื่อต้องการจะเทสให้ใช้คำสั่ง

```
yarn test
```

หากต้องการให้มันรันเทสใหม่ทุกครั้งที่มีการ save ให้ใช้คำสั่ง

```
yarn test:watch
```
