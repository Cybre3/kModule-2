let text = '1--2----3---------4';
let regex = /\-+/g;
let result = text.split(regex);
console.log(result.join(''));