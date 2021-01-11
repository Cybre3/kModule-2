function main(amountOfNums, numsToAdd) {
  let sequence = [1];
  let sum = 1;

  for (let i = 1; i <= amountOfNums; i++) {
    let startNum = Math.max(0, i - numsToAdd);
    let end = i - 1;
    let slicedPart = sequence.slice(startNum, end);

    slicedPart.forEach((a) => (sum += a));

    sequence.push(sum);
  }

  console.log(sequence);
} 

main(6, 3);
