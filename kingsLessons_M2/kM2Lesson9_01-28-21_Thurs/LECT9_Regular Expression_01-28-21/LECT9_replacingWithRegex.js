let text = 'My bank account number: 1264532188 and the routing Number : 0126513245';
let regex = /\d+/g;

let censoredText = text.replace(regex, 'XXXX');
console.log(censoredText);