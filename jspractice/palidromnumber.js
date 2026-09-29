let num=121;
let temp=num;
let rev=0;
while(num!=0){
    let rem=num%10;
    rev=rev*10+rem;
    num=Math.floor(num/10);
}
if(rev==temp){
    console.log("it is palidrom");
}
else{
console.log("it is not palidrom");
}