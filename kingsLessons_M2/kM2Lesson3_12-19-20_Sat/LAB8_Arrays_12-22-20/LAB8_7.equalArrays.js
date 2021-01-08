// function main(numArr1, numArr2) {
//     let sum = 0;
//     let identical = true;

//     for(let i = 0; i < numArr1.length; i++) {
//         if (numArr1[i] === numArr2[i]) {
//             sum += parseInt(numArr1[i]);
//         } else {
//             console.log(`Arrays are not identical. Found difference at ${i} index.`);
//             identical = false;
//             break;
//         }
//     }

//     if (identical) {
//         console.log(`Arrays are identical. Sum: ${sum}`);
//     }
// }

function main(numArr1, numArr2) {
    let sum = 0;
    let index = 0;
    let areEqual = true;

    for (let i = 0; i < numArr1.length; i++) {
        if (Number(numArr1[i]) !== Number(numArr2[i])) {
            areEqual = false;
            index = i;
            break;
        } else {
            sum += Number(numArr1[i]);
        }
    }

    if(areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index.`);
    }
}
main(['10','20','30'], ['10','20','30']);
main(['1','2','3','4','5'], ['1','2','4','4','5']);
main(['1'], ['10']);