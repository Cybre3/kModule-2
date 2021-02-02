// Arrow function
let hello2 = () => {
    console.log('Hello world');
};

hello2();

// Arrow function with inputs
let multiplyBy5 = num => console.log(num * 5);
let add = (a, b) => console.log(a + b);

// Return values from Arrow function
let sum = (a, b) => a + b;  // return 6 + 7 = 13
console.log(sum(6, 7));

// Return values from Arrow function w/curly brackets
let sum1 = (a, b) => {
    return a + b;  // return 6 + 7 = 13
   };
   console.log(sum1(6, 7));