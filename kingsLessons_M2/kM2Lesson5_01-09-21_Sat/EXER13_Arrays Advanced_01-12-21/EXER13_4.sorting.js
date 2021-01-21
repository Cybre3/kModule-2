// function main(numsArr) {
//   let sortedArr = [];

//   for (let i = 0; numsArr.length > 0; i++) {
//     let maxNum = Math.max(...numsArr);
//     let minNum = Math.min(...numsArr);
//     sortedArr.push(maxNum);
//     numsArr.splice(numsArr.indexOf(maxNum), 1);
//     sortedArr.push(minNum);
//     numsArr.splice(numsArr.indexOf(minNum), 1);
//   }

//   console.log(sortedArr.join(' '));
// }



main([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

function main(numsArr) {
    let sortedArr = [];
    numsArr.sort((a, b) => a - b);

    for(let i = 0; numsArr.length > 0; i++) {
        sortedArr.push(numsArr.pop());
        sortedArr.push(numsArr.shift());
    }

    console.log(sortedArr.join(' '));
}