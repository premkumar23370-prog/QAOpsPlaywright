

export class LoginPage {
    constructor(page){
        this.page=page;

    }

    async Pagegoto(){
        await this.page.goto('https://rahulshettyacademy.com/client/');


    }
    async login(request,username,password){
       const loginAPI= await this.page.request.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
            data:{
                userEmail:username,
                userPassword:password
            }
        })
        const loginjson=await loginAPI.json();
        const token=loginjson.token;
        return token;

    }
    async setToken(token){
          await this.page.addInitScript(value=>{
        window.localStorage.setItem('token',value)
    },token);
    }

    
}
module.exports={LoginPage};