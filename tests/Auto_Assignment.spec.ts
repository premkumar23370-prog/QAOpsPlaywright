
import { test, expect, Page } from '@playwright/test';


async function login(page: Page, username: string, password: string) {

    await page.waitForTimeout(1000);
    await page.context().clearCookies();
    await page.waitForLoadState('domcontentloaded');
    await page.goto('https://release.chainsys.com/appplatform/core/userlogin/launch');
    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.accept().catch(() => { });
    });
    await page.getByText('Sign in', { exact: true }).click();
    //await default1Page.goto('https://release.chainsys.com/appplatform/core/userlogin/launch');
    await page.waitForTimeout(1000);
    await page.getByRole('img', { name: 'menu' }).click();
    await page.waitForLoadState('domcontentloaded');
    await page.locator('#cs_application').getByText('Application').click();
    await page.getByRole('textbox', { name: 'Search here' }).click();
    await page.getByRole('textbox', { name: 'Search here' }).fill('PW Assigned Products');
    await page.getByRole('textbox', { name: 'Search here' }).press('Enter');
    await page.getByText('PW Assigned Products').click();
    await Promise.all([
        page.waitForResponse(res => res.url().includes('commonFetch')),
        page.waitForResponse(res => res.url().includes('commonFetch'))
    ]);
    const appicon = page.locator('img.homepage-applogo.ng-star-inserted')
    await appicon.waitFor({ 'state': 'visible' });
    //await page.waitForTimeout(500);
}
async function logout(page: Page) {
    const profileMenu = page.locator('#appuserinfo')
    const logoutButton = page.locator('#applogout')
    await profileMenu.click();
    await logoutButton.click();
    await page.getByRole('button', { name: 'Ok' }).click();
}

const default_user = 'nagaraj_playwright@releaseqa.com';
const criteria1_user = 'naga_playwright1@releaseqa.com';
const criteria2_user = 'test_02';
const criteria3_user = 'jhonwick';
const password1 = 'Welcome#1'
const password2 = 'Welcome#5'


test.fixme('Issue BUG_10439_2026 SAB_AA_TS001 Verify that the entered records are assigned to the respective user when Criteria was met while using the Dropdown field in Criteria @Nagaraj.C @Regression @Auto Assignment', async ({ page }) => {

    const defaultvalue = 'Default_' + Date.now().toString().slice(-4);
    const appmvalue = 'APPM_' + Date.now().toString().slice(-4);
    const designervalue = 'Designer_' + Date.now().toString().slice(-4);
    const buildervalue = 'builder_' + Date.now().toString().slice(-4);

    async function verifydata(product: string) {
        const product_locators = page.locator('[id^="r"][id*="PW_Product_Assign_List_WEB_List_pwproductassign_DUMMY$$product"]');
        const product_Values = await product_locators.allTextContents();
        expect(product_Values.length).toBeGreaterThan(0);
        for (const product_column of product_Values) {
            expect.soft(product_column.trim()).toContain(product);
            console.log('product type:', product_column);
        }
    }

    //*********Value enter from default user*************************//

    await login(page, default_user, password1);
    await page.locator('#app-menu').click();
    await page.locator('span').filter({ hasText: 'Menu' }).nth(1).click();
    await page.locator('span').filter({ hasText: 'Default' }).nth(2).click();
    await page.locator('#pwproductassign_d_w_list_New_1').click();
    await page.locator('[id="FLD_pwproductassign_Entry_Web_pwproductassign_DUMMY$$name_input"]').click();
    await page.locator('[id="FLD_pwproductassign_Entry_Web_pwproductassign_DUMMY$$name_input"]').fill(defaultvalue);
    await page.locator('#pwproductassign_Entry_Web_Save_1').click();
    await page.waitForResponse(response =>
        response.url().includes('saveWithValidation') &&
        response.status() === 200);
    await page.locator('#pwproductassign_d_w_view_New_1').click();
    await page.locator('[id="FLD_pwproductassign_Entry_Web_pwproductassign_DUMMY$$name_input"]').click();
    await page.locator('[id="FLD_pwproductassign_Entry_Web_pwproductassign_DUMMY$$name_input"]').fill(appmvalue);
    await page.locator('[id="FLD_pwproductassign_Entry_Web_pwproductassign_DUMMY$$product_input"]').click();
    await page.getByRole('option', { name: 'APPM' }).click();
    await page.locator('#pwproductassign_Entry_Web_Save_1').click();
    await page.waitForResponse(response =>
        response.url().includes('saveWithValidation') &&
        response.status() === 200);
    await page.locator('#pwproductassign_d_w_view_New_1').click();
    await page.locator('[id="FLD_pwproductassign_Entry_Web_pwproductassign_DUMMY$$name_input"]').click();
    await page.locator('[id="FLD_pwproductassign_Entry_Web_pwproductassign_DUMMY$$name_input"]').fill(designervalue);
    await page.locator('[id="FLD_pwproductassign_Entry_Web_pwproductassign_DUMMY$$product_input"]').click();
    await page.getByRole('option', { name: 'DESIGNER' }).click();
    await page.locator('#pwproductassign_Entry_Web_Save_1').click();
    await page.waitForResponse(response =>
        response.url().includes('saveWithValidation') &&
        response.status() === 200);
    await page.locator('#pwproductassign_d_w_view_New_1').click();
    await page.locator('[id="FLD_pwproductassign_Entry_Web_pwproductassign_DUMMY$$name_input"]').click();
    await page.locator('[id="FLD_pwproductassign_Entry_Web_pwproductassign_DUMMY$$name_input"]').fill(buildervalue);
    await page.locator('[id="FLD_pwproductassign_Entry_Web_pwproductassign_DUMMY$$product_input"]').click();
    await page.getByRole('option', { name: 'BUILDER' }).click();
    await page.locator('#pwproductassign_Entry_Web_Save_1').click();
    await page.waitForResponse(response =>
        response.url().includes('saveWithValidation') &&
        response.status() === 200);
    await page.locator('#app-menu').click();
    await page.locator('#WEB_HOME_side_menu').getByRole('button').click();
    await logout(page);
    console.log('Records added successfully');


    //*****************************criteria1********************************************************** */
    console.log('Verify the criteria1 autoassign using dropdown button');
    await login(page, criteria1_user, password1);
    await page.locator('#app-menu').click();
    await page.locator('span').filter({ hasText: 'Menu' }).nth(1).click();
    await page.locator('span').filter({ hasText: 'Assigned List' }).nth(2).click();
    const filterwait = page.locator('[id="cspfm_pwproductassign_slickgrid_searchbtn"]');
    await filterwait.waitFor({ state: 'visible' });
    const wait = page.locator('mat-label').filter({ hasText: 'Items per page :' });
    await wait.waitFor({ state: 'visible' });
    await page.waitForTimeout(500);
    await verifydata('APPM');
    await page.locator('#cspfm_pwproductassign_slickgrid_searchbtn').click();
    await page.getByRole('textbox', { name: 'Name Search Filter', exact: true }).click();
    await page.getByRole('textbox', { name: 'Name Search Filter', exact: true }).fill(appmvalue);
    await page.getByRole('textbox', { name: 'Name Search Filter', exact: true }).press('Enter');
    await expect.soft(page.locator('[id="r0_PW_Product_Assign_List_WEB_List_pwproductassign_DUMMY$$name"]')).toContainText(appmvalue);
    const userAssignIcon = page.locator('[id="r0_PW_Product_Assign_List_WEB_List_pwproductassign_DUMMY_Userassignment"]');
    await userAssignIcon.hover();
    await expect(page.locator('.cs-assignedcount').first()).toHaveText('1');
    await userAssignIcon.click();
    await page.getByRole('list').getByText('User').click();
    await page.locator('[id="userAvatarInitial"]').nth(1).hover();
    await expect(page.locator('mat-card-subtitle.cs-username-info-blue')).toContainText(criteria1_user);
    await page.locator('.mat-mdc-tooltip-trigger.cs-popover-close-button').click();
    await page.waitForTimeout(500);
    await page.locator('#app-menu').click();
    await page.locator('#WEB_HOME_side_menu').getByRole('button').click();
    await logout(page);
    console.log('Criteria1 verification completed');

 //*****************************criteria2********************************************************** */
   console.log('Verify the criteria2 autoassign using dropdown button');
    await login(page, criteria2_user, password2);
    await page.locator('#app-menu').click();
    await page.locator('span').filter({ hasText: 'Menu' }).nth(1).click();
    await page.locator('span').filter({ hasText: 'Assigned List' }).nth(2).click();
    const filterwait2 = page.locator('[id="cspfm_pwproductassign_slickgrid_searchbtn"]');
    await filterwait2.waitFor({ state: 'visible' });
    const wait2 = page.locator('mat-label').filter({ hasText: 'Items per page :' });
    await wait2.waitFor({ state: 'visible' });
    await page.waitForTimeout(500);
    await verifydata('BUILDER');
    await page.locator('#cspfm_pwproductassign_slickgrid_searchbtn').click();
    await page.getByRole('textbox', { name: 'Name Search Filter', exact: true }).click();
    await page.getByRole('textbox', { name: 'Name Search Filter', exact: true }).fill(buildervalue);
    await page.getByRole('textbox', { name: 'Name Search Filter', exact: true }).press('Enter');
    await expect.soft(page.locator('[id="r0_PW_Product_Assign_List_WEB_List_pwproductassign_DUMMY$$name"]')).toContainText(buildervalue);
    const userAssignIcon2 = page.locator('[id="r0_PW_Product_Assign_List_WEB_List_pwproductassign_DUMMY_Userassignment"]');
    await userAssignIcon2.hover();
    await expect(page.locator('.cs-assignedcount').first()).toHaveText('1');
    await userAssignIcon2.click();
    await page.getByRole('list').getByText('User').click();
    await page.locator('[id="userAvatarInitial"]').nth(1).hover();
    await expect(page.locator('mat-card-subtitle.cs-username-info-blue')).toContainText(criteria2_user);
    await page.locator('.mat-mdc-tooltip-trigger.cs-popover-close-button').click();
    await page.waitForTimeout(500);
    await page.locator('#app-menu').click();
    await page.locator('#WEB_HOME_side_menu').getByRole('button').click();
    await logout(page);
    console.log('Criteria2 verification completed');

    //*****************************criteria3********************************************************** 
    console.log('Verify the criteria3 autoassign using dropdown button');
    await login(page, criteria3_user, password1);
    await page.locator('#app-menu').click();
    await page.locator('span').filter({ hasText: 'Menu' }).nth(1).click();
    await page.locator('span').filter({ hasText: 'Assigned List' }).nth(2).click();
    const filterwait3 = page.locator('[id="cspfm_pwproductassign_slickgrid_searchbtn"]');
    await filterwait3.waitFor({ state: 'visible' });
    const wait3 = page.locator('mat-label').filter({ hasText: 'Items per page :' });
    await wait3.waitFor({ state: 'visible' });
    await page.waitForTimeout(500);
    await verifydata('DESIGNER');
    await page.locator('#cspfm_pwproductassign_slickgrid_searchbtn').click();
    await page.getByRole('textbox', { name: 'Name Search Filter', exact: true }).click();
    await page.getByRole('textbox', { name: 'Name Search Filter', exact: true }).fill(designervalue);
    await page.getByRole('textbox', { name: 'Name Search Filter', exact: true }).press('Enter');
    await expect.soft(page.locator('[id="r0_PW_Product_Assign_List_WEB_List_pwproductassign_DUMMY$$name"]')).toContainText(designervalue);
    const userAssignIcon3 = page.locator('[id="r0_PW_Product_Assign_List_WEB_List_pwproductassign_DUMMY_Userassignment"]');
    await userAssignIcon3.hover();
    await expect(page.locator('.cs-assignedcount').first()).toHaveText('1');
    await userAssignIcon3.click();
    await page.getByRole('list').getByText('User').click();
    await page.locator('[id="userAvatarInitial"]').nth(1).hover();
    await expect(page.locator('mat-card-subtitle.cs-username-info-blue')).toContainText(criteria3_user);
    await page.locator('.mat-mdc-tooltip-trigger.cs-popover-close-button').click();
    await page.waitForTimeout(500);
    await page.locator('#app-menu').click();
    await page.locator('#WEB_HOME_side_menu').getByRole('button').click();
    await logout(page);
    await page.close();
    console.log('Criteria3 verification completed');
});


test('SAB_AA_TS002 Verify that the entered records are assigned to the respective user when Criteria was met while using the Radio field in Criteria @Nagaraj.C @Regression @Auto Assignment', async ({ page }) => {

    const Default2 = 'Default_2_' + Date.now().toString().slice(-4);
    const SystemAnalyst = 'SystemAnalyst_' + Date.now().toString().slice(-4);
    const TestEngineer = 'TestEnginner_' + Date.now().toString().slice(-4);
    const DevopsEnginer = 'Devopes_' + Date.now().toString().slice(-4);
    //*********Value enter from default user*************************//
    await login(page, default_user, password1);
    await page.locator('#app-menu').click();
    await page.locator('span').filter({ hasText: 'RadioMenu' }).nth(1).click();
    await page.locator('span').filter({ hasText: 'default' }).nth(2).click();
    await page.locator('#pwassignedroles_d_w_list_New_1').click();
    await page.locator('[id="FLD_pwassignedroles_Entry_Web_pwassignedroles_DUMMY$$name_input"]').click();
    await page.locator('[id="FLD_pwassignedroles_Entry_Web_pwassignedroles_DUMMY$$name_input"]').fill(Default2);
    await page.locator('[id="FLD_pwassignedroles_Entry_Web_pwassignedroles_DUMMY$$branch_input"]').click();
    await page.locator('[id="FLD_pwassignedroles_Entry_Web_pwassignedroles_DUMMY$$branch_input"]').fill('default');
    await page.locator('#pwassignedroles_Entry_Web_Save_1').click();
    await page.waitForResponse(response =>
        response.url().includes('saveWithValidation') &&
        response.status() === 200);
    await page.locator('#pwassignedroles_d_w_view_New_1').click();
    await page.locator('[id="FLD_pwassignedroles_Entry_Web_pwassignedroles_DUMMY$$name_input"]').click();
    await page.locator('[id="FLD_pwassignedroles_Entry_Web_pwassignedroles_DUMMY$$name_input"]').fill(SystemAnalyst);
    await page.getByText('System Analyst').click();
    await page.locator('#pwassignedroles_Entry_Web_Save_1').click();
    await page.waitForResponse(response =>
        response.url().includes('saveWithValidation') &&
        response.status() === 200);
    await page.locator('#pwassignedroles_d_w_view_New_1').click();
    await page.locator('[id="FLD_pwassignedroles_Entry_Web_pwassignedroles_DUMMY$$name_input"]').click();
    await page.locator('[id="FLD_pwassignedroles_Entry_Web_pwassignedroles_DUMMY$$name_input"]').fill(TestEngineer);
    await page.locator('div').filter({ hasText: /^Test Engineer$/ }).click();
    await page.locator('#pwassignedroles_Entry_Web_Save_1').click();
    await page.waitForResponse(response =>
        response.url().includes('saveWithValidation') &&
        response.status() === 200);
    await page.locator('#pwassignedroles_d_w_view_New_1').click();
    await page.locator('[id="FLD_pwassignedroles_Entry_Web_pwassignedroles_DUMMY$$name_input"]').click();
    await page.locator('[id="FLD_pwassignedroles_Entry_Web_pwassignedroles_DUMMY$$name_input"]').fill(DevopsEnginer);
    await page.locator('div').filter({ hasText: /^Dev Ops Engineer$/ }).click();
    await page.locator('#pwassignedroles_Entry_Web_Save_1').click();
    await page.waitForResponse(response =>
        response.url().includes('saveWithValidation') &&
        response.status() === 200);
    await page.locator('#app-menu').click();
    await page.locator('#WEB_HOME_side_menu').getByRole('button').click();
    await logout(page);
    console.log('Records added Successfully')
    
//*********************************function for verification******************************
async function verify_autoassign(product:string,primary:string,user:string){
    await page.locator('#app-menu').click();
    await page.locator('span').filter({ hasText: 'RadioMenu' }).nth(1).click();
    await page.locator('span').filter({ hasText: 'Assigned SL' }).nth(2).click();
    const filterwait = page.locator('[id="r0_PW_Assigned_Roles_SL_WEB_Grid_with_List_pwassignedroles_DUMMY$$name"]');
    await filterwait.waitFor({ state: 'visible' });
    const wait = page.locator('mat-label').filter({ hasText: 'Items per page :' });
    await wait.waitFor({ state: 'visible' });
    await page.waitForTimeout(500);
    const role_locators = page.locator('[id^="r"][id*="PW_Assigned_Roles_SL_WEB_Grid_with_List_pwassignedroles_DUMMY$$role"]');
    const role_Values = await role_locators.allTextContents();
    expect(role_Values.length).toBeGreaterThan(0);
    for (const role_column of role_Values) {
        expect.soft(role_column.trim()).toContain(product);
        console.log('role type:', role_column ,'user: ' +criteria1_user);
    }
    await page.locator('#cspfm_pwassignedroles_slickgrid_searchbtn').click();
    await page.getByRole('textbox', { name: 'Name Search Filter' }).click();
    await page.getByRole('textbox', { name: 'Name Search Filter' }).fill(primary);
    await page.getByRole('textbox', { name: 'Name Search Filter' }).press('Enter');
    await expect(page.locator('[id="r0_PW_Assigned_Roles_SL_WEB_Grid_with_List_pwassignedroles_DUMMY$$name"]')).toContainText(primary);
    const userAssignIcon = page.locator('[id="r0_PW_Assigned_Roles_SL_WEB_Grid_with_List_pwassignedroles_DUMMY_Userassignment"]');
    await userAssignIcon.hover();
    await expect(page.locator('.cs-assignedcount').first()).toHaveText('1');
    await userAssignIcon.click();
    await page.getByRole('list').getByText('User').click();
    await page.locator('[id="userAvatarInitial"]').nth(1).hover();
    await expect(page.locator('mat-card-subtitle.cs-username-info-blue')).toContainText(user);
    await page.locator('.mat-mdc-tooltip-trigger.cs-popover-close-button').click();
    await page.waitForTimeout(500);
    await page.locator('#app-menu').click();
    await page.locator('#WEB_HOME_side_menu').getByRole('button').click();
}
    //*****************************criteria1********************************************************** */
    console.log('Verify the criteria1 autoassign using radio button');
    await login(page, criteria1_user, password1);
    await verify_autoassign('Test Engineer',TestEngineer,criteria1_user);
    await logout(page);
    console.log('Criteria1 verification completed');
//*****************************criteria2********************************************************** */
    console.log('Verify the criteria2 autoassign using radio button');
    await login(page,criteria2_user,password2);
    await verify_autoassign('System Analyst',SystemAnalyst,criteria2_user);
    await logout(page);
    console.log('Criteria2 verification completed');
//*****************************criteria3********************************************************** */
    console.log('Verify the criteria3 autoassign using radio button');
    await login(page,criteria3_user,password1);
    await verify_autoassign('Dev Ops Engineer',DevopsEnginer,criteria3_user);
    await logout(page);
    console.log('Criteria3 verification completed');
    await page.close();
});