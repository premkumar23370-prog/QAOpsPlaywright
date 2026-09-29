const {test, expect}= require('@playwright/test');
const {loginFix1}=require('../Utils/fixture');
const {RelPOManager}=require('../Object module/RelPOManager')
//const { use } = require('react');
test.describe('Login',()=>{
test('First playwright',async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://release.chainsys.com/appplatform/core/userlogin/launch");
    await page.locator('input#userName').fill('preedewmdevqa');
     await page.locator('input#password').fill('Welcomewewe#2');
     await page.locator('xpath=(//*[@title="Login"])[1]').click();
     
     console.log(await page.locator('xpath=//*[@id="invalidMsg"]').textContent());
      await expect(page.locator('xpath=//*[@id="invalidMsg"]')).toContainText('Invalid Username Or Password.');
    
});

loginFix1('Designer',async({loginRelQA,page})=>{
    let appname='Affiliate';
    
    await expect(page).toHaveTitle('Chainsys Platform');
    
    const RelPOManager2=new RelPOManager(page,appname)
    const Designer=RelPOManager2.designerFunction();
    const logout=RelPOManager2.logoutFunction();
    await page.waitForLoadState('load');
    await Designer.designerAppSearch();
    //await page.waitForTimeout(5000);
   
    
    
    
  Promise.all([
    await page.waitForTimeout(10000),
    page.waitForSelector("#app-menu"),
    page.locator("#app-menu").click(),])
    await expect(page.locator("#MG_Affiliate_side_menu")).toBeVisible();
    await page.locator('#MG_Affiliate_side_menu').getByText('Affiliate').click();
    await page.locator('#MI_Affiliate_affiliatelist').click();
    await page.waitForLoadState('load');
    await page.locator('#affiliatelist_WEB_Grid_with_List_New_1').click();
    let count=0;
    let affiliatecount=`affiliate${count}`;
    await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$name_input"]').fill(affiliatecount);
    count++;
    
    await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$registrationnumber_input"]').fill(String(count));
    await expect(page.locator('mat-card-title').filter({hasText:' affliatelist '}).nth(0)).toBeVisible();
    await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$autority_input_rto-input"]').click({timeout:5000});
     
    await expect(page.locator('span').filter({hasText:'*'}).nth(0)).toBeVisible();
    await expect(page.locator('mat-label').filter({hasText:'RTO'}).nth(0)).toBeVisible();
    await expect(page.locator('mat-card-title').filter({hasText:' affliatelist '}).nth(0)).toBeHidden();
    await page.locator('//*[@id="FLD_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$rto_input"]').dblclick();
    await page.waitForTimeout(500);
    const rtonumbers=await page.locator('[id^="r"][id*="mleaffiliatelist_WEB_Grid_with_List_weblookup_rtodetails_DUMMY$$rtonumber"]').allTextContents();
    await expect(rtonumbers.length).toBeGreaterThan(0);
    for(const rtonumber of rtonumbers){
      await expect.soft(rtonumber).toContain("100");
     }

    await page.locator('//*[@id="r0_mleaffiliatelist_WEB_Grid_with_List_weblookup_rtodetails_DUMMY$$rtoname"]').click();
    await page.locator('#mleaffiliatelist_WEB_Grid_with_List_Save_1').click();
    await page.waitForResponse(response =>
        response.url().includes('saveWithValidation') &&
        response.status() === 200);
    await page.locator("#app-menu").click();
    await page.locator('#MG_Affiliate_side_menu').getByText('Affiliate').click();
    await page.locator('#MI_Affiliate_affiliatelist').click();
    const searchFilter= page.locator('#cspfm_affiliatelist_slickgrid_searchbtn');
    await searchFilter.waitFor({state:'visible'});
    await searchFilter.click();
    await page.locator('#cspfm_slickgrid_affiliatelist_affiliatelist_WEB_Grid_with_List_filter-name-input').pressSequentially(affiliatecount);
    await page.locator('[id="r0_affiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$rto"]').click();
    await page.waitForTimeout(700);
    const listRownumbers=page.locator('[id^="r"][id*="affiliatelist_WEB_Grid_with_List_weblookup_rtodetails_DUMMY$$rtonumber"]').allTextContents();
    await expect(listRownumbers.length).toBeGreaterThan(0);
    for(const listRownumber of listRownumbers){
      await expect.soft(listRownumber).toContain("100");
    }
    await logout.logout(page);





    //for(let i=1;i<=2;i++){
   // await expect(page.locator('//button[@id="mleaffiliatelist_WEB_Grid_with_List_Add Line_1"]')).toBeVisible();
    //await page.locator('//button[@id="mleaffiliatelist_WEB_Grid_with_List_Add Line_1"]').click();
    //}
    //await page.locator('//*[@id="r0_mleaffiliatelist_WEB_Grid_with_List_affiliatelist_DUMMY$$affliatelist_par$$name"]').pressSequentially("ind");







     
    
    //await page.locator("affiliatelist_WEB_Grid_with_List_New_1").click();
    

    

   //await page.pause();

})

});


