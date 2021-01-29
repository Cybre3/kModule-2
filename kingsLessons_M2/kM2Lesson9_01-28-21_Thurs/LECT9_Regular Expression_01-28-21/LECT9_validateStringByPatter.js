let text = 'Today is 2015-05-11';
let regex = /\d{4}-\d{2}-\d{2}/g;
let containsValidDate= regex.test(text);
console.log(containsValidDate); // true