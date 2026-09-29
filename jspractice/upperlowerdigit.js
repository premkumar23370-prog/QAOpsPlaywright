let str="fewhFDFWQQSiuhfew9032FDS32f"
let upper="";
let lower="";
let digit="";

for(let ch of str){
    if(ch>='A' && ch<='Z')
    {
        upper+=ch;
    }
    else if(ch>='a' && ch<='z')
    {
        lower+=ch;
    }
    else if(ch>=0 && ch<=9){
        digit+=ch;
    }

}
    console.log("upper  "+upper);
    console.log("lower  "+lower);
    console.log("digit  "+digit);