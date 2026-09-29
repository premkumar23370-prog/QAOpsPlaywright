let str='abcdefghjssa';
let longest='';
for(let i=0;i<str.length;i++){
    let cont='';
    for(let j=i;j<str.length;j++){
        if(cont.includes(str[j]))
            break;
        cont+=str[j]
    }
    if(cont.length>longest.length){
        longest=cont;   
    }
}
console.log(longest);
