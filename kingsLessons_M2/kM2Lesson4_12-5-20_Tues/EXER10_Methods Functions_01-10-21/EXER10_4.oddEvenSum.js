let sortSums = (num) => {
  let evenSum = 0;
  let oddSum = 0;
  let tempNum = String(num);
  
  for (let i = tempNum.length - 1; i >= 0; i--) {
    if (tempNum[i] % 2 !== 0) {
      oddSum += +tempNum[i];
    } else {
      evenSum += +tempNum[i];
    }
  }
  
  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
};

function main(inputNum) {
    let oddEvenSum = sortSums(inputNum);
    console.log(oddEvenSum);
}

main(1000435);
main(3495892137259234);