let nums1 = [1, 2, 3, 100, 200];

// nums1.sort(); // [1, 100, 2, 200, 3]

nums1.sort((a, b) => a - b);

// function sortFunction(x, y){
    // return x - y; // ascending
    // y - x // descending
// }

console.log(nums1);