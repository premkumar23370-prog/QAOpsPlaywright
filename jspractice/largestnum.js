let str="12349852";
let largest=0
for(let ch of str){
    let num=Number(ch);
    if(num>largest){
        largest=num;
    }
}
console.log(largest);