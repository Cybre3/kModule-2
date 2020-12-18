// function main(num) {
//     let tempNum = num;
//     for(let i = 1; i <= num; i++) {
//         lastDigit = i % 10;
//         firstDigit = parseInt(i / 10);
//         let sum = firstDigit + lastDigit;        
        
//         if(sum === 5 || sum === 7 || sum === 11) {
//             console.log(`${i} -> True`);
//         } else {
//             console.log(`${i} -> False`);
//         }
//     }
// }

// function main(num) {
//     for(let i = 1; i <= num; i++) {
//         let sum = 0;
//         let num = i;
//         while (num > 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10);
//         }

//         if(sum === 5 || sum === 7 || sum === 11) {
//             console.log(`${i} -> True`);
//         } else {
//             console.log(`${i} -> False`);
//         }
//     }
// }

function main(num) {
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let number = i.toString();
        for (let j = 0; j < number.length; j++) {
            sum += Number(number[j]);
        }

        if(sum === 5 || sum === 7 || sum === 11) {
            console.log(`${number} -> True`);
        } else {
            console.log(`${number} -> False`);
        }
    }
    

}

main(15);