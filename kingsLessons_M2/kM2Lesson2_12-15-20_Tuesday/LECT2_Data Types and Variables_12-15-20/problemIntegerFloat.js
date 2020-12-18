function main(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let type = '';

    // if (sum % 1 === 0) {
    //      type = 'Integer';
    // } else {
    //     type = 'Float';
    // }

    if(parseInt(sum) === sum) {
        type = 'Integer';
    } else {
        type = 'Float';
    }

    console.log(`${sum} - ${type}`);
}

main(9, 100, 1.1);
main(100, 200, 303);
main(122.3, 212.3, 5);