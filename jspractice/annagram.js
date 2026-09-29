let str1='listen';
let str2='silent';

if(
    str1.split("").sort().join("")==
    str2.split("").sort().join("")
){
    console.log("it is annagram")
}
else{
    console.log("it not")
}