# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ApiLoginAssignment.spec.js >> Apimock3
- Location: tests\ApiLoginAssignment.spec.js:13:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - generic [ref=e6]: RSA
          - generic [ref=e7]: Rahul Shetty Academy
        - generic [ref=e8]:
          - generic [ref=e13]: eventhub.app
          - img "EventHub app preview" [ref=e14]
        - list [ref=e16]:
          - listitem [ref=e17]:
            - generic [ref=e18]: ⚡
            - generic [ref=e19]: Live REST APIs — test real endpoints, not mocks
          - listitem [ref=e20]:
            - generic [ref=e21]: 🔒
            - generic [ref=e22]: Isolated sandbox — your data, your tests, no conflicts
          - listitem [ref=e23]:
            - generic [ref=e24]: 🎫
            - generic [ref=e25]: Auth, CRUD, bookings — flows you'll face on the job
          - listitem [ref=e26]:
            - generic [ref=e27]: 🤖
            - generic [ref=e28]: Built for Selenium, Playwright, RestAssured & more
      - generic [ref=e30]:
        - paragraph [ref=e31]: 50,000+
        - paragraph [ref=e32]: QA engineers trained worldwide
    - generic [ref=e34]:
      - generic [ref=e35]:
        - 'heading "The #1 QA Practice Hub for Automation Engineers" [level=2] [ref=e36]':
          - text: "The #1 QA Practice Hub"
          - text: for Automation Engineers
        - paragraph [ref=e37]: EventHub is a production-grade practice app designed so you can sharpen your testing skills on real-world scenarios — before your next interview or project.
      - link "API Documentation (Swagger)" [ref=e38] [cursor=pointer]:
        - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - img [ref=e39]
        - text: API Documentation (Swagger)
      - generic [ref=e41]:
        - generic [ref=e42]:
          - img [ref=e44]
          - heading "Sign in to EventHub" [level=1] [ref=e46]
          - paragraph [ref=e47]: Enter your credentials to continue
        - generic [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]: Email
            - textbox "Email" [ref=e51]:
              - /placeholder: you@email.com
          - generic [ref=e52]:
            - generic [ref=e53]: Password
            - textbox "Password" [ref=e54]:
              - /placeholder: ••••••
          - button "Sign In" [ref=e55] [cursor=pointer]
        - paragraph [ref=e56]:
          - text: Don't have an account?
          - link "Register" [ref=e57] [cursor=pointer]:
            - /url: /register
      - paragraph [ref=e58]:
        - text: A practice environment by
        - link "RahulShettyAcademy.com" [ref=e59] [cursor=pointer]:
          - /url: https://rahulshettyacademy.com
        - text: — used by QA engineers worldwide to master automation testing.
  - alert [ref=e60]
```

# Test source

```ts
  1  | const {test,request,expect}=require('@playwright/test');
  2  | const yahoo={email: "prem@yahoo.com", password: "Welcome#1"};
  3  | const gmail={email: "premkumar23370@gmail.com", password: "PRemkumar@33"};
  4  | const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
  5  | const API_URL  = 'https://api.eventhub.rahulshettyacademy.com/api';
  6  | async function loginAs(page, user) {
  7  |   await page.goto(`${BASE_URL}/login`);
  8  |   await page.getByPlaceholder('you@email.com').fill(gmail.email);
  9  |   await page.getByLabel('Password').fill(gmail.password);
  10 |   await page.locator('#login-btn').click();
  11 |   await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
  12 | }
  13 | test('Apimock3',async({page})=>{
  14 |     await page.goto('https://eventhub.rahulshettyacademy.com');
  15 |     const ApiContext= await request.newContext();
  16 |     const loginRes=await ApiContext.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login',
  17 |         {
  18 |         data: {email: yahoo.email, password: yahoo.password},
  19 |     });
  20 |     await expect(loginRes.ok()).toBeTruthy();
  21 |     const loginjson=await loginRes.json();
  22 |     const token= loginjson.token;
  23 |     console.log(token);
  24 | 
  25 |     //---------------------event
  26 |     const eventRes=await ApiContext.get('https://api.eventhub.rahulshettyacademy.com/api/events?page=1&limit=12',
  27 |         {
  28 |             headers:{
  29 |                 Authorization: `Bearer ${token}`
  30 |             },
  31 |         });
  32 |         
  33 |         await expect(eventRes.ok()).toBeTruthy();
  34 |         const eventData=await eventRes.json();
  35 |         //console.log(eventData);
  36 |         const eventId=eventData.data[1].id;
  37 |         console.log(eventId);
  38 | 
  39 |     //---------------------booking
  40 |     const booking=await ApiContext.post('https://api.eventhub.rahulshettyacademy.com/api/bookings',
  41 |     {
  42 |         headers:{
  43 |             Authorization: `Bearer ${token}`,
  44 |         },
  45 |         data:{
  46 |             eventId,
  47 |            customerName: 'Yahoo prem',
  48 |             customerEmail: yahoo.email,
  49 |             customerPhone:'7010041536',
  50 |             quantity: 1,
  51 | 
  52 |         },
  53 | 
  54 |     });
  55 |    console.log(booking);
> 56 |    await expect(booking.ok()).toBeTruthy();
     |                               ^ Error: expect(received).toBeTruthy()
  57 |     const bookingIDjson=await booking.json();
  58 |     const bookId=bookingIDjson.data.id;
  59 |     console.log("Booking id of yahoo is "+bookId);
  60 |     await loginAs(page,gmail)
  61 |     await page.goto(`${BASE_URL}/bookings/${bookId}`, { waitUntil: 'networkidle' });
  62 |     //await page.pause();
  63 |      await expect(page.getByText('Access Denied')).toBeVisible();
  64 |     await expect(page.getByText('You are not authorized to view this booking')).toBeVisible();
  65 | 
  66 | 
  67 | 
  68 | 
  69 | 
  70 | 
  71 | });
  72 | 
```