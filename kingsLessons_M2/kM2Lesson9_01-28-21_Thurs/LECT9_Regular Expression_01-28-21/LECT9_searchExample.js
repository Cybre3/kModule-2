let text = 'Hello world world WORLD';
let pattern = /world/gi;

result = text.search(pattern);
// let result = text.match(pattern);
// result.forEach((item, index) => console.log(index)); // 0 \n 1 \n 2
console.log(result); // 6