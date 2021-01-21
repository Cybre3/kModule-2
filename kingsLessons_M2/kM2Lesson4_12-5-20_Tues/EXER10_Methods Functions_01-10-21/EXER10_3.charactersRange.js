let charCodeBigger = (char1, char2) => {
  let start = Math.min(char1.charCodeAt(), char2.charCodeAt());
  let end = Math.max(char1.charCodeAt(), char2.charCodeAt());
  let charArr = [];
  for (let i = start + 1; i < end; i++) {
    let betweenChar = String.fromCharCode(i);
    charArr.push(betweenChar);
  }
  return charArr;
};

function main(inputChar1, inputChar2) {
  let charList = charCodeBigger(inputChar1, inputChar2);
  console.log(charList.join(' '));
}


main('a', 'd');
main('#', ':');
main('C', '#');
