function main(string1Arr, string2Arr) {
    for (let i= 0; i < string1Arr.length; i++) {
        let compare1 = string1Arr[i];

        for (let j = 0; j < string2Arr.length; j++) {
            let compare2 = string2Arr[j];
            
            if (compare1 === compare2) {
                console.log(compare2);
            }
        }
    }    
}

main(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
main(['K', 'i', 'n', 'g',   's', ' l', 'a', 'n', 'd'], ['i', 'd', 'e', 'a'] );