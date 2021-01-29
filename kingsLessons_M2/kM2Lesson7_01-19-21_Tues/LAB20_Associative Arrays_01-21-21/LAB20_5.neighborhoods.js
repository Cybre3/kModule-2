/* 
•Save the first element of the array as the neighborhoods
•Fill the map with them and set their values as empty arrays
•Loop through the rest of the elements
•Check if the neighborhood is in the list/map and add the person
•Sort them by count of inhabitants
•Print
*/

function main(neighborhoodArr) {
    // create empty map
    let neighborInfo = new Map();
    // save first element of array as neighborhoods
    let streets = neighborhoodArr.shift().split(', ');
    // constructed map
    streets.forEach((nh) => neighborInfo.set(nh, []));


    neighborhoodArr.forEach((item) => {
        let [neighborhood, personName] = item.split(' - ');
        // check if neighborhood in map
        // add person
        if (streets.includes(neighborhood)) {
            neighborInfo.get(neighborhood).push(personName);
        }
    });

    // sort by amount of people on each street
    let mapArr = Array.from(neighborInfo);
    mapArr.sort((a, b) => b[1].length - a[1].length);

    // print 
    mapArr.forEach(item => {
        console.log(`${item[0]}: ${item[1].length}`);
        //people living in neighborhood/on street
        item[1].forEach(person => console.log(`--${person}`));
    });
}

main([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy',
]);
