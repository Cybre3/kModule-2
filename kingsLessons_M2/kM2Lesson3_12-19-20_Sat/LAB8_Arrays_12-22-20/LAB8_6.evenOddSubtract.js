// function main (numArr) {
//     let evenSumArr = 0;
//     let oddSumArr = 0;

//     for (let i = 0; i < numArr.length; i++) {
//         if (numArr[i] % 2 === 0) {
//             evenSumArr += numArr[i];
//         } else {
//             oddSumArr += numArr[i];
//         }
//     }

//     console.log(evenSumArr - oddSumArr);
// }

function main(numArr) {
//   for (let i = 0; i < numArr.length; i++) {
//     numArr[i] = Number(numArr[i]);
//   }

  let evenSum = 0;
  let oddSum = 0;

  for (let num of numArr) {
      num = Number(num);
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  
  console.log(evenSum - oddSum);

}
main(['1', '2', '3', '4', '5', '6']);
main([3, 5, 7, 9]);
main([2, 4, 6, 8, 10]);
