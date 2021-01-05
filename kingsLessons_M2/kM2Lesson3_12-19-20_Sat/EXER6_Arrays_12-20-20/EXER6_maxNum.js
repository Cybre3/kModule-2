function main(numArr) {
  let newNumArr = [];

  for (let i = 0; i < numArr.length; i++) {
    let tempMax = numArr[i];
    let status = '';

    for (let j = i + 1; j <= numArr.length; j++) {

      if (tempMax > numArr[j] || numArr[j] == undefined) {
        status = 'yes';
      } else {
        status = 'no';
        break;
      }
    }

    if (status === 'yes') {
      newNumArr.push(tempMax);
    }
  }

  console.log(newNumArr.join(' '));
}

main([34, 62, 50, 20, 52, 10, 38]);
main([14, 24, 3, 19, 15, 17]);
main([41, 41, 34, 20]);
main([27, 19, 42, 2, 13, 45, 48]);
