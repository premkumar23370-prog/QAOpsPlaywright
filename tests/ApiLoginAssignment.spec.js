const {test,request,expect}=require('@playwright/test');
const yahoo={email: "prem@yahoo.com", password: "Welcome#1"};
const gmail={email: "premkumar23370@gmail.com", password: "PRemkumar@33"};
const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const API_URL  = 'https://api.eventhub.rahulshettyacademy.com/api';
async function loginAs(page, user) {
  await page.goto(`${BASE_URL}/login`);
  await page.getByPlaceholder('you@email.com').fill(gmail.email);
  await page.getByLabel('Password').fill(gmail.password);
  await page.locator('#login-btn').click();
  await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
}
test('Apimock3',async({page})=>{
    await page.goto('https://eventhub.rahulshettyacademy.com');
    const ApiContext= await request.newContext();
    const loginRes=await ApiContext.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login',
        {
        data: {email: yahoo.email, password: yahoo.password},
    });
    await expect(loginRes.ok()).toBeTruthy();
    await expect(loginRes.status()).toBe(200);
    const loginjson=await loginRes.json();
    const token= loginjson.token;
    console.log(token);

    //---------------------event
    const eventRes=await ApiContext.get('https://api.eventhub.rahulshettyacademy.com/api/events?page=1&limit=12',
        {
            headers:{
                Authorization: `Bearer ${token}`
            },
        });
        
        await expect(eventRes.ok()).toBeTruthy();
        const eventData=await eventRes.json();
        console.log(eventData);
        const eventId=eventData.data[1].id;
        console.log(eventId);

    //---------------------booking
    const booking=await ApiContext.post('https://api.eventhub.rahulshettyacademy.com/api/bookings',
    {
        headers:{
            Authorization: `Bearer ${token}`,
        },
        data:{
            eventId,
           customerName: 'Yahoo prem',
            customerEmail: yahoo.email,
            customerPhone:'7010041536',
            quantity: 1,

        },

    });
   console.log(booking);
   await expect(booking.ok()).toBeTruthy();
    const bookingIDjson=await booking.json();
    const bookId=bookingIDjson.data.id;
    console.log("Booking id of yahoo is "+bookId);
    await loginAs(page,gmail)
    await page.goto(`${BASE_URL}/bookings/${bookId}`, { waitUntil: 'networkidle' });
    //await page.pause();
     await expect(page.getByText('Access Denied')).toBeVisible();
    await expect(page.getByText('You are not authorized to view this booking')).toBeVisible();






});
