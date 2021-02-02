// example 1
// function main(AreaName, area, population, country, postalCode) {
//     let object = {
//         AreaName,
//         area,
//         population,
//         country,
//         postalCode
//     };

//     for(let key in object) {
//         console.log(`${key} -> ${object[key]}`);
//     }
// }

// main('Atlanta',347, 420003, 'USA', 30060);

// example2
// function main(AreaName, area, population, country, postalCode) {
//     let city = {
//         AreaName: AreaName,
//         area: area,
//         population: population,
//         country: country,
//         postalCode: postalCode
//     };

//     for(let propName in city) {
//         console.log(`${propName} -> ${city[propName]}`);
//     }
// }

// main('Atlanta',347, 420003, 'USA', 30060);

//example3
// function main(arr) {

//     let [AreaName, area, population, country, postalCode] = arr;
    
//     // if(!Array.isArray(arr)) {
//     //     console.log('Please pass an Array');
//     // } else {
//     //     // what you want
//     // }
//     let city = {
//         AreaName,
//         area,
//         population,
//         country,
//         postalCode
//     };

//     for(let propName in city) {
//         console.log(`${propName} -> ${city[propName]}`);
//     }   
// }

// main(['Atlanta',347, 420003, 'USA', 30060]);

// example4
function main(arr) {

    let [AreaName, area, population, country, postalCode] = arr;
    
   
    let city = {
        AreaName,
        area,
        population,
        country,
        postalCode
    };

    let cityData = Object.entries(city);

    for(let [key, value] of cityData) {
        console.log(`${key} -> ${value}`);
    }   
}

main(['Atlanta',347, 420003, 'USA', 30060]);