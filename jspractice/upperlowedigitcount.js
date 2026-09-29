let str="fewhFDFWQQSiuhfew9032FDS32f"
let upper=0;
let lower=0;
let digit=0;

for(let ch of str){
    if(ch>='A' && ch<='Z')
    {
        upper++;
    }
    else if(ch>='a' && ch<='z')
    {
        lower++;
    }
    else if(ch>=0 && ch<=9){
        digit++;
    }

}
    console.log("upper count "+upper);
    console.log("lower count "+lower);
    console.log("digit count "+digit);