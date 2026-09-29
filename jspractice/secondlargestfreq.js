let str="aabbcccdd";
let freq={};
for(let ch of str){
    if(freq[ch]){
        freq[ch]++;
       // console.log(freq[ch])
    }
    else{
        freq[ch]=1;
    }
}
let large=0;
let secondLarge=0;
for(let ch in freq){
    if(freq[ch]>large){
        second=large;
        large=freq[ch];
    }
    else if(freq[ch]>secondLarge&&freq[ch]<large){
        secondLarge=freq[ch];

    }
}
for(let ch in freq){
    if(freq[ch]===large){
        console.log("second largest ",ch);
    }
}