function main(numsArr) {
  let result = [];
  numsArr.forEach((value) => {
    if (value < 0) {
        result.unshift(value);
    } else {
        result.push(value);
    }
  });
  console.log(result.join('\n'));
}

main([7, -2, 8, 9]);
