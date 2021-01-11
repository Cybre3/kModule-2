let result = (num1, num2, num3) => (num1 + num2) - num3;

function main(inputNum1, inputNum2, inputNum3) {
  let output = result(inputNum1, inputNum2, inputNum3);
  console.log(output);
}

main(23, 6, 10);
main(1, 17, 30);
main(42, 58, 100);
