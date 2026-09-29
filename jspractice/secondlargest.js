let arr=[1,48,5,6,5,65,34];
let largest=-Infinity;
let secondLargest=-Infinity;

for(let num of arr){
    if(num>largest){
        secondLargest=largest;
        largest=num;
    }
    else if(num>secondLargest&&num!=largest){
        secondLargest=num;

    }
}
console.log("largeest "+largest);
console.log("smallest "+secondLargest)

// to find smallest and second smallest remove - from infinity and change > to <
//for largest and smallest use arr[0] as largest and smallest > to find largest < to smallest