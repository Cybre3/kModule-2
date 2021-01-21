function main(numArr) {
    
  for (let i = 0; i < numArr.length; i++) {
    let palinNum = true;
    let num = String(numArr[i]);
    let reverseNum = '';

    for (let j = num.length - 1; j >= 0; j--) {
      reverseNum += num[j];
    }

    if (reverseNum !== num) {
      palinNum = false;
    }
    
    console.log(palinNum);
  }
}

main([123, 323, 421, 121]);
main([32, 2, 232, 1010]);
