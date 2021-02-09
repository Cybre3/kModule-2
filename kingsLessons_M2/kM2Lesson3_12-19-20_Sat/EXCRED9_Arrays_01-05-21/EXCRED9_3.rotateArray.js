let rotate = (arr) => {
  let numRotations = arr[arr.length - 1];

  arr.pop();

  for (i = 0; i < numRotations; i++) {
    let removedElmnt = arr.pop();
    arr.unshift(removedElmnt);
  }

  return arr;
};

function main(inputArr) {
  let rotatedArr = rotate(inputArr);
  console.log(rotatedArr.join(' '));
}

main(['1', '2', '3', '4', '2']);
main(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
main(['remove', 'add', 'remove', '5']);
