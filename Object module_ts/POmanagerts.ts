

import{test, expect,Page} from '@playwright/test';
import{LoginPage1} from './Loginpage1';
import{dashboardts} from './dashboradts';
import { orderManagmentts } from './OrderManagemnetts';
 
export class POmanagets{
 page:Page;
    loginPage:LoginPage1;
    dashBoard:dashboardts;
    OrderManage:orderManagmentts;

constructor(page:Page){
    this.page=page;
    this.loginPage=new LoginPage1(this.page);
    this.dashBoard=new dashboardts(this.page);
    this.OrderManage=new orderManagmentts(this.page);

}
Getloginpage() {
    return this.loginPage;
}
DashBoardManage(){
    return this.dashBoard;
}
OrderM(){
    return this.OrderManage;
}

}