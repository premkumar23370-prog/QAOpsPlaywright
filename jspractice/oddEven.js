let str='123456789';
let even="";
let odd="";
for(let ch of str){
    let num=Number(ch);
    if(num%2==0){
        even+=ch;
    }
    else{
        odd+=ch;
    }
    
}
console.log(even);
console.log(odd);