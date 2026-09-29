const base= require('@playwright/test');

exports.customtest=base.test.extend(
    {
        testDataOrder:{
    username :"ravimohan@k.com",
    password :"Premkumar@33",
    product :"ADIDAS ORIGINAL"
        }
    }
)