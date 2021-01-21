// create a map
const mapData1 = new Map();
const mapData2 = new Map([
    [1, 'John'],
    [2, 'Mike'],
    [3, 'Sam'],
    ['John', 'isMarried']
]);

//Get the size
console.log(mapData2.size);
// add item string key
mapData1.set('Mike', 'Johns');
// add boolean key
mapData2.set(true, 'Yes');
// add item object
let address = {city: 'New York', state: 'NY'};
mapData1.set(address, 'john');

// Get the value using the ket .get()
// console.log(mapData1.get('Mike')); // Johns
// console.log(mapData1.has(address)); // true
// console.log(mapData1.has('Clara')); // false
// console.log(mapData2);

let keysArr = Array.from(mapData2.keys());
console.log(keyArr);