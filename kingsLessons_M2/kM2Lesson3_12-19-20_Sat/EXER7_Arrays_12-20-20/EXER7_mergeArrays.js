function main(string1Arr, string2Arr) {
  let newStringArr = [];
  
  for (let i = 0; i < string1Arr.length; i++) {
   let sum = 0;

    if (i % 2 === 0) {
      sum += Number(string1Arr[i]) + Number(string2Arr[i]);
      newStringArr.push(sum);
    } else {
      newStringArr.push(string1Arr[i] + string2Arr[i]);
    }
  }

  console.log(newStringArr.join(' - '));
}

main(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
main(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);
