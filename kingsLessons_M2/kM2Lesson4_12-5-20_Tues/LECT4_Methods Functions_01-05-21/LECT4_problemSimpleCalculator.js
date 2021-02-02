let calculator = (num1, num2, operator) => {
    switch(operator) {
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        default:
           return 'Invalid';
    }
};


console.log(calculator(5, 10, 'multiply'));
