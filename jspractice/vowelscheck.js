let str="Automation".toLowerCase();
let vowels=0;
let consonant=0;
for(let ch of str){
    if(/[a-z]/.test(ch)){
        if("aeiou".includes(ch)){
            vowels++;
        }
        else{
            consonant++;
        }
    }
}
console.log("Vowels "+vowels);
console.log("consonant "+consonant);
