let nums = [1, 2, 3, 4, 5, 100, 200, 300, 400];
console.log(nums.sort().join(' ')); // will not work properly

let names = ['John', 'Mike', 'Adam'];
console.log(names.sort().join(' ')); // will work with strings


console.log(
  nums
    .sort((a, b) => 
    // {
    //   if (a > b) {
    //     return 1;
    //   }
    //   if (a < b) {
    //     return -1;
    //   }
        a - b
        // b - a
    // }
    )
    .join(' ')
);
console.log(nums.sort((a, b) => a - b).join(' '));

console.log(
    nums
      .sort((a, b) => 
      // {
      //   if (a > b) {
      //     return 1;
      //   }
      //   if (a < b) {
      //     return -1;
      //   }
          // a - b
          b - a
      // }
      )
      .join(' ')
  );  
  console.log(nums.sort((a, b) => b - a).join(' '));

  let namesList = ['mike', 'Mike', 'john', 'John'];

  console.log(namesList.sort((a, b) => a.localeCompare(b)));
  console.log(namesList.sort((a, b) => b.localeCompare(a)));