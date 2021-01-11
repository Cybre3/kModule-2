function main(binaryNum) {
  let sum = 0;

  for (let i = binaryNum.length - 1; i >= 0; i--) {
      
    if (binaryNum[i] === '1') {
      sum += 2 ** (binaryNum.length - 1 - i);
    }
  }

  console.log(sum);
}

main('1000011010101101011');
main('11110000');