let sortSums = (num) => {
  let evenSum = 0;
  let oddSum = 0;
  for (let number in num) {
    if (number.includes()) {
      oddSum += number;
    } else {
      evenSum += number;
    }
  }
};

function main(inputNum) {
    let oddEvenSum = sortSums(inputNum);
    console.log(oddEvenSum);
}

main(1000435);
main(3495892137259234);