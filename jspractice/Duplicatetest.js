let str="Programming";
let result="";


for(let i=0 ;i<str.length;i++){
    let count=0;
    for(let j=i+1 ;j<str.length;j++){
        
    if(str.charAt(i)===str.charAt(j))
    
        count++;
    
  

    }
   

     if(count > 0)
        console.log(str.charAt(i));

    

}
    
   