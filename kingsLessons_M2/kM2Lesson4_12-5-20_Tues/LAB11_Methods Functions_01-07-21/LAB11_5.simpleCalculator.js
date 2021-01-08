let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let divide = (num1, num2) => num1 / num2;
let multiply = (num1, num2) => num1 * num2;

function main(num1, num2, operator) {
    let result;
    switch(operator) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
    }

    console.log(result);
}


// function main(num1, num2, op) {
//     let operators = ['multiply', 'subtract', 'add', 'divide'];
//     let mathOpt = ['*', '-', '+', '/'];

//     let index = operators.indexOf(op);
//     let sign = mathOpt[index];

//     let result = eval(`${num1}${sign}${num2}`);
    
//     console.log(result);
// }

main(5, 5, 'multiply');
main(40, 8, 'divide');
main(12, 19, 'add');
main(50, 13, 'subtract');