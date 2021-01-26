function main(arr) {
    let phoneBook = {};
    arr.forEach(entry => {
        let [personName, personNum] = entry.split(' ');
        phoneBook[personName] = personNum;
    });

    for(let key in phoneBook){
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

main([`Tim 0834212554`,`Peter 0877547887`,`Bill 0896543112`,`Tim 0876566344`]);