let fruits =["banana","mango","pomegrante","banana","mango"];
let unique=[];

for(let i=0;i<fruits.length;i++){
    let duplicate=false;
    for(let j=0;j<unique.length;j++){
        if(fruits[i]===unique[j]){
           duplicate=true;
           break;

        }

    }
if(!duplicate){
    unique.push(fruits[i])
}

}

console.log(unique);