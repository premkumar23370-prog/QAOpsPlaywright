//const { array } = require("node:stream/iter");

let str="ab c de";
let result=new Array(str.length);
 for(let i=0;i<str.length;i++){
    if(str.charAt(i)==" "){
    result[i]=" ";
    }
 }
 console.log("result "+result);
 let j=str.length-1;
 for(let k=0;k<str.length;k++){
    if(str[k]!==" "){
        while(result[j]===" "){
            j--;
        }
        result[j]=str[k];
        j--;
    }
 }
 console.log(result.join(""));