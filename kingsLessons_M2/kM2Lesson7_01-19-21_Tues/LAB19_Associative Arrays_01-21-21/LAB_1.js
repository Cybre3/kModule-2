function main(stringArr) {
    // Create an Empty Object (Associative Array)
    let phoneBook = {};

    // Iterate through the inputs to store the data in Associative Array
    stringArr.forEach((string) => {
        // Get name and number from string
        // By converting string to array using split() on space
        let [name, num] = string.split(' ');
        // let [name, number] = item.split(' ');
        // Store key/value in associative array
        phoneBook[name] = num;
    });
    
    // Iterate to print the associative array
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}
main([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344',
]);
