function main(numsArr) {

  // numArr have more than one item keep condensing
  while (numsArr.length > 1) {
    let condensed = [];
    
    // inner loop will add adjacent elements together
    for (let i = 0; i < numsArr.length - 1; i++) {
      condensed.push(numsArr[i] + numsArr[i + 1]);
    }

    numsArr = condensed;
  }

  console.log(numsArr.join(' '));
}

main([2, 10, 3]);
main([5, 0, 4, 1, 2]);
main([1]);
