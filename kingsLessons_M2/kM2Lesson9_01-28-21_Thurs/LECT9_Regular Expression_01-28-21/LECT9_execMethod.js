let text = 'My birthday is 12-jun-2020 and my dad\'s birthday 13-march-1954';

let regex = /\d{1,2}-[a-z]{3,5}-(\d{4})/gi;

let found1 = regex.exec(text);
let found2 = regex.exec(text);

console.log(` DOB: ${found1[0]}, ${found2[0]}`);