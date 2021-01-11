let char1CodeBigger = (char1, char2) => {
  let start = char1.charCodeAt();
  let end = char2.charCodeAt();
  let charArr = [];
  for (let i = start + 1; i < end; i++) {
    let betweenChar = String.fromCharCode(i);
    charArr.push(betweenChar);
  }
  return charArr;
};

let char2CodeBigger = (char1, char2) => {
  let start = char1.charCodeAt();
  let end = char2.charCodeAt();
  let charArr = [];
  for (let i = end + 1; i < start; i++) {
    let betweenChar = String.fromCharCode(i);
    charArr.push(betweenChar);
  }
  return charArr;
};

function main(inputChar1, inputChar2) {
  let charList;

  if (inputChar1.charCodeAt() < inputChar2.charCodeAt()) {
    charList = char1CodeBigger(inputChar1, inputChar2);
  } else {
    charList = char2CodeBigger(inputChar1, inputChar2);
  }
  console.log(charList.join(' '));
}

main('a', 'd');
main('#', ':');
main('C', '#');
