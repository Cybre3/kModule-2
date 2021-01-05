function main(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let type = '';

    if(sum % 1 !== 0) {
        type = 'Float';
    } else{
        type = 'Integer';
    }

    console.log(`${sum} ${type}`);
}

main(9, 100, 1.1);
main(100, 200, 303);