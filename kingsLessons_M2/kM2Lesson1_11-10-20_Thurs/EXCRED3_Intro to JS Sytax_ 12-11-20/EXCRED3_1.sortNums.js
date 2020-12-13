function main(num1, num2, num3) {
    let firstNum = Math.max(num1, num2, num3);
    let lastNum = Math.min(num1, num2, num3);
    let midNum = 0;

   if(num1 >= num2 && num1 <= num3) {
        midNum = num1;
    } else if (num2 >= num1 && num2 <= num3) {
        midNum = num2;
    } else if (num3 >= num1 && num3 <= num2) {
        midNum = num3;
    }

    console.log(`${firstNum}`);
    console.log(`${midNum}`);
    console.log(`${lastNum}`);
}

main(2, 1, 3);
main(-2, 1, 3);
main(0, 0, 2);

// function main(num1, num2, num3) {
//     let minNum = 0;
//     let midNum = 0;
//     let maxNum = 0;

//     if(num1 > num2 && num1 > num3) {
//         maxNum = num1;
//     } else if (num2 > num1 && num2 > num3) {
//         maxNum = num2;
//     } else if (num3 > num1 && num3 > num2) {
//         maxNum = num3;
//     }

//     if(num1 < num2 && num1 < num3) {
//         minNum = num1;
//     } else if (num2 < num1 && num2 < num3) {
//         minNum = num2;
//     } else if (num3 < num1 && num3 < num2) {
//         minNum = num3;
//     }

//     if(num1 >= num2 && num1 <= num3) {
//         midNum = num1;
//     } else if (num2 >= num1 && num2 <= num3) {
//         midNum = num2;
//     } else if (num3 >= num1 && num3 <= num2) {
//         midNum = num3;
//     }

//     console.log(`${maxNum}`);
//     console.log(`${midNum}`);
//     console.log(`${minNum}`);

// }

// main(2, 1, 3);
// main(-2, 1, 3);
// main(0, 0, 2);