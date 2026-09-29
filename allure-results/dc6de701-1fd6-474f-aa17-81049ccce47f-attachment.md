# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ApiLoginAssignment.spec.js >> Apimock3
- Location: tests\ApiLoginAssignment.spec.js:13:1

# Error details

```
Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://eventhub.rahulshettyacademy.com/
Call log:
  - navigating to "https://eventhub.rahulshettyacademy.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: eventhub.rahulshettyacademy.com
      - text: took too long to respond.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
        - listitem [ref=e16]:
          - link "Running Windows Network Diagnostics" [ref=e17] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e18]: ERR_CONNECTION_TIMED_OUT
  - generic [ref=e19]:
    - button "Reload" [ref=e21] [cursor=pointer]
    - button "Details" [ref=e22] [cursor=pointer]
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
> 14 |     await page.goto('https://eventhub.rahulshettyacademy.com');
     |                ^ Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://eventhub.rahulshettyacademy.com/
  15 |     const ApiContext= await request.newContext();
  16 |     const loginRes=await ApiContext.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login',
  17 |         {
  18 |         data: {email: yahoo.email, password: yahoo.password},
  19 |     });
  20 |     await expect(loginRes.ok()).toBeTruthy();
  21 |     await expect(loginRes.status()).toBe(200);
  22 |     const loginjson=await loginRes.json();
  23 |     const token= loginjson.token;
  24 |     console.log(token);
  25 | 
  26 |     //---------------------event
  27 |     const eventRes=await ApiContext.get('https://api.eventhub.rahulshettyacademy.com/api/events?page=1&limit=12',
  28 |         {
  29 |             headers:{
  30 |                 Authorization: `Bearer ${token}`
  31 |             },
  32 |         });
  33 |         
  34 |         await expect(eventRes.ok()).toBeTruthy();
  35 |         const eventData=await eventRes.json();
  36 |         console.log(eventData);
  37 |         const eventId=eventData.data[1].id;
  38 |         console.log(eventId);
  39 | 
  40 |     //---------------------booking
  41 |     const booking=await ApiContext.post('https://api.eventhub.rahulshettyacademy.com/api/bookings',
  42 |     {
  43 |         headers:{
  44 |             Authorization: `Bearer ${token}`,
  45 |         },
  46 |         data:{
  47 |             eventId,
  48 |            customerName: 'Yahoo prem',
  49 |             customerEmail: yahoo.email,
  50 |             customerPhone:'7010041536',
  51 |             quantity: 1,
  52 | 
  53 |         },
  54 | 
  55 |     });
  56 |    console.log(booking);
  57 |    await expect(booking.ok()).toBeTruthy();
  58 |     const bookingIDjson=await booking.json();
  59 |     const bookId=bookingIDjson.data.id;
  60 |     console.log("Booking id of yahoo is "+bookId);
  61 |     await loginAs(page,gmail)
  62 |     await page.goto(`${BASE_URL}/bookings/${bookId}`, { waitUntil: 'networkidle' });
  63 |     //await page.pause();
  64 |      await expect(page.getByText('Access Denied')).toBeVisible();
  65 |     await expect(page.getByText('You are not authorized to view this booking')).toBeVisible();
  66 | 
  67 | 
  68 | 
  69 | 
  70 | 
  71 | 
  72 | });
  73 | 
```