let digitsArr = (newNum) => {
    let digits = [];

    while (newNum !== 0) {
        let digit = newNum % 10;
        newNum = Math.floor(newNum / 10);
        digits.push(digit);
    }
    digits = digits.reverse();
    return digits;
};

function main(number) {
    let newNum = number;
    let digits = digitsArr(newNum);    

    let sum = 0;
    for (let num of digits) {
        sum += num;
    }
    let average = Number((sum / digits.length).toFixed(2));
    while (average <= 5) {
        sum += 9;
        digits.push(9);
        average = Number((sum / digits.length).toFixed(2));
    }

    console.log(digits.join(''));
}

main(5835);
