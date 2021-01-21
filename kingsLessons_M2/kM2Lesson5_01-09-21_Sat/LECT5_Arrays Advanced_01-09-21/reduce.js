let nums = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;
let total = nums.reduce((sum , a) => sum + a, 2);

console.log(total);