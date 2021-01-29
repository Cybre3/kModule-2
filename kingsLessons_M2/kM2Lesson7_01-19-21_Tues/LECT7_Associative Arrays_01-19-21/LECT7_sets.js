let setData = new Set();
let setData2 = new Set(['John', 10, false, 'John']);
console.log(setData2);
setData2.add('11');
console.log(setData2);

let entries = setData2.entries();
console.log(entries);

let nums = [1, 2, 3, 4, 5, 5, 6];
let numbers = [...new Set(nums)];
console.log(numbers);