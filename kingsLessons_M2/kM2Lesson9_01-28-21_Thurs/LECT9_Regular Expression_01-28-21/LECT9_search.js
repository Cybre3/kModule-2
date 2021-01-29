let pattern = /hello/;

let text = 'hello world';
let text2 = 'world hello My hello';

// will return index  // if not found will return -1
result = text.search(pattern); // 0  
result2 = text2.search(pattern); // 6

console.log(result);
console.log(result2);