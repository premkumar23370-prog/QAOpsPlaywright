import{test, expect} from '@playwright/test';
import { POmanagets } from '../Object module_ts/POmanagerts';

test('LoginPO',async({page})=>{
    const POmanager=new POmanagets(page);
    const loginPage=POmanager.Getloginpage();
    await loginPage.goTo();
    const email=await loginPage.Login();
    const DashBoard=POmanager.DashBoardManage();
    await DashBoard.addCart();
    await DashBoard.NaviCart();
    const Order=POmanager.OrderM();
    const OrderIDMain=await Order.PlaceOrder(email);
    await Order.OrderHistory(OrderIDMain);
    await page.pause();
    

    


});