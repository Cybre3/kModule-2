function main(num) {
  let sum = 0;
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  let result = sum.toString().includes('9');
  if (result === true) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }
}
// function main(num) {
//     let newNum = num;
//     let sum = 0;
//     let nineCount = 0;
    
//     while (newNum !== 0) {    
//       sum += newNum % 10;
//       newNum = Math.floor(newNum / 10);
//     }
  
//     let tempSum = sum;
  
//     while(tempSum !== 0) {
//      let digit = tempSum % 10;
//       if (digit === 9) {
//           nineCount++;
//         }
//       tempSum = Math.floor(tempSum / 10);
//     }
  
//     if (nineCount === 0) {
//       console.log(`${num} Amazing? False`);
//     } else {
//       console.log(`${num} Amazing? True`);
//     }
//   }

main(68320);
main(8452);
main(583472);
