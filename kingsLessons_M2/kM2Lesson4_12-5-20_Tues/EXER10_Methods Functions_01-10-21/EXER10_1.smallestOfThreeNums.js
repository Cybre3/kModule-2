let findSmallNum = (num1, num2, num3) => Math.min(num1, num2, num3);

function main(inputNum1, inputNum2, inputNum3) {
    let smallestNum = findSmallNum(inputNum1, inputNum2, inputNum3);
    console.log(smallestNum);
}

main(2,  5,  3);
main(600, 342, 123);
main(25, 21, 4);