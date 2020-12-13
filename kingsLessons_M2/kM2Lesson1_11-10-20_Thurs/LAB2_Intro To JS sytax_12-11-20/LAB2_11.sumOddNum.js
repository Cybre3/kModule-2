// function main(num) {
//     let i = 1;
//     let sum = 0;
//     let oddNum = 1;

//     while(i <= num) {        
//         console.log(oddNum);
//         sum += oddNum;
//         oddNum += 2;
//         i++;
//     }

//     console.log(`Sum: ${sum}`);
// }

// main(5);
// main(3);
// main(23);

function odd(num) {
    let sum = 0;

    for(let i = 1; i <= num * 2; i += 2) {
        console.log(i);
        sum += i;
    }
    console.log(`Sum: ${sum}`);
}

odd(5);
