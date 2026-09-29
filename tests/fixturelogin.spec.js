

const {fixlogin}=require('../Utils/fixture');
const {apilogin}=require('../Utils/fixture');

fixlogin('fix login',async({login})=>{
      await login.locator(".card-body")
        .filter({ hasText: "ZARA COAT 3" })
        .getByRole("button", { name: "Add To Cart" })
        .click();
        

});
apilogin('Api fix login',async({api})=>{

    await api.locator(".card-body")
        .filter({ hasText: "ZARA COAT 3" })
        .getByRole("button", { name: "Add To Cart" })
        .click();
        await api.pause();
});
