let str = "swiss";

for (let i = 0; i < str.length; i++) {

    let count = 0;

    for (let j = 0; j < str.length; j++) {

        if (str.charAt(i) === str.charAt(j))
            count++;
        console.log(count);
    }


    if (count === 1){
        console.log(str.charAt(i));
    //break;
    }
    const defaultvalue = 'Default_' + Date.now().toString().slice(-4);
    console.log(defaultvalue);
}