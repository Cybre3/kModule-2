let nums = [10,20,30];
console.log(nums.length); // 3

nums.push(40); // adds to end of array
nums.unshift(5); // adds to beginning of array
console.log(nums);  // [5, 10, 20, 30, 40]
console.log(nums.length); // 5
nums.pop(); // removes last item in array
nums.shift(); // selects first item in array
console.log(nums);

console.log(nums.sort()); // incrementally places numbers in order
console.log(nums.sort().reverse()); // decrementally places numbers in order
console.log(nums.reverse()); // only reverses the array

console.log(nums.indexOf(4)); // will return as -1 because it is not there. array only has 0, 1, 2
console.log(nums.join(' --> ')); // joins array as string with indicated separator