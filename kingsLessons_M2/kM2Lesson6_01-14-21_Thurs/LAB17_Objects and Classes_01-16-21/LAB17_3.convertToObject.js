function main(jsonData) {

    let personData = JSON.parse(jsonData);
    let arr = Object.entries(personData);

    // console.log(arr);

    for(let [key, value] of arr) {
        console.log(`${key}: ${value}`);
    }
}

main('{"name": "George", "age": 40, "town": "Atlanta"}');