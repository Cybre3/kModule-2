function main(num) {
    
    for(let i = 0; i < num; i++) {
        let firstLetter = String.fromCharCode(97 + i);

        for(let i = 0; i < num; i++) {
            let secondLetter = String.fromCharCode(97 + i);
            
            for(let i = 0; i < num; i++) {
                let thirdLetter = String.fromCharCode(97 + i);
                console.log(firstLetter + secondLetter + thirdLetter);
            }
        }
    }
}

main(3);