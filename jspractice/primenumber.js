let n=14
let Isprime=true;
if(n<=1){
    Isprime=false;
    
}
else{
    for(let i=2;i<n;i++){
        if(n%i===0){
            Isprime=false;
            break;
        }
    }
}
if(Isprime){
    console.log("it is prime")
}
else{
    console.log("it is not prime")
}