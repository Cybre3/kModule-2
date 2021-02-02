function main(jsonInput) {

    let objData = JSON.parse(jsonInput);
    let arr = Object.entries(objData);

    for(let [key, value] of arr) {
        console.log(`${key}: ${value}`);
    }
}

main('{"name": "Georger", "age": 40, "town": "Atalanta"}');