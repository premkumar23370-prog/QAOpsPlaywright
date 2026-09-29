let str='fsd@33#43@#@';
let count=0;
for(let ch of str){
    if(!(/[a-zA-Z0-9]/).test(ch))
    {
        count++;
    }
}
console.log(count);