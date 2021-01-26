let products = {};
products['TV 16 inch'] = 129.99;
products['Radio'] = 45;
products['Alarm Clock'] = 15.99;

// console.log(products); // { 'TV 16 inch': 129.99, Radio: 45, 'Alarm Clock': 15.99 }

// for (let key in products) {
//     console.log(`${key} -> ${products[key]}`);   // TV 16 inch -> 129.99
// }                                                // Radio -> 45
                                                    // Alarm Clock -> 15.99

let keys = Object.keys(products);
keys.forEach(key => console.log(`${key} = ${products[key]}`));  // TV 16 inch = 129.99
                                                                // Radio = 45
                                                                // Alarm Clock = 15.99
// console.log(keys);