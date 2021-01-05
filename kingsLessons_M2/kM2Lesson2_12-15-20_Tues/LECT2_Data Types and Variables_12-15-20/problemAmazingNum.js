function main(num) {

    let sum = 0;
    let newNum = num;
    
    while(newNum > 0) {
        sum += newNum % 10;
        newNum = Math.floor(newNum / 10);        
    }

    if(sum === 9) {
        result = `${num} Amazing? True`;
    } else {
        result = `${num} Amazing? False`;
    }

    console.log(`${result}`);
}

main(1233);
main(999);