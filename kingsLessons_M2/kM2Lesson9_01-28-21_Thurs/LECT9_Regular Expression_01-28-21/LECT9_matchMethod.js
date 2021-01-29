let text = 'Peter: 123 Mark: 456';
let regex = /([A-Z][a-z]+): (\d+)/g;
let matches = text.match(regex);

// .match() is a string expression method
// .test() is a regular expression method

console.log(matches);
console.log(matches.length); // 2
console.log(matches[0]); // Peter: 123
console.log(matches[1]); // Mark: 45621
