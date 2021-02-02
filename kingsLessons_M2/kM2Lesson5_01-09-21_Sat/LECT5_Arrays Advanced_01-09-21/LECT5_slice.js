let products = ['Tv', 'Radio', 'Mic', 'Monitor', 'Alarm'];
// slice makes a copy of the array, does not change the array
let salesItems = products.slice(2, 4); // included start index until desired end index

console.log(products);
console.log(salesItems);