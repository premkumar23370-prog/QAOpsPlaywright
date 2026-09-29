const { Designer } = require('./Designer');
const {logout}=require('./logout');
class RelPOManager{
    constructor(page,Appname){
        this.Appname=Appname;
        this.page=page;
        this.designerOBJ=new Designer(this.page,this.Appname);
        this.logoutOBJ=new logout(this.page);


    }
    designerFunction(){
        return this.designerOBJ;
    }
    logoutFunction(){
        return this.logoutOBJ;

    }

}
module.exports={RelPOManager};