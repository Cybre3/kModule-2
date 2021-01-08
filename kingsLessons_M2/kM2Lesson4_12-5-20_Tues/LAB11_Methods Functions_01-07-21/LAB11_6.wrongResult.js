let checkNum = (num1, num2, num3) => {
    let count = 0;

    if (num1 < 0) {

        count++;
    }

    if (num2 < 0) {

        count++;
    }

    if (num3 < 0) {

        count++;
    }

    if (num1 == 0 || num2 == 0 || num3 == 0) {
        return 'Positive';
    } else if (count % 2 === 0) {
        return 'Positive';
    } else {
        return 'Negative';
    }
};

function main(inputNum1, inputNum2, inputNum3) {
    let type = checkNum(inputNum1, inputNum2, inputNum3);
    console.log(type);
}

main(5, 12, -15);
main(-6, -12, 14);
main(-1, -2, -3);
main(-1, 0, 1);