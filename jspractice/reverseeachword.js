let str="ab c de"
let words=str.split(" ");
let result="";
for(let word of words){
    let rev="";
    for(let i=word.length-1;i>=0;i--){
        rev+=word.charAt(i);
    }
    result =result+rev+" ";

}
console.log(result);