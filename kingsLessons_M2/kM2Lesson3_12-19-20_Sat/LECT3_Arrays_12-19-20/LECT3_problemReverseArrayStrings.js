function main(lettersArr) {
  for (let i = 0; i < lettersArr.length / 2; i++) {
    let currentItem = lettersArr[i];
    let rightSide = lettersArr.length - 1 - i;

    lettersArr[i] = lettersArr[rightSide];
    lettersArr[rightSide] = currentItem;
  }

  console.log(lettersArr.join(' '));
}

main(['a', 'b', 'c', 'd', 'e']);
