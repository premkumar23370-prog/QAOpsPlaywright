let stri="Madam";
let str=stri.toLowerCase();
let reverse="";
console.log(str.length);
for(let i=str.length;i>=0;i--){
    reverse+=str.charAt(i);
}
if(reverse==str){
    console.log("it is palidrom");
}
else{
    console.log("it is not palidrom")
}