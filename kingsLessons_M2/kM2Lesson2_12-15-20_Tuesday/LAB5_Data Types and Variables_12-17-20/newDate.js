let date = new Date();
// date = new Date('1970/11/12');
date.setDate('12');
date.setMonth('11');
date.setFullYear('1975');
date.setMinutes('12');
date.setHours('12');

console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getMinutes());
console.log(date.getHours());

let timeStamp = date.setDate('12');
console.log(timeStamp);

console.log(date);