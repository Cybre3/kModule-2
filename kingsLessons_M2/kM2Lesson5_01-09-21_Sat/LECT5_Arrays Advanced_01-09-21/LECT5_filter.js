let nums = [1, 200, 60, 300, 450, 50];

let priceLessThan100 = nums.filter((a) => a < 100);

console.log(priceLessThan100);

// filter must take a function inside of it

let numsWord = ['one', 'two', 'three', 'four'];

// let letterStartWithT = nums.filter((a) => a.startsWith('t'));
// console.log(letterStartWithT.join('|'));

let namesList = ['John', 'Mike', 'Tom'];
let namesListLengths = namesList.map((a) => a.length);