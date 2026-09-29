let str = "PremKUmar33";
let result="";

for (let ch of str) {
    if(ch>='A'&&ch<='Z'){
        result+=ch.toLowerCase();
    }
    else if(ch>='a'&&ch<='z'){
        result+=ch.toUpperCase();
    }
    else{
        result+=ch
    }

   
}
console.log(result);