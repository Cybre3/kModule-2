function main(num) {
    let newNum = num;
    let sum = 0;
    
    while(newNum !== 0) {
        sum += newNum % 10;
        newNum = Math.floor(newNum / 10);
    }

    console.log(sum);
}

main(245678);
main(97561);
main(543);